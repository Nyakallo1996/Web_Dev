// This is my Schema, which tells us which type of inputs are allowed.

const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text: {
            type: String,
            require: [true, 'Please add a text value'],
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal', goalSchema)