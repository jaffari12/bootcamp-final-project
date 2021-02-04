const express = require("express");
const {
  getPosts,
  getPost,
  getUserPosts,
  submitNewPost,
  editPost,
  deletePost
 } = require('../controllers/posts');

const api = express.Router();

api
  .route('/')
  .get(getPosts) 
  .post(submitNewPost)
  

api
.route('/:id')
.get(getUserPosts)
.get(getPost)
.patch(editPost)
.delete(deletePost)

module.exports = api;