const logic = require("./logicFunctions");

test("testing logic for generateRandomString", () => {
	const first = logic.generateRandomString(10);
	const second = logic.generateRandomString(10);

	expect(first.length).toBe(10);
	expect(second.length).toBe(10);
	expect(first).not.toBe(second);
});

test("testing logic for generating manager token", () => {
	const tokenRegex = /^\w\w-........-\d+$/;
	const managerToken1 = logic.generateManagerToken("SF", 1);
	const managerToken2 = logic.generateManagerToken("CP", 2);
	const managerToken3 = logic.generateManagerToken("WD", 3);

	expect(...managerToken1.match(tokenRegex)).toBeTruthy();
	expect(...managerToken2.match(tokenRegex)).toBeTruthy();
	expect(...managerToken3.match(tokenRegex)).toBeTruthy();
});
