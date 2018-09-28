const express = require("express");
const server = express();
const PORT = 3000;
const db = require("./db.js");

server.get("/", (req, res) => res.status(200).send("hello"));

db.sync({ force: false }).then(() =>
  server.listen(PORT, () => console.log("Listening on PORT ", PORT))
);
