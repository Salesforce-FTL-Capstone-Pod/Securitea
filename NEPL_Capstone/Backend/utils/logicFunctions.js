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

function generateManagerToken(organizationInitials, managerId) {
	const managerToken = `${organizationInitials.toUpperCase()}-${generateRandomString(8)}-${managerId}`;

	//Token should look like this: SF-a7dj03m9-1

	return managerToken;
}

module.exports = {
	generateRandomString,
	generateManagerToken,
};
