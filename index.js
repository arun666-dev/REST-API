// const express = require("express");
// we can use es6 imports instead of commonjs imports by adding type pro. in package.json file and set it to module
import express from "express";

// bodyparser: it allow us to take incoming post req. bodies that client is sending
import bodyParser from "body-parser";

// import route
import usersRoutes from "./routes/users.js";

// initialize express app.
const app = express();
const PORT = 5000;

// initialize bodyParser middleware: it shows we are using json data in our app.
// json is a common data format to send and receive data through rest api
app.use(bodyParser.json());

// /users is the base route and all the routes in users file starts from /users
app.use("/users", usersRoutes);

// node and express is all about routes
app.get("/", (req, res) => {
  console.log("test");
  res.send("hello from homepage");
});

// allow app to listen incoming req.
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
