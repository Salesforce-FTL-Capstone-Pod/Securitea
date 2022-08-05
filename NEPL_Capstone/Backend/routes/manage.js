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
			const info = await Manager.getPodMembers();
			console.log(info);

			return res.status(200).json({ info });
		} catch (err) {
			next(err);
		}
	}
);

module.exports = router;
