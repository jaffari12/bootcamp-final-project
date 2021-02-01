const User = require('../models/User');
const mongoose = require('mongoose');

//get all the users data

const getUsers = async (req, res, next) => {
    try {
      const users = await User.find();
      res.json({ success: true, msg: 'show all users', data: users })
    } catch(err) {
      next(err)
    }
  };

//Register newuser

  const createUser = async (req, res, next) => {
    try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password});
} catch(err) {
    next(err)
  }
};


module.exports = {
    getUsers,
    createUser,
   
}