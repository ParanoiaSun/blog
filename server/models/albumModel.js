const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    _id: {

    },
    name: {
        require: true,
        type: String
    },
    create_time: {
        type: Date,
        default: Date.now()
    },
    is_deleted: {
        type: Number,
        default: 0
    },
    photos: {
        photo_id: {
            require: true,
            type: Number
        },
        description: {
            require: true,
            type: String
        },
        create_time: {
            type: Date,
            default: Date.now()
        },
        img: {
            require: true,
            type: String
        },
        is_deleted: {
            type: Number,
            default: 0
        }
    }
});

// module.exports = mongoose.model('album', albumSchema);