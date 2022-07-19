const express = require("express");
const User = require("../models/user");
const router = express.Router();
//const { createUser } = require("../utils/tokens"); TODO: implement tokens
//const security = require("../middleware/security"); TODO: implement security

router.post("/login", async (req, res, next) => {
	try {
		const user = await User.login(req.body);
		//const token = createUser(user); TODO: implement tokens
		//res.locals.token = token; TODO: implement tokens
		res.locals.user = user;

		return res.status(200).json({ user }); //TODO: return token as well
	} catch (err) {
		next(err);
	}
});

router.post("/register", async (req, res, next) => {
	try {
		const user = await User.register({ ...req.body, isAdmin: false });
		//const token = createUser(user); TODO: implement tokens
		//res.locals.token = token; TODO: implement tokens
		res.locals.user = user;
		return res.status(201).json({ user }); //TODO: return token as well
	} catch (err) {
		next(err);
	}
});

//TODO: add security middleware here
router.get("/me", async (req, res, next) => {
	try {
		const { email } = res.locals.user;
		const user = await User.fetchUserByEmail(email);

		const publicUser = await User.makePublicUser(user);
		return res.status(200).json({ publicUser: publicUser });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
