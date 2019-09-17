const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    send_time: {
        type: Date,
        default: Date.now()
    },
    is_deleted: {
        type: Number,
        default: 0
    },
    content: {
        require: true,
        type: String
    }
});

module.exports = mongoose.model('message', messageSchema);

