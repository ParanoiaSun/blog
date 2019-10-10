const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let util = require('../util');

const articleSchema = new Schema({
    _id: {

    },
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
        required: true,
        type: String
    },
    summary: {
        required: true,
        type: String
    },
    is_deleted: {
        type: Number,
        default: 0
    },
    tag: {
        type: [String]
    },
    category: {
        required: true,
        type: String
    },
    comments: []
});

// module.exports = mongoose.model('article', articleSchema);

