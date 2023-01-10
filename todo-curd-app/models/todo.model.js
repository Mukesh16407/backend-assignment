const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});

//todo modal

module.exports = mongoose.model("todos", todoSchema);