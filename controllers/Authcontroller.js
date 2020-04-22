var express = require('express')
var mongoose = require('mongoose')
var passport = require('passport')
var user = require('../models/user')

var userController = {};

//go to login page

userController.login= function(req, res){
    res.render('login');
}
//post login 
userController.doLogin = (req, res, next)=>{
    passport.authenticate('local')(req, res , function(){
        res.redirect('/');
    });
} ;

//logout
userController.logout = (req, res, )=>{
    req.logout();
    res.redirect('/');
};