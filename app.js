const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Home");
});

app.get("/hello-world", (req, res) => {
	res.send("Hello World!");
});


app.use((req, res) => {
	res.status(404).sendFile(__dirname + "/public/404.html");
});

module.exports = app;