const express = require("express");
const {
  getUsers,
  getUser,
  createUser,
  getUserPosts,
  getUserComments
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

api
.route('/:id/comments')
.get(getUserComments)

module.exports = api;