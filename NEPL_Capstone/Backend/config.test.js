const config = require("./config");
const { generateRandomString } = require("./utils/logicFunctions");

test("Test random string generator", () => {
  const stringOne = config.generateRandomString();
  const stringTwo = config.generateRandomString();

  expect(stringOne).not.toEqual(stringTwo);
});
