const db = require("../db");
const { BadRequestError, UnauthorizedError } = require("../utils/errors");
const User = require("./user");
const Logic = require("../utils/logicFunctions.js");

class Manager {
	static async getPodMembers(email) {
		const userId = await User.fetchUserByEmail(email);

		const pod = await this.getPod(userId);
		console.log("here");

		var membersAndProgress = {};
		const getFirstProgress = `
        SELECT progress
        FROM modules_1
        WHERE user_id = $1;
        `;
		const getSecondProgress = `
        SELECT progress
        FROM modules_2
        WHERE user_id = $1;
        `;

		const getModuleName = `
        SELECT name, steps
        FROM modules
        WHERE id=$1;
        `;

		const areTheyPingedQuery = `
        SELECT wasPinged
        FROM users
        WHERE id = $1;
        `;

		for (var i = 0; i < pod.length; i++) {
			let id = pod[i];
			let user = await User.fetchUserById(id);
			let fullName = user.first_name + " " + user.last_name;

			let rawProgressOne = await db.query(getFirstProgress, [id]);
			let progressOne = rawProgressOne.rows[0];
			console.log("p one: ", progressOne);

			let rawProgressTwo = await db.query(getSecondProgress, [id]);
			let progressTwo = rawProgressTwo.rows[0];

			let rawNameStepsOne = await db.query(getModuleName, [1]);
			let rawNameStepsTwo = await db.query(getModuleName, [2]);

			let nameStepsOne = rawNameStepsOne.rows[0];
			let nameStepsTwo = rawNameStepsTwo.rows[0];

			let rawIsPinged = await db.query(areTheyPingedQuery, [id]);
			let isPinged = rawIsPinged.rows[0];

			membersAndProgress = {
				...membersAndProgress,
				[i]: {
					wasPinged: isPinged,
					email: user.email,
					name: fullName,
					1: {
						...progressOne,
						module_name: nameStepsOne.name,
						steps: nameStepsOne.steps,
					},
					2: {
						...progressTwo,
						module_name: nameStepsTwo.name,
						steps: nameStepsTwo.steps,
					},
				},
			};
		}

		return { podProgress: membersAndProgress, totalMembers: pod.length };
	}

	static async getPod(userId) {
		const getPodQuery = `
        SELECT usersinpod
        FROM manager
        WHERE user_id = $1;
        `;
		const podRaw = await db.query(getPodQuery, [userId.id]);
		const pod = podRaw.rows[0].usersinpod;
		return pod;
	}

	static async getAccessToken(email) {
		const manager = await User.fetchUserByEmail(email);

		const fetchTokenQuery = `
        SELECT token 
        FROM manager
        WHERE user_id = $1;
        `;

		const responseRaw = await db.query(fetchTokenQuery, [manager.id]);
		const response = responseRaw.rows[0];

		return response.token;
	}

	static async pingUser(userEmail, module) {
		const userToPing = await User.fetchUserByEmail(userEmail);
		const modulePing = "waspinged" + module;
		const pingUserQuery = `
        UPDATE users
        SET ${modulePing} = true
        WHERE id = $1
        RETURNING ${modulePing};
        `;

		const responseRaw = await db.query(pingUserQuery, [userToPing.id]);
		const response = responseRaw.rows[0];

		return response;
	}

	static async unpingUser(userEmail, module) {
		const userToUnping = await User.fetchUserByEmail(userEmail);
		const moduleName = "waspinged" + module;
		const unpingUserQuery = `
        UPDATE users
        SET ${moduleName} = false
        WHERE id = $1;
        `;

		const responseRaw = await db.query(unpingUserQuery, [userToUnping.id]);
		const response = responseRaw.rows[0];

		return response;
	}

	static async wasIPinged(email, module) {
		const user = await User.fetchUserByEmail(email);
		const wasping = "waspinged" + module;

		const wasIPingedQuery = `
        SELECT ${wasping}
        FROM users
        WHERE id = $1;
        `;

		const responseRaw = await db.query(wasIPingedQuery, [user.id]);
		const response = responseRaw.rows[0];

		return response;
	}

	static async pingAll(email, module) {
		const userId = await User.fetchUserByEmail(email);
		const pod = await this.getPod(userId);
		for (let i = 0; i < pod.length; i++) {
			let id = pod[i];
			let user = await User.fetchUserById(id);

			this.pingUser(user.email, module);
		}

		return true;
	}
}

module.exports = Manager;
