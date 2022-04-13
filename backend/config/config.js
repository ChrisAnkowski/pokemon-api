const path = require("path");

module.exports = {
  development: {
    username: "root",
    password: "root",
    host: path.join(__dirname, "..", "database.sqlite"),
    dialect: "sqlite",
  },
};
