const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let util = require('../util');

const subMessageSchema = new Schema({
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
    }
});

const messageSchema = new Schema({
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
    sub_message: [subMessageSchema]
});

module.exports = mongoose.model('message', messageSchema);

