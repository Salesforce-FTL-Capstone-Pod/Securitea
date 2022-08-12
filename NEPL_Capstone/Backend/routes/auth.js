const express = require("express");
const User = require("../models/user");
const router = express.Router();
const { createUser } = require("../utils/tokens");
const security = require("../middleware/security");

const axios = require('axios')
const jwt_decode = require('jwt-decode')

router.post("/login", async (req, res, next) => {
	try {
		const user = await User.login(req.body);
		const token = createUser(user);
		res.locals.token = token;
		res.locals.user = user;

		return res.status(200).json({ user, token });
	} catch (err) {
		next(err);
	}
});

router.post("/register", async (req, res, next) => {
  try {
    var user = null;
    if (req.body.isManager) {
      user = await User.registerManager({
        ...req.body,
        isAdmin: false,
      });
    } else {
		console.log(req.body)
      user = await User.register({ ...req.body, isAdmin: false });
    }

    const token = createUser(user);
    res.locals.token = token;
    res.locals.user = user;

    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }

});

router.patch("/addToken", async (req, res, next) => {
	try {
		const { email } = res.locals.user;
		const company = User.addUserToken(email);
	} catch (err) {
		next(err);
	}
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
	try {
		const { email } = res.locals.user;
		const user = await User.fetchUserByEmail(email);

		const publicUser = await User.makePublicUser(user);
		return res.status(200).json({ publicUser: publicUser });
	} catch (err) {
		next(err);
	}
});

// ---- SLACK STUFF -----

function fetchslackExchange(url){
	return axios.post(url)
	.then(response => {
		return response.data
	}).catch(err => err);
}

router.post('/slackExchange', async (req, res, next) => {
	try{
		const slackRequest = true
		const exchangeUrl = req.body.url
		const exchangedObj = await fetchslackExchange(exchangeUrl)
		const slackToken = exchangedObj.id_token
		const slackUser = jwt_decode(slackToken)
		const userObj = {
			email: slackUser.email,
			password: slackUser.at_hash,
			first_name: slackUser.given_name,
			last_name: slackUser.family_name,
			birthday: "2022-08-04T07:00:00.000Z",
			title: "Mx.",
			isManager: false,
		}
		
		const verifyUser = await User.register({ ...userObj}, slackRequest)
		console.log(verifyUser)
		if (verifyUser == "isUser"){
			const user = await User.login({
				email: userObj.email,
				password: userObj.password
			});
			const token = createUser(user)
			res.locals.token = token;
			res.locals.user = user;
			return res.status(201).json({ user, token });
		} else {
			const slackRequest = true
			const user = await User.register({ ...userObj}, slackRequest)
			console.log(user)
			const token = createUser(user);
			res.locals.token = token;
			res.locals.user = user;
			return res.status(201).json({ user, token });
		}
	} catch (err){
		next(err);
	}

})

module.exports = router;
