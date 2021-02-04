const express = require("express");
const {
  getComments,
  getUserComments,
  submitNewComment,
  editComment,
  deleteComment
 
 } = require('../controllers/comments');

const api = express.Router();

api
  .route('/')
  .get(getComments) 
  .get(getUserComments)  
  .post(submitNewComment)  
  .put(editComment)
  .delete(deleteComment)

  

module.exports = api;