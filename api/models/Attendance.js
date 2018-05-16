var mongoose = require('mongoose');
var employeeSchema = mongoose.model('Employee').schema

var attendanceSchema = mongoose.Schema ({
    date: {
        type: Date,
        default : Date.now
    },
    workingHours: {
        type: Number,
        default: 8
    },
    employee: {
        type: employeeSchema,
        required: true
    },
    status: {
        default: 'present',
        enum: [
            'present',
            'absent',
            'dayOff',
            'sickDay'
        ],
        type: String
    }
});
var Attendance = mongoose.model(
    'Attendance',
    attendanceSchema,
    'attendance'
);