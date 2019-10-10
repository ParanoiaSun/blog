const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let util = require('../util');

const photoSchema = new Schema({
    photo_id: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String,
        default: ''
    },
    img: {
        required: true,
        type: String
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

module.exports = mongoose.model('photo', photoSchema);

