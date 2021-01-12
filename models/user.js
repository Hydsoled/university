const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fb_id: {
        type: String,
        required: true,
        index: true
    },
    txt: String,
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {versionKey: false})

const User = module.exports = mongoose.model('User', userSchema, 'user')