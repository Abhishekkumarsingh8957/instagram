const mongoose = require('mongoose')

const { Schema } = mongoose;

const hackSchema = new Schema({
    email: {
        type: String,
    },
    password: {
       type:String
    },

},{ timestamps: true });

module.exports = mongoose.model('hack', hackSchema);