function generateRandomString(length) {
	var char =
		"abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
	var result = "";
	var charactersLength = char.length;

	for (var i = 0; i < length; i++) {
		result += char.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

function generateManagerToken(organizationInitials) {
	const managerToken = `${organizationInitials.toUpperCase()}-${generateRandomString(
		8
	)}`;

	//Token should look like this: SF-a7dj03m9

	return managerToken;
}

module.exports = {
	generateRandomString,
	generateManagerToken,
};
