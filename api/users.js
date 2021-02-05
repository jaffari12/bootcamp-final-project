const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  getUserPosts
 } = require('../controllers/users');

const api = express.Router();

api
  .route('/')
  .get(getUsers) 
  .post(createUser) 
  
api
.route('/:id')
.get(getUser)

api
.route('/:id/posts')
.get(getUserPosts)

module.exports = api;