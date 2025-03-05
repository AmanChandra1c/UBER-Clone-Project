const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./DB/db");
const userRoutes = require("./routes/user.routes");
const cookieparser = require("cookie-parser");

// Connect to MongoDB database
database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser()); 

// Home route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// User routes
app.use("/users", userRoutes);
module.exports = app;
