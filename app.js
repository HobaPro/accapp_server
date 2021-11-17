const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(
    cors({
        origin: "*",
    })
)

app.use(express.json());

const authRouter = require('./routes/auth.route')

app.use(authRouter);

app.listen(port, err => {
    if(err) console.log(err);
    else console.log("All All Right");
})