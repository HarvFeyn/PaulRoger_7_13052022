const query = require("../helpers/dbpool").query
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

exports.saveUser = (user) => {

    console.log("saving new user : " + user.email);
    return query("INSERT INTO users (name, email, password, isAdmin) VALUES (?, ?, ?, false)", [user.name, user.email, user.password])
        .then(result => {
            console.log('created user')
            return {message: "ok"}
        })
};

exports.findemail = (email) => {
    return query("SELECT * FROM users WHERE email = ?", [email])
        .then(result => {
            return result[0]
        })
};


exports.testpassword = (email, password) => {
    return query("SELECT password FROM users WHERE email = ?", [email])
        .then(result =>{
            return bcrypt.compare(password, result[0].password)
                .then(res => {
                    return res
                })
        })
};
