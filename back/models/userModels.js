const dbpool = require("../helpers/dbpool")
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { query } = require("express");
const { createPool } = require("mysql2");

exports.saveUser = async (user) => {
    const findIdByEmail = await dbpool.query("SELECT id FROM users WHERE email = ?", [user.email]);
    if(findIdByEmail.length==0){
        console.log("saving new user : " + user.email);
        dbpool.query("INSERT INTO users (name, email, password) VALUES ('name', ?, ?)", [user.email, user.password]);
    }
    else{
        console.log("can't save new user, this email already exist ");
    }
};

exports.findemail = async (email) => {
    const findIdByEmail = await dbpool.query("SELECT id FROM users WHERE email = ?", [email]);
    return findIdByEmail
};

exports.testpassword = async (email, password) => {
    const findPWByEmail = await dbpool.query("SELECT password FROM users WHERE email = ?", [email]);

    const testpassword = await bcrypt.compare(password, findPWByEmail[0].password);

    if(testpassword) {
        return true
    }

    return false
};
