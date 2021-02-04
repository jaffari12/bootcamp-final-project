const express = require("express");
const {
  getUsers,
  getUser,
  createUser
 } = require('../controllers/users');

const api = express.Router();

api
  .route('/')
  .get(getUsers) 
  .post(createUser) 
  
api
.route('/:id')
.get(getUser)

module.exports = api;