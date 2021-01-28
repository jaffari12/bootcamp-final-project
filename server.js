require('dotenv');
require('colors');
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/', function(req, res){
    res.send("Final Project");
});

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`.yellow.bold.inverse));
