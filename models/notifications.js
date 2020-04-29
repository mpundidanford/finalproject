var mongoose = require('mongoose')
mongoose.connect('localhost:27017/project')

var NotificationSchema = mongoose.Schema({
    Notification : {
        type : String,
        
    }
})