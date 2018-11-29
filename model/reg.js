
'use strict';
var mongoose = require('mongoose');
 var bcrypt = require('bcrypt');


// register schema
var UserSchema = new mongoose.Schema({
    
    name:{
        type:String
    },
        
        

    email:{
            type:String,
            unique:true
            
            },

    password:{
              type:String
                
              }
});



// authenticate input against database documents

UserSchema.statics.authenticate =  (email, password, callback)=> {
    Register.findOne({ email: email })
      .exec(function (error, user) {
        if (error) {
          return callback(error)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, (err, result)=> {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  }








// hash password before storing to database


UserSchema.pre('save', function(next){
    var user = this;
    
    bcrypt.hash(user.password, 10,  function(err, hash){
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
    });
});

UserSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash){
    if(err){
      return next();

    }
    user.password = hash;
    next();
  });
});




var Register = mongoose.model("Register", UserSchema);
module.exports  = Register;
