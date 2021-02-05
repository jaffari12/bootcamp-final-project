const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const mongoose = require('mongoose');

//get all the users data ( this is working)

const getUsers = async (req, res, next) => {
    try {
      const users = await User.find();
      res.json({ success: true, msg: 'show all users', data: users })
    } catch(err) {
      next(err)
    }
  };

  // get a specific user by ID ( this is working)
  const getUser = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.json({ success: true, msg: 'show selected user', data: user })
    } catch(err) {
      next(err)
    }
  };


// get all posts of a specific user (working )
  const getUserPosts = async (req, res, next) => {
    try {
      const { id } = req.params;  
      const posts = await Post.find({ _userId: id, isDeleted: false }).populate('_userId');
      res.json({ success: true, msg: `posts of user with user id ${id} retrieved`, data: posts})
    } catch(err) {
      next(err)
    }
  };

  // get all comments of a specific user (working)

  const getUserComments = async (req, res, next) => {
    try {
      const { id } = req.params;  
      const comments = await Comment.find({ _userId: id, _postId: id, isDeleted: false });
      res.json({ success: true, msg: `Comments of user with user id ${id} retrieved`, data: comments})
    } catch(err) {
      next(err)
    }
  };

  
//Register new user ( this is working)

  const createUser = async (req, res, next) => {
    try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password});
    res.json({ success: true, msg: 'new user create', data: user })
} catch(err) {
    next(err)
  }
};


// create login controller
// when user login will request for email and password from body
// if no email or pswd provided will send status 400 with the message.

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).send('Please provide an email and password')
    }
// we ask mongoose to search by email that has been provided by the user to login
// usually we dont select the password as we set it to false but we have bring it again to check on pswd if it matches 
    const user = await User.findOne({ email }).select('+password');

    // if no user find it will send the below response 
    if (!user) {
      res.status(401).send('Invalid credentials')
    }
// check if the password matches 
    const doesPassMatch = await user.matchPassword(password);
    if (!doesPassMatch) {
      res.status(401).send('Invalid credentials')
    }
//if password matches then we respond with jwt token
    const token = user.getSignedJwtToken();

    res.json({ success: true, token })

  } catch(err) {
    next(err)
  }
};



module.exports = {
    getUsers,
    getUser,
    createUser,
    getUserPosts,
    getUserComments,
    login
   
}