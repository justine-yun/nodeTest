const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const { User } = require("./models/User");
const config = require("./config/key")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.mongoURI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/register", (req, res) => {
    const user = new User;
    user.save((err, userInfo) => {
        if(err){
            return res.json({success: false, err});
        }
        return res.status(200).json({success: true});
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});