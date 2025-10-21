const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeID: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,

    },
    NIC: {
        type: String,
        required: true,
    }


})

module.exports = mongoose.model('Employee', employeeSchema);