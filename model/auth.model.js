const mongoose = require('mongoose');
const {connectDB, saveUser, User} = require('./db');
const bcrypt = require('bcrypt');

// Create New User and Save him in DataBase

async function createNewUser(userName, password){

    try {
        await connectDB();
        let user = await User.findOne({userName: userName});
        let hashPassword;
        if(user) {
            mongoose.disconnect();
            return false
        }
        else{
            hashPassword = await bcrypt.hash(password, 10);

            return saveUser(userName, hashPassword);
        }  
    } catch(err){
        console.log(err);
        mongoose.disconnect();
    }
}

// User Login 

async function logIn(userName, password){

    try {
        await connectDB();
        const user = await User.findOne({userName: userName});
        let samePassword;
        if(!user) mongoose.disconnect();
        else {
            samePassword = await bcrypt.compare(password, user.password);
            if(!samePassword) {mongoose.disconnect(); console.log("err")}
            else{
                mongoose.disconnect();
                return user;
            }
        }
    } catch(err) {
        console.log(err);
        mongoose.disconnect();
    }
}

module.exports = {
    createNewUser,
    logIn
}