const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: [true, 'The name field is required'], // true means not null
        minlength:[5, 'Username must be 5 characters or more.'],
        maxlength:[50, 'The name field should contain a max of 50 chars']
    },
    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please add a valid email',
        ],
    },
      password:{
        type: String,
        required: [true, 'Please add a password'],
        minlength: 8,
        select: false // this is very important flag and password not gonna show
    },

});

//collection called users
module.exports = mongoose.model('User', UserSchema);