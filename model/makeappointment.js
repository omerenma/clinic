
'use strict';
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


// register schema
var MakeappointmentSchema = new mongoose.Schema({
    
    name:{
        type:String
    },
        
        

    email:{
            type:String
            
            },

    mobileNumber:{
                type:String
                
                },
   department:{
                  type:String
                  
        },
        doctor:{
          type:String
          
},
date:{
  type:String
  
}

});

var Appoint = mongoose.model("Appointment", MakeappointmentSchema);
module.exports  = Appoint;



// authenticate input against database documents

// UserSchema.statics.authenticate = function (email, password, callback) {
//     Register.findOne({ email: email })
//       .exec(function (error, user) {
//         if (error) {
//           return callback(error)
//         } else if (!user) {
//           var err = new Error('User not found.');
//           err.status = 401;
//           return callback(err);
//         }
//         bcrypt.compare(password, user.password, function (err, result) {
//           if (result === true) {
//             return callback(null, user);
//           } else {
//             return callback();
//           }
//         })
//       });
//   }








// hash password before storing to database


// UserSchema.pre('save', function(next){
//     var user = this;
    
//     bcrypt.hash(user.password, 10,  function(err, hash){
//         if(err){
//             return next(err);
//         }
//         user.password = hash;
//         next();
//     });
// });

// UserSchema.pre('save', function(next){
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash){
//     if(err){
//       return next();

//     }
//     user.password = hash;
//     next();
//   });
// });





