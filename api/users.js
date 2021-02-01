const express = require("express");
const {
  getUsers,
  createUser,
 } = require('../controllers/users');

const api = express.Router();

api
  .route('/')
  .get(getUsers) 
  .post(createUser) 
  

module.exports = api;