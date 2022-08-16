const express = require("express");
const User = require("../models/user");
const router = express.Router();
const security = require("../middleware/security");

router.get(
	"/getProgress",
	security.requireAuthenticatedUser,
	async (req, res, next) => {
		try {
			const userId = await User.fetchUserByEmail(res.locals.user.email);
			const progress = await User.getProgress(userId.id);
			return res.status(200).json({ progress: progress });
		} catch (err) {
			next(err);
		}
	}
);

router.patch(
	"/addProgress",
	security.requireAuthenticatedUser,
	async (req, res, next) => {
		try {
			const user = await User.fetchUserByEmail(res.locals.user.email);
			const module_id = req.body.module;

			const newProgress = await User.increaseProgress(module_id, user.id);
			return res.status(200).json({ update: newProgress });
		} catch (err) {
			next(err);
		}
	}
);

module.exports = router;
