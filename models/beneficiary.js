var express = require('express')
var mongoose= require('mongoose');
mongoose.connect('localhost:27017/project')
var schema = mongoose.schema()


var beneficiarySchema = mongoose.schema({

    reg_no:{
        type: String,
        require : true,
       },
   form_four_number:{
        type: String,
        require : true,
       },
   firstName:{
        type: Text,
        require : true,
       },
   middleName:{
        type : String,
        require: true,
        minlength : 5,
        maxlength : 100,
   },
   lastName:{
        type : String,
        require: true,
        minlength : 5,
        maxlength : 100,
           },
  gender:{
            type : String,
            require: true,
         },
   year_of_study:{
       type:Number,
       require:true
   },      
         
   tuition_fee:{
       type: Number
   },
   meal:{
       type: Number
   },
   field:{
       type: Number
   },
   research:{
       type:String
   },
   special_facult:{
       type: String
   },
   status:{
       type:String,
       require:true
   }    
});
var beneficiary = mongoose.models('beneficiary', beneficiarySchema)
exports.beneficiary = beneficiary;