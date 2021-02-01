const Comment = require('../models/Comment');
const mongoose = require('mongoose');

//get all the comments data

const getComments = async (req, res, next) => {
    try {
      const comments = await Comment.find();
      res.json({ success: true, msg: 'show all comments', data: comments})
    } catch(err) {
      next(err)
    }
  };

  module.exports = {
    getComments,
    
   
}
