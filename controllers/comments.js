const Comment = require('../models/Comment');
const mongoose = require('mongoose');


//get all the comments data (working)

const getComments = async (req, res, next) => {
    try {
      const comments = await Comment.find({isDeleted: false});
      res.json({ success: true, msg: 'show all comments', data: comments})
    } catch(err) {
      next(err)
    }
  };

  //get specific comment by comment id (working)

  const getComment = async (req, res, next) =>{
    try{
      const { id } = req.params;
      const comment = await Comment.findById({_id: id, isDeleted: false});
      res.json({ success: true, msg: `comment with comment id ${id} retrieved`, data: comment})
    } catch(err) {
      next(err)
    }
  };
// get all comments of a specific user (getting null)

  const getUserComments = async (req, res, next) => {
    try {
      const { id } = req.params;  
      const comments = await Comment.find({ _userId: id, _postId: id, isDeleted: false })
      res.json({ success: true, msg: `Comments of user with user id ${id} retrieved`, data: comments})
    } catch(err) {
      next(err)
    }
  };

  //Submit a new comment (working)
  const submitNewComment = async (req, res, next) => {
    try {
    const { text, postLink, _userId, _postId } = req.body;
    
    const comment = await Comment.insertMany({ text, postLink, _userId, _postId},  {new: true});
    res.json({ success: true, msg: `submitted new comment ${text} `, data: comment })
} catch(err) {
    next(err)
  }
};

//Edit a comment (working)
const editComment = async (req, res, next) => {
  try {
    const patchComment = req.body;
    const _id = req.params.id
    const comment = await Comment.updateOne({_id: _id}, patchComment, { new: true });
    res.json({ success: true, msg: `comment edited ${comment.text}`, data: comment })
  } catch(err) {
    next(err)
  }
};

//Delete a comment (working)
const deleteComment= async (req, res, next) =>{
try{
  const id= req.params.id;
  const comment = await Comment.findByIdAndDelete(id);
  res.json({ success: true, msg: `comment with id ${id} deleted`, data: comment })
  } catch(err) {
    next(err) 
  }
};

  module.exports = {
    getComments,
    getComment,
    getUserComments,
    submitNewComment,
    editComment,
    deleteComment
  };  
  

