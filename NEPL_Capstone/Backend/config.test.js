const config = require("./config");

test("Test random string generator", () => {
	const stringOne = config.randString();
	const stringTwo = config.randString();

	expect(stringOne).not.toEqual(stringTwo);
});
