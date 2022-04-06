var express = require('express');
var router = express.Router();
const {Post} = require('../models/index');

//GET ALL POSTS
router.get('/', function(req, res, next) {
  res.json('charly ça marche ils sont ou mes putains de cookies !!!!!!!!!!!!!!!!!')
});

module.exports = router;