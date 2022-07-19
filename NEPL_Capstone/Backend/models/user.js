const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require("../db");
const { BadRequestError } = require("../utils/errors");

class User {
	static async register(credentials) {
		const requiredFields = ["email", "password", "first_name", "last_name"];

		requiredFields.forEach((property) => {
			if (!credentials.hasOwnProperty(property)) {
				throw new BadRequestError(`Missing ${property} in request body`);
			}
		});

		//TODO: Implement actual email checker
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

		const userResult = await db.query(
			`INSERT INTO users (email, password, first_name, last_name)
        VALUES ($1, $2, $3, $4)
        RETURNING id, email, first_name, last_name
        `,
			[
				normalizedEmail,
				hashedPassword,
				credentials.first_name,
				credentials.last_name,
			]
		);

		const user = userResult.rows[0];

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
		return {
			id: user.id,
			email: user.email,
			firstName: user.first_name,
			lastName: user.last_name,
		};
	}
}

module.exports = User;
