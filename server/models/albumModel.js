const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let util = require('../util');

const albumSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    cover: {
        required: true,
        type: String,
        default: ''
    },
    create_time: {
        type: Date,
        default: util.getLocalDateTime()
    },
    is_deleted: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('album', albumSchema);