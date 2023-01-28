const mongoose = require("mongoose");

 Schema = mongoose.Schema;

var employees = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    occupation: {
        type: String
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model("employees", employees);
