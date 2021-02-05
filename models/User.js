const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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


// hash password
 UserSchema.pre('save', async function(next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

 UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET)
}

//  match user entered password ot hashed password in db
UserSchema.methods.matchPassword = async function(enteredPass) {
  return await bcrypt.compare(enteredPass, this.password)
}

//collection called users
module.exports = mongoose.model('User', UserSchema);