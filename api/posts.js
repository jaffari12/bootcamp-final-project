const express = require("express");
const {
  getPosts,
  submitNewPost,
  editPost
 } = require('../controllers/posts');

const api = express.Router();

api
  .route('/')
  .get(getPosts) 
  .post(submitNewPost)
  .put(editPost)
  

module.exports = api;