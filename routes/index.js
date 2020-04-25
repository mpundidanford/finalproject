var express = require('express');
var router = express.Router();
var passport = require('passport');
var user = require('../models/user');


/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { user: req.user});
});




module.exports = router;
