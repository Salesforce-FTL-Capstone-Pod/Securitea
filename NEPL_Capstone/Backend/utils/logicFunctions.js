function randomStringGenerator(length) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLen = chars.length;
  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charactersLen));
  }

  return result;
}

function createToken(company, first_name, last_name) {
  var result = `${company}-`;
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLen = chars.length;
  for (var i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * charactersLen));
  }

  result += `-${first_name[0]}_${last_name}`;

  return result;
}

module.exports = {
  randomStringGenerator,
  createToken,
};
