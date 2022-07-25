const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");

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
			const getManagerNameQ = `
			SELECT first_name, last_name, email, manager.company 
			FROM users
			JOIN manager on manager.user_id = users.id
			WHERE manager.token = $1
			`;

			const managerInfoRaw = await db.query(getManagerNameQ, [
				credentials.token,
			]);
			const managerInfo = managerInfoRaw.rows[0];
			console.log(managerInfo);
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
			throw new BadRequestError("A user already exists with this email");
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
        RETURNING id, email, first_name, last_name;
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

		return User.makePublicUser(user);
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

	static async fetchUserByEmail(email) {
		if (!email) {
			throw new BadRequestError("No email was provided");
		}
		const query = `SELECT * FROM users WHERE email=$1`;
		const result = await db.query(query, [email.toLowerCase()]);
		const user = result.rows[0];
		return user;
	}

	static async makePublicUser(user) {
		const userInfo = {
			id: user.id,
			email: user.email,
			firstName: user.first_name,
			lastName: user.last_name,
		};

		if (user.manager) userInfo.manager = user.manager;
		if (user.company) userInfo.company = user.company;

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
