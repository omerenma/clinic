
var mongoose  = require('mongoose');
// Create a Schema Object

var UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        maxlength:20
    },

    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },

      password:{
          type:String,
          required:true
         }
   
});

var User = mongoose.model('User', UserSchema);
module.exports = User;