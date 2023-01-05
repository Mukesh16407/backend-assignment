const mongoose = require('mongoose');

const movieSchema =mongoose.Schema({
    title : String ,
    imageurl : String ,
    rating :Number,
    description : String
});

module.exports = mongoose.model('movies' , movieSchema)
