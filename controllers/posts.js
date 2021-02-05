const Post = require('../models/Post');
const mongoose = require('mongoose');

//get all the posts data (this works fine)
const getPosts = async (req, res, next) => {
    try {
      const posts = await Post.find().populate('_userId');
      res.json({ success: true, msg: 'show all posts', data: posts })
    } catch(err) {
      next(err)
    }
  };

  //get specific post by id (ok )
  const getPost = async (req, res, next) =>{
      try{
      const { id } = req.params;
      const post = await Post.findById(id).populate('_userId');
     
      res.json({ success: true, msg: `posts with post id ${id} retrieved`, data: post})
    } catch(err) {
      next(err)
    }
  };
   
  
//Submit a new post (working)
  const submitNewPost = async (req, res, next) => {
    try {
    const { title, link, text, _userId } = req.body;
    
    const post = await Post.insertMany({ title, link, text, _userId},  {new: true});
    res.json({ success: true, msg: `submitted new post  ${text} `, data: post })
} catch(err) {
    next(err)
  }
};

//Edit a post (working)
const editPost = async (req, res, next) => {
  try {
    const patchPost = req.body;
    const _id = req.params.id
    const post = await Post.updateOne({_id: _id}, patchPost, { new: true });
    res.json({ success: true, msg: `post edited ${post.text}`, data: post })
  } catch(err) {
    next(err)
  }
};

//Delete a post ( working)
const deletePost = async (req, res, next) =>{
try{
  const id= req.params.id;
  const post = await Post.findByIdAndDelete(id);
  res.json({ success: true, msg: `post with id ${id} deleted`, data: post })
  } catch(err) {
    next(err) 
  }
};

module.exports = {
    getPosts,
    getPost,
    submitNewPost,
    editPost,
    deletePost
};