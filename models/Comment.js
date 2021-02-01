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
});


module.exports = mongoose.model('Comment', CommentSchema);