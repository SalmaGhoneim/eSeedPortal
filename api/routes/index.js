var express = require('express');
var router = express.Router();
var userController = require('../controllers/UserController');

    // call the proper methods in backend
    router.get('/getAllEmployees', userController.getAllEmployees);
    router.patch('/signIn', userController.signIn);
    module.exports = router;
