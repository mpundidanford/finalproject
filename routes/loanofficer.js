var express = require('express')
const fs = require('fs');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var multer = require('multer')
var csv = require('csv')
var readXlsxFile = require('read-excel-file/node')
mongoose.connect('mongodb://localhost:27017/project')


//direct to home page
router.get('', (req,res)=>{
    req.render("profile")
})

global.__basedir = __dirname;
//multer upload storage 
var storage = multer.diskStorage({
    destination: (req, file, cb)=>{
         cb(null, __basedir + '/uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname + ,"-" + Date.now()+ "-" file.originalname)
    }
});
  var upload = multer({storage:storage });

  //express upload 
  app.use('', upload.single("uploadfile"), (req, res)=>{
      importExelData2Mongodb(__basedir + '/uploads/' + req.file.filename);

      req.json({'file imported successful', 'file': req.file});
  });

  //import exel/csv file to mongodb

