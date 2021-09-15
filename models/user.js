var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    firstname: {
        type: String,
        required:true
    },
    lastname: {
        type: String,
        required:true
    },
    email:{
        type: String,
        required : true,
        unique: true
    },
    username:{
        type: String,
        required : true,
        unique: true
    },
    password:{
        type: String
    },
    age:{
        type:Number,
        min:1
    },
    homeAddress:{
        type:String
    },
    currentAddress:{
        type:String
    },
    gender:{
        type:String
    },
    nationality:{
        type:String
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);