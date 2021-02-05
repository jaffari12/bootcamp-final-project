const express = require("express");
const {
  getPosts,
  getPost,
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
.get(getPost)

.patch(editPost)
.delete(deletePost)

module.exports = api;