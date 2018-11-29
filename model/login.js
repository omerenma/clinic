
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// register schema
var LoginSchema = new Schema({
    name:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },

    email:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },

    password:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    confirmPassword:{
        type:String,
        required:true,
        unique:true
    }


});

var Login = mongoose.model("Login", LoginSchema);
module.exports  = Login;
