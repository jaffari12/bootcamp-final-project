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

  // get all comments of a specific user
  const getUserComments = async (req, res, next) => {
    try {
      const { id } = req.params;
       
      const comments = await Comment.find({ _author: ObjectId(id), isDeleted: false })
      res.json({ success: true, msg: `comments of user with user id ${id} retrieved`, data: comments})
    } catch(err) {
      next(err)
    }
  };

  //submit a new comment
  const submitNewComment = async (req, res, next) => {
    try{
      const {text, postLink }= req.body
      const {parent} = req.params
      const comments = await Comment.findOne({ parent: ObjectId(text, postLink)})
      res.json({ success: true, msg: `posts of user with user id ${id} retrieved`, data: comments})
    } catch(err) {
      next(err)
    }
  };

  //Edit a comment
  const editComment = async (req, res, next) => {
    try {
      const { text, postLink } = req.body;
      const comment = await Post.findByIdAndUpdate({ text, postLink }, { new: true });
      res.json({ success: true, msg: `Comment edited ${text, postLink}`, data: comment })
    } catch(err) {
      next(err)
    }
  };

  //delete a comment
  const deleteComment = async (req, res, next) => {
    try {
      const { text, postLink } = req.body;
      const comment = await Post.findByIdAndUpdate({ text, postLink }, { new: true });
      res.json({ success: true, msg: `Comment edited ${text, postLink}`, data: comment })
    } catch(err) {
      next(err)
    }
  };



  module.exports = {
    getComments,
    getUserComments,
    submitNewComment,
    editComment,
    deleteComment
  };  
  

