var user = require('../models/user')
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
mongoose.Promise = grobal.Promise;
mongoose.connect('localhost:27017/project')

var user = [
    new user({
        email : 'loanofficer@gmail.com',
        username : 'loanofficer',
        password : "loanofficer123",
        Role : 'loanofficer'
    });

     new user({
        email : 'lbloanofficer@gmail.com',
        username : 'lbloanofficer',
        password : "lbloanofficer123",
        Role : 'lbloanofficer'
    });
     new user({
        email : 'students@gmail.com',
        username : 'students',
        password : "students123",
        Role : 'students'
    });
];
done = 0;

for(i=0; i<user.lenght; i++){
    user[i].save(function (err,result){
        done++;
        if (done==user.length) {
            exit();
        }

    });
}
function exit(){
    mongoose.disconect();
}