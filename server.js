require('dotenv').config()
require('colors');
const express = require("express");

const users = require('./api/users');
const posts = require('./api/posts');
const comments = require('./api/comments');
const errorHandler = require('./middleware/error');
const cors = require('cors');
const server = express();
const PORT = 5000;

//connect or initalize Mongo  database
const connectDB = require('./dbinit');

connectDB();

server.use(cors());
server.use(express.json());

server.get('/', function(req, res){
    res.send("Final Project");
});

server.use('/users', users);
server.use('/posts', posts);
server.use('/comments', comments);
 server.use(errorHandler);

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`.yellow.bold.inverse));
