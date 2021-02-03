// create user authentication
//we are doing an authentication of user registration 
//which will check email, and password conditions are met

const express = require("express");
const register = require("../controllers/users").createUser;
const {login} = require('../controllers/users');

const api = express.Router();

//create the registartion route
api.post("/register", register);

//create the Login route
api.post("/login", login);


module.exports = api;