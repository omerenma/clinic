var mongoose = require('mongoose');
var NewsletterSchema = new mongoose.Schema({
    email:String
});

var Email = mongoose.model('Email', NewsletterSchema);
module.exports = Email;