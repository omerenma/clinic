
'use strict';
var mongoose = require('mongoose');
//  var bcrypt = require('bcrypt');


// profile schema
var ProfileSchema = new mongoose.Schema({
    
    name:{
        type:String
    },
        
        

    email:{
            type:String
            
            },
    mobileNumber:{
        type:Number
    },

    aboutMedicalHistory:{
                type:String
                
                },
    birthData:{
                type:Number
                    
            },
 selectBloodGroup:{
                type:String
                
                },
selectGender:{
                    type:String
                    
            },
yourAllergies:{
            type:String
                
        },
        adress:{
            type:String
            
    },
    country:{
        type:String
        
},
hobby:{
    type:String
    
},
});



// authenticate input against database documents

// ProfileSchema.statics.authenticate = function (email, password, callback) {
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








// // hash password before storing to database

// ProfileSchema.pre('save', function(next){
//     var user = this;
    
//     bcrypt.hash(user.password, 10,  function(err, hash){
//         if(err){
//             return next(err);
//         }
//         user.password = hash;
//         next();
//     });
// });

// ProfileSchema.pre('save', function(next){
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash){
//     if(err){
//       return next();

//     }
//     user.password = hash;
//     next();
//   });
// });




var Profile = mongoose.model("profile", ProfileSchema);
module.exports  = Profile;
