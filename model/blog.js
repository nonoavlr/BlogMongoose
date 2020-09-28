const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name : { type : String, required : true, maxlength : '30' },
    body : { type : String, required : true, maxlength : '100' },
    created : { type : Date, default : Date.now, required : true },
    edited : { type : Date, default : Date.now, required : true }
});

const PostSchema = new Schema({
    title : { type : String, required : true, maxlength : '30' },
    author : { type : String, required : true, maxlength : '30' },
    body : { type : String, required : true },
    tags : [{type : String}],
    created : { type : Date, default : Date.now, required : true },
    edited : { type : Date, default : Date.now, required : true },
    comments : [CommentSchema]
});

const BlogSchema = new Schema({
    post : [PostSchema]
});

module.exports = mongoose.model('Blog', BlogSchema);