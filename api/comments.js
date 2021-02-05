const express = require("express");
const {
  getComments,
  getComment,
  getUserComments,
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

api
.route('/:id/:id')
.get(getUserComments) 
module.exports = api;