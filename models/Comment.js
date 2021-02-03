const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const CommentSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdDt: {
        type: Date,
        default: Date.now
    },
    postLink: {
        type: String,
        required: true
    },

 //Reference post collection
 parent:{ type: Schema.ObjectId, 
    ref: 'Post',
    required: [true, 'Please add a parent']
 },

 //Reference users collection
 author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Please add a userId']
  },
 
});


module.exports = mongoose.model('Comment', CommentSchema);