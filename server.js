require('dotenv');
require('colors');
const express = require("express");
const cors = require('cors');
const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());

server.get('/', function(req, res){
    res.send("Final Project");
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`.yellow.bold.inverse));
