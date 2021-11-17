const e = require('express');
const {createNewUser, logIn} = require('../model/auth.model');

let isRegister;
let user;

async function postSignUp(req, res, next){
    isRegister =  await createNewUser(req.body.userName, req.body.password);
    next();
}

function userRegistered(req, res){
    res.json({isRegister,})
}

async function postLogIn(req, res, next){
    user = await logIn(req.body.userName, req.body.password);
    next();
}

function sendUser(req, res){
    if(!user){
        res.json({
            isLogged: false,
        })
    }else{
        res.json({
            isLogged: true,
            userName: user.userName
        })
    }
}

module.exports = {
    postSignUp,
    postLogIn,
    userRegistered,
    sendUser
}