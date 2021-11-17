const express = require('express');
const app = express();
const cors = require('cors');

app.use(
    cors({
        origin: "*",
    })
)

app.use(express.json());

const authRouter = require('./routes/auth.route')

app.use(authRouter);

app.listen(process.env.PORT || 3000, err => {
    if(err) console.log(err);
    else console.log("All All Right");
})