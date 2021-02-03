const Post = require('../models/Post');
const mongoose = require('mongoose');

//get all the posts data

const getPosts = async (req, res, next) => {
    try {
      const posts = await Post.find();
      res.json({ success: true, msg: 'show all posts', data: posts })
    } catch(err) {
      next(err)
    }
  };

//Submit a new post 

  const submitNewPost = async (req, res, next) => {
    try {
    const { username, email, password } = req.body;
    const post = await Post.create({ username, email, password});
} catch(err) {
    next(err)
  }
};


//Edit a post
const editPost = async (req, res, next) => {
  try {
    const { text } = req.body;
    const post = await User.findByIdAndUpdate({ text }, { new: true });
    res.json({ success: true, msg: `Post edited ${text} `, data: post })
  } catch(err) {
    next(err)
  }
};

//Delete a post


module.exports = {
    getPosts,
    submitNewPost,
    editPost
   
}