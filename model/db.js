const mongoose = require('mongoose');

const DB_URL = "mongodb+srv://HobaPro:Hebheb_123@cluster0.mzrbn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        //min: 6,
        //max: 12
    },
    password: {
        type: String,
        required: true,
        //min: 6,
        //max: 12
    },
})

const User = mongoose.model('user', userSchema);

async function connectDB(){

    try{
        await mongoose.connect(DB_URL);
    } catch(err){
        if(err) console.log(err);
    }
}

async function saveUser(userName, password){

    const user = new User({
        userName: userName,
        password: password
    })

    try{
        await user.save();
        mongoose.disconnect();
        return true;
    } catch(err){
        console.log(err);
        mongoose.disconnect();
    }
}

module.exports = {
    connectDB,
    saveUser,
    User
}