const express = require('express');
const app = express();
const cors = require('cors');

app.use(
    cors({
        origin: "*",
    })
)

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    //res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Content-Type,application');
    next();
})

const authRouter = require('./routes/auth.route')

app.use(authRouter);

app.listen(process.env.PORT || 3000, err => {
    if(err) console.log(err);
    else console.log("All All Right");
})