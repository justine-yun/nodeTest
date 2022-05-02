const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

mongoose.connect("mongodb+srv://riskyjunk:w3h1kj7m@boilerplate.dgfhf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World! 안녕하세요!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});