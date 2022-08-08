const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const { createToken } = require("../utils/logicFunctions");

class User {
	static async register(credentials) {
		const requiredFields = [
			"email",
			"password",
			"first_name",
			"last_name",
			"birthday",
			"title",
		];

		requiredFields.forEach((property) => {
			if (!credentials.hasOwnProperty(property)) {
				throw new BadRequestError(`Missing ${property} in request body`);
			}
		});

		// Check if the token input is valid
		var manager = null;
		var company = null;

		if (credentials.token) {
			const managerInfo = await User.fetchManagerByToken(credentials.token);
			if (!managerInfo) {
				throw new BadRequestError(
					`Invalid manager token: ${credentials.token}`
				);
			}

			manager =
				managerInfo.first_name +
				" " +
				managerInfo.last_name +
				", " +
				managerInfo.email;

			company = managerInfo.company;
		}

		const emailRegex = /[^@]+@[^@]+\.[^@]+/;

		function validateEmail(email) {
			return String(email).toLowerCase().match(emailRegex);
		}

		if (!validateEmail(credentials.email)) {
			throw new BadRequestError("Invalid email");
		}

		const existingUser = await User.fetchUserByEmail(credentials.email);
		if (existingUser) {
			throw new BadRequestError(
				`A user already exists with the email ${credentials.email}`
			);
		}

		const hashedPassword = await bcrypt.hash(
			credentials.password,
			BCRYPT_WORK_FACTOR
		);

		const normalizedEmail = credentials.email.toLowerCase();
		const birthday = new Date(credentials.birthday.toString());

		const userResult = await db.query(
			`INSERT INTO users (email, password, first_name, last_name, birthday, title, company, manager)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, email, password, first_name, last_name, birthday, title, company, manager;
        `,
			[
				normalizedEmail,
				hashedPassword,
				credentials.first_name,
				credentials.last_name,
				birthday,
				credentials.title,
				company,
				manager,
			]
		);

		const user = userResult.rows[0];

		const addProgress = `
      INSERT INTO modules_1 (progress, user_id, module_id)
      VALUES ($1, $2, $3)
      RETURNING progress, user_id, module_id;
    `;

		const moduleStart = await db.query(addProgress, [0, user.id, 1]);

		const addProgress2 = `
    INSERT INTO modules_2 (progress, user_id, module_id)
    VALUES ($1, $2, $3)
    RETURNING progress, user_id, module_id;
  `;

		const moduleStart2 = await db.query(addProgress2, [0, user.id, 2]);

		if (credentials.token) {
			User.addToManagerArray(credentials.token, user.id);
		}

		return User.makePublicUser(user);
	}

	static async registerManager(credentials) {
		const requiredFields = [
			"email",
			"password",
			"first_name",
			"last_name",
			"birthday",
			"title",
			"isManager",
			"company",
		];

		var isManager = credentials.isManager;

		requiredFields.forEach((property) => {
			if (!credentials.hasOwnProperty(property)) {
				throw new BadRequestError(`Missing ${property} in request body`);
			}
		});

		const emailRegex = /[^@]+@[^@]+\.[^@]+/;

		function validateEmail(email) {
			return String(email).toLowerCase().match(emailRegex);
		}

		if (!validateEmail(credentials.email)) {
			throw new BadRequestError("Invalid email");
		}

		const existingUser = await User.fetchUserByEmail(credentials.email);
		if (existingUser) {
			throw new BadRequestError("A user already exists with this email");
		}

		const hashedPassword = await bcrypt.hash(
			credentials.password,
			BCRYPT_WORK_FACTOR
		);

		const normalizedEmail = credentials.email.toLowerCase();
		const birthday = new Date(credentials.birthday.toString());

		const userResult = await db.query(
			`INSERT INTO users (email, password, first_name, last_name, birthday, title, company, isManager)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id, email, password, first_name, last_name, birthday, title, company, isManager;`,
			[
				normalizedEmail,
				hashedPassword,
				credentials.first_name,
				credentials.last_name,
				birthday,
				credentials.title,
				credentials.company,
				isManager,
			]
		);

		const user = userResult.rows[0];

		const token = createToken(
			credentials.company,
			credentials.first_name,
			credentials.last_name
		);

		await db.query(
			`INSERT INTO manager (user_id, company, token)
      VALUES($1, $2, $3)
      RETURNING token, user_id, company;
      `,
			[user.id, credentials.company, token]
		);

		return User.makePublicUser({ ...user, token: token });
	}

