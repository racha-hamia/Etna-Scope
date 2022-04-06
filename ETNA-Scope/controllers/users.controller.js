
var express = require('express');
var router = express.Router();

var login = require('../controllers/login.controller')
const {User} = require('../models/index');

exports.test = function(req, res, next) {
    
        console.log(login.checkEtnaLogin)
    
  }


