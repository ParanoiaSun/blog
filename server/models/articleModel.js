const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    _id: {

    },
    title: {
        require: true,
        type: String
    },
    create_time: {
        type: Date,
        default: Date.now()
    },
    file_path: {
        require: true,
        type: String
    },
    summary: {
        require: true,
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
        require: true,
        type: String
    },
    comments: []
});

// module.exports = mongoose.model('article', articleSchema);

