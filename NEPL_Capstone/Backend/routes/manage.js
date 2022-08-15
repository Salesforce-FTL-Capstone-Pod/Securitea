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

router.patch(
	"/pingUser",
	security.requireAuthenticatedUser,
	async (req, res, next) => {
		try {
			const userPinged = await Manager.pingUser(
				req.body.email,
				req.body.module
			);

			return res.status(200).json({ userPinged });
		} catch (err) {
			next(err);
		}
	}
);

router.patch(
	"/pingAll",
	security.requireAuthenticatedUser,
	async (req, res, next) => {
		try {
			const allPinged = await Manager.pingAll(
				res.locals.user.email,
				req.body.module
			);

			return res.status(200).json({ allPinged });
		} catch (err) {
			next(err);
		}
	}
);

router.patch(
	"/unpingUser",
	security.requireAuthenticatedUser,
	async (req, res, next) => {
		try {
			const email = res.locals.user.email;
			const userUnpinged = await Manager.unpingUser(email, req.body.module);

			return res.status(200).json({ userUnpinged });
		} catch (err) {
			next(err);
		}
	}
);

router.get(
	// This is for the user to see if he is pinged
	"/amIPinged",
	security.requireAuthenticatedUser,
	async (req, res, next) => {
		try {
			const amPinged = await Manager.wasIPinged(
				res.locals.user.email,
				req.body.module
			);

			return res.status(200).json({ amPinged });
		} catch (err) {
			next(err);
		}
	}
);

module.exports = router;
