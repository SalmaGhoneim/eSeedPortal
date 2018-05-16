var mongoose = require('mongoose');
var User = mongoose.model('User');
var Employee = mongoose.model('Employee');
var Attendance = mongoose.model('Attendance');

module.exports.getAllEmployees = function(req, res) {
    // get all employees in the Employee collections
    Employee.find({}).
    exec(function (err, Emp) {
        if(err) {
            console.log(err);
            return(err);
        }
        // return 200 if everything is OK
        return res.json ({
            data: Emp,
            err: null,
            msg: 'All employees are fetched'
        });
    });
};

module.exports.signIn = function(req, res) {
    // find the user that tries to sign in
    User.find(
        {
            username: req.body.username
        },
        function (err, Emp) {
            if (err) {
                console.log(err);
                return(err);
            }
            else {
                // if username is not in DB return 404
                if(!Emp) {
                    return res.status(404).json ({
                        data:null,
                        err : "username not found",
                        msg: null
                    })
                }
                // if wrong password return 401 unauthorized
                if(Emp.password != req.body.password) {
                    return res.status(401).json ({
                        data: null,
                        err: "wrong password",
                        msg: null
                    })
                }
                // return 200 if everything is OK
                return res.status(200).json ({
                    data: Emp,
                    err: null,
                    msg: 'Sign in is Successful'
                })
            }

        }
    )
}