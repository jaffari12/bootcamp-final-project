const express = require("express");
const {
  getComments,
 
 } = require('../controllers/comments');

const api = express.Router();

api
  .route('/')
  .get(getComments) 

  

module.exports = api;