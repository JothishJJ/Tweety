import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 5600;

app.get("/", (req, res) => {
	res.send("Express is running");
});

app.listen(port, () => {
	console.log("Server is running on port: " + port);
});

