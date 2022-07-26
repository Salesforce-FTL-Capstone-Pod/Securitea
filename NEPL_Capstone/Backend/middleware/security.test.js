const security = require("./security");

test("Tests extracting token from header", () => {
	const testCase = {
		headers: { authorization: "Bearer 12345" },
		body: "nothing",
	};

	expect(security.jwtFrom(testCase)).toBe("12345");
});

test("Tests malformed token extraction", () => {
	const testCase = {
		headers: { authorization: "Bear 12345" },
		body: "nothing",
	};

	expect(security.jwtFrom(testCase)).toBe(undefined);
});
