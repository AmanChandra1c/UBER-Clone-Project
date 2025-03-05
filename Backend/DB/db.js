const mongoose = require("mongoose");

// Connect to the database
function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Database connection error:", err));
}

module.exports = connectToDb;
