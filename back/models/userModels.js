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

exports.findemail = async (email) => {
    const findUserByEmail = await query("SELECT * FROM users WHERE email = ?", [email]);
    return findUserByEmail[0]
};


exports.testpassword = async (email, password) => {
    const findPWByEmail = await query("SELECT password FROM users WHERE email = ?", [email]);

    const testpassword = await bcrypt.compare(password, findPWByEmail[0].password);

    if(testpassword) {
        return true
    }

    return false
};
