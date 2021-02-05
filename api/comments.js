const express = require("express");
const {
  getComments,
  getComment,
  
  submitNewComment,
  editComment,
  deleteComment
 
 } = require('../controllers/comments');

const api = express.Router();

api
  .route('/')
  .get(getComments) 
  .post(submitNewComment)  
 

api
 .route('/:id')
 .get(getComment)
 .patch(editComment)
 .delete(deleteComment)

 
module.exports = api;