const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 25
    },
    link: {
        type: String
    },
    text: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    }, 
    createdDt: {
        type: Date,
        default: Date.now
    },

    //Reference users collection
    _userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Please add a userId']
      },
 
   // Reference comment collection
   _postId:{
    type: mongoose.Schema.ObjectId,
    ref: 'Comment'
    
   }
});


module.exports = mongoose.model('Post', PostSchema);