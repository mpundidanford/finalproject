var express = require('express')
var mongoose= require('mongoose');
var schema = mongoose.schema()


var student_Loan_detailsSchema = mongoose.schema({

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
    program_name:{
        type: String,
    }, 
    account_no:{
        type: integer,

    },
    bank_name:{
        type : String
    },    
   
   status:{
       type:String,
       require:true
   }    
});
var student_Loan_details = mongoose.models('student_loan_details', student_Loan_detailsSchema);
exports.student_Loan_details=student_Loan_details;