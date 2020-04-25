var express = require( 'express');
var mongoose = require ('mongoose');
var Schema = mongoose.Schema();


var userSchema = new mongoose.Schema({
     
     email :{
       type : String,
       require: true,
       minlength : 5,
       maxlength : 100,
     },
     username:{
        type : String,
        require: true,
        minlength : 5,
        maxlength : 100,
     },
     password: {
        type : String,
        require: true,
        minlength : 5,
        maxlength : 100,
     },
     Role:{
        type : String,
        require: true,
        minlength : 5,
        maxlength : 100,
     }
     

});

var user = mongoose.model('user', userSchema);
exports.user= user;
