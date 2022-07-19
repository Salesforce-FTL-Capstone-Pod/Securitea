const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");
const db = require("../db");

class User {
  static async register(credentials) {
    const requiredFields = [
      "email",
      "password",
      "username",
      "first_name",
      "last_name",
    ];

    requiredFields.forEach((property) => {
      if (!credentials.hasOwnProperty(property)) {
        throw new BadRequestError(`Missing ${property} in request body`);
      }
    });

    if (credentials.email.indexOf("@") <= 0) {
      throw new BadRequestError("Invalid email");
    }

    const existingUser = await User.fetchUserByEmail(credentials.email);
    if (existingUser) {
      throw new BadRequestError("A user already exists with this email :/");
    }

    const hashedPassword = await bcrypt.hash(
      credentials.password,
      BCRYPT_WORK_FACTOR
    );

    const normalizedEmail = credentials.email.toLowerCase();

    const userResult = await db.query(
      `INSERT INTO users (email, password, first_name, last_name)
        VALUES ($1,$2,$3,$4)
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
    //LUCAS CODE HERE
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
    const requiredFields = ["email", "password", "first_name", "last_name"];
  }
}

module.exports = User;
