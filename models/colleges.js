var mongoose = require ('mongoose');
var Schema = mongoose.Schema()

var collegesSchema = new mongoose.Schema({
    Cname: {
        type:String,
        required: true
    }
});
var colleges = mongoose.module('colleges', collegesSchema);
exports.colleges= colleges;