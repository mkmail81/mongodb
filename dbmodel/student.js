const mongoose  = require("mongoose");

const mySchema = new mongoose.Schema({
    username: String,
    password: String
})


module.exports = mongoose.model('jwtUser', mySchema)
