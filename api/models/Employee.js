var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema ({
    username: {
        required: true,
        type: String,
        unique: true
    },
    email: {
        lowercase: true,
        required: true,
        trim: true,
        type: String,
        unique: true
    },
    phone: {
        required: true,
        trim: true,
        type: String
    },
    hireDate: {
        type: Date
    }
});
var Employee = mongoose.model(
    'Employee',
    employeeSchema,
    'employees'
);