	static async login(credentials) {
		const requiredFields = ["email", "password"];
		requiredFields.forEach((required) => {
			if (!credentials.hasOwnProperty(required)) {
				throw new BadRequestError(`Invalid ${required} provided`);
			}
		});
		const user = await User.fetchUserByEmail(credentials.email.toLowerCase());

		if (user?.password) {
			const validPassword = await bcrypt.compare(
				credentials.password,
				user.password
			);

			if (validPassword) {
				return User.makePublicUser(user);
			}
		}

		throw new UnauthorizedError("Incorrect Credentials");
	}

	static async addUserToken(token, email) {
		const manager = await User.fetchManagerByToken(token);

		const addManagerInfoQ = `
		UPDATE users
		SET company=$1, manager=$2
		WHERE email=$3;
		`;
		const managerData =
			manager.firstName + " " + manager.lastName + ", " + manager.email;

		const userData = await db.query(addManagerInfoQ, [
			manager.company,
			managerData,
			email,
		]);

		const user = await User.fetchUserByEmail(email);
		User.addToManagerArray(token, user.id);

		return userData.rows[0];
	}

	static async fetchUserByEmail(email) {
		if (!email) {
			throw new BadRequestError("No email was provided");
		}
		const query = `SELECT * FROM users WHERE email=$1`;
		const result = await db.query(query, [email.toLowerCase()]);
		const user = result.rows[0];
		return user;
	}

	static async fetchManagerByToken(token) {
		if (!token) {
			throw new BadRequestError("No token was provided");
		}

		const findManager = `
		SELECT first_name, last_name, email, manager.company 
			FROM users
			JOIN manager on manager.user_id = users.id
			WHERE manager.token = $1;
		`;

		const rawManagerData = await db.query(findManager, [token]);
		const managerData = rawManagerData.rows[0];
		if (!managerData) {
			throw new BadRequestError("Token provided is not valid");
		}
		return managerData;
	}

	static async addToManagerArray(token, userId) {
		const getManagerArray = `
		SELECT usersInPod
		FROM manager
		WHERE token = $1;
		`;

		const managerArrayRaw = await db.query(getManagerArray, [token]);
		const managerArray = managerArrayRaw.rows[0].usersinpod;
		var newManagerArray = [];
		if (!managerArray) {
			newManagerArray = [userId];
		} else {
			newManagerArray = [...managerArray, userId];
		}

		const updateManagerArray = `
		UPDATE manager
		SET usersInPod=$1
		WHERE token=$2;
		`;

		const addedManagerArray = await db.query(updateManagerArray, [
			newManagerArray,
			token,
		]);

		return addedManagerArray;
	}

	static async getProgress(id) {
		const query = `SELECT module_id, progress FROM modules_1 WHERE user_id=$1;`;
		const result = await db.query(query, [id]);
		const progress = result.rows[0];
		return progress;
	}

	static async login(credentials) {
		const requiredFields = ["email", "password"];
		requiredFields.forEach((required) => {
			if (!credentials.hasOwnProperty(required)) {
				throw new BadRequestError(`Invalid ${required} provided`);
			}
		});
		const user = await User.fetchUserByEmail(credentials.email.toLowerCase());

		if (user?.password) {
			const validPassword = await bcrypt.compare(
				credentials.password,
				user.password
			);

			if (validPassword) {
				return User.makePublicUser(user);
			}
		}

		throw new UnauthorizedError("Incorrect Credentials");
	}

	static async fetchUserById(id) {
		if (!id) {
			throw new BadRequestError("No id was provided");
		}
		const query = `SELECT * FROM users WHERE id=$1`;
		const result = await db.query(query, [id]);
		const user = result.rows[0];
		console.log(user);
		return user;
	}

	static async makePublicUser(user) {
		const userInfo = {
			id: user.id,
			email: user.email,
			firstName: user.first_name,
			lastName: user.last_name,
			title: user.title,
			birthday: user.birthday,
			isManager: user.ismanager,
		};

		if (user.manager) userInfo.manager = user.manager;
		if (user.company) userInfo.company = user.company;
		if (user.token) userInfo.token = user.token;

		return userInfo;
	}

	static async getProgress(id) {
		const query = `SELECT module_id, progress FROM modules_1 WHERE user_id=$1;`;
		const result = await db.query(query, [id]);
		const progress = result.rows[0];
		return progress;
	}
}

module.exports = User;
