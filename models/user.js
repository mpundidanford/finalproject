var express = require( 'express');
var mongoose = require ('mongoose');
var schema = mongoose.schema();


var userSchema = new mongoose.schema({
     _id:{
         type: String,
         require : true,

     },
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
     

})
module.exports(user, userSchema);
