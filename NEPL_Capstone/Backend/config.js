require("dotenv").config();
require("colors");

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const SECRET_KEY = process.env.SECRET_KEY || randString();

function getDatabaseUri() {
	const dbUser = process.env.DATABASE_USER || "postgres";
	const dbPass = process.env.DATABASE_PASS
		? encodeURI(process.env.DATABASE_PASS)
		: "postgres";
	const dbHost = process.env.DATABASE_HOST || "localhost";
	const dbPort = process.env.DATABASE_PORT || 5432;
	const dbName = process.env.DATABASE_NAME || "nepl_database";

	return (
		process.env.DATABASE_URL ||
		`postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
	);
}

const BCRYPT_WORK_FACTOR = 10;

//Creates a random string in case SECRET_KEY does not exist
function randString() {
	var char =
		"abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
	var result = "";
	var charactersLength = char.length;

	for (var i = 0; i < 10; i++) {
		result += char.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
//es

console.log("NEPL config:".yellow);
console.log("Port:".blue, PORT);
console.log("Database URI:".blue, getDatabaseUri());
console.log("Key: ".blue, SECRET_KEY);
console.log("---------------------");

module.exports = {
	PORT,
	SECRET_KEY,
	BCRYPT_WORK_FACTOR,
	getDatabaseUri,
};
