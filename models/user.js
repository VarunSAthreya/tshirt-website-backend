var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true,
    },
    lastname: {
        type: String,
        required: false,
        maxlength: 32,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    userinfo: {
        typr: String,
        trim: true,
    },
    // TODO: come back here
    password: {
        type: String,
        trim: true,
    },
    salt: String,
    role: {
        type: Number,
        default: 0,
    },
    purchases: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model("User", userSchema);