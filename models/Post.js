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
    ifDeleted: {
        type: Boolean,
        default: false
    }, 
    createdDt: {
        type: Date,
        default: Date.now
    },

});


module.exports = mongoose.model('Post', PostSchema);