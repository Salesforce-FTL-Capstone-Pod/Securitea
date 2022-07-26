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

module.exports = router;
