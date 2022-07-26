const tokens = require("./tokens");

var userToken = "";
const user = {
	email: "user@user.com",
	password: "password",
	first_name: "user",
	last_name: "user",
	birthday: "01/01/2000",
	title: "mr.",
};

const userPayload = {
	email: user.email,
	isAdmin: user.isAdmin || false,
};

test("Test token generation", () => {
	userToken = tokens.generateToken(userPayload);

	expect(userToken).not.toBe(userPayload);
	expect(userToken).not.toBe("");
});

test("Test createUser", () => {
	const altToken = tokens.createUser(user);
	expect(altToken).toBe(userToken);
});

test("Test validateToken with bogus token", () => {
	const bogusToken = "fakeToken";
	expect(() => {
		tokens.validateToken(bogusToken);
	}).toThrow();
});

test("Test validateToken with correct token", () => {
	const goodToken = tokens.createUser(user);

	expect(tokens.validateToken(goodToken)).toHaveProperty(
		"email",
		userPayload.email
	);

	expect(tokens.validateToken(goodToken)).toHaveProperty(
		"isAdmin",
		userPayload.isAdmin
	);
});
