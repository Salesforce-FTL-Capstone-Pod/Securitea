const express = require("express");
const User = require("../models/user");
const router = express.Router();
const security = require("../middleware/security");
const Manager = require("../models/manager");

router.get(
	"/getPeople",
	security.requireAuthenticatedUser,
	async (req, res, next) => {
		try {
			const info = await Manager.getPodMembers(res.locals.user.email);

			return res.status(200).json({ info });
		} catch (err) {
			next(err);
		}
	}
);

router.get(
	"/getAccessToken",
	security.requireAuthenticatedUser,
	async (req, res, next) => {
		try {
			const managerToken = await Manager.getAccessToken(res.locals.user.email);

			return res.status(200).json({ managerToken });
		} catch (err) {
			next(err);
		}
	}
);

module.exports = router;
