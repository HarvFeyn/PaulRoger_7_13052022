const dbpool = require("../helpers/dbpool")
const jwt = require('jsonwebtoken');

exports.getAllUsers = () => {
    return dbpool.query("SELECT * FROM users")
}

exports.saveUser = (user) => {
    console.log("saving new user");
    dbpool.query("INSERT INTO users (name, password, email) VALUES ('name', ?, ?)",[user.email, user.password])
}
