const logic = require("./logicFunctions");

test("testing logic for generateRandomString", () => {
  const first = logic.generateRandomString(10);
  const second = logic.generateRandomString(10);

  expect(first.length).toBe(10);
  expect(second.length).toBe(10);
  expect(first).not.toBe(second);
});

test("testing token logic", () => {
  const tokenRegex = /^\w+-........-\w_\w+$/;
  const first = logic.createToken("Salesforce", "enrique", "rico");
  const second = logic.createToken();
  const third = logic.createToken("", 11, "22");

  expect(...first.match(tokenRegex)).toBeTruthy();
  expect(...second.match(tokenRegex)).toBeTruthy();
  expect(...third.match(tokenRegex)).toBeTruthy();
});
