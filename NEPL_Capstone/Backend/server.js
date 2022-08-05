const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config");
const { NotFoundError } = require("./utils/errors");
const authRoutes = require("./routes/auth");
const progressAuth = require("./routes/progress");
const managerRoutes = require("./routes/manage");
const security = require("./middleware/security");

const app = express();

app.listen(PORT, () => {
	console.log(`🚀 Server listening on port ` + PORT);
});

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(security.extractUserFromJwt);
app.use("/auth", authRoutes);
app.use("/progress", progressAuth);
app.use("/manage", managerRoutes);

app.get("/", (req, res) => {
	res.status(200).send({ server_is: "up" });
});

app.use((req, res, next) => {
	return next(new NotFoundError("Not Found!!"));
});

app.use((error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message;

	return res.status(status).json({
		error: { message, status },
	});
});
