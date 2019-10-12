const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let util = require('../util');

const photoSchema = new Schema({
    img: {
        type: String,
        default: ''
    },
    description: {
        required: true,
        type: String,
        default: ''
    },
    create_time: {
        required: true,
        type: Date,
        default: util.getLocalDateTime()
    },
    is_deleted: {
        required: true,
        type: Number,
        default: 0
    }
});

const albumSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    cover: {
        type: String,
        default: ''
    },
    create_time: {
        required: true,
        type: Date,
        default: util.getLocalDateTime()
    },
    is_deleted: {
        type: Number,
        default: 0
    },
    photos: [photoSchema]
});

module.exports = mongoose.model('album', albumSchema);