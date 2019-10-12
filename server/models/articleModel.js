const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let util = require('../util');

const commentSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    send_time: {
        required: true,
        type: Date,
        default: util.getLocalDateTime()
    },
    is_deleted: {
        required: true,
        type: Number,
        default: 0
    },
    content: {
        required: true,
        type: String
    },
    reply: {
        type: String,
        default: ''
    }
});

const articleSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    create_time: {
        type: Date,
        required: true,
        default: util.getLocalDateTime()
    },
    file_path: {
        type: String,
        default: ''
    },
    summary: {
        type: String
    },
    is_deleted: {
        required: true,
        type: Number,
        default: 0
    },
    tag: {
        type: [String]
    },
    category: {
        type: String,
        default: ''
    },
    comments: [commentSchema]
});

module.exports = mongoose.model('article', articleSchema);

