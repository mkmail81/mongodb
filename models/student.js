const mongoose  = require("mongoose");

const newSchema = new mongoose.Schema ({
    username: String,
    password: String
})

module.exports = mongoose.model('jwt-schema', newSchema);