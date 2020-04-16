var express = require('express')
var mongoose = require('mongoose')
var passport = require('passport')
var user = require('../models/user')

var userController = {};

//go to login page

userController.login= function(req, res){
    res.render('login');
}