
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var multer = require('multer');
var upload = multer({dest: './uploads'});
var flash = require('connect-flash');
// var core = require('mongodb-core');
var MongoStore = require('connect-mongo')(session)
var passport = require('passport');
var app = express();

 // Connect to mongo
    mongoose.connect('mongodb://localhost:27017/clinicapi');
var db = mongoose.connection;
db.on('error', console.error.bind("Error in connection"));
// Session for tracking login
app.use(session({
    secret:"secrete session",
    resave:true,
    saveUninitialized:false,
    store: new MongoStore({
        mongooseConnection:db
    })
}));
db.once('open', function(){
    if(err){
        var err = new Error;
        err.status = 500;
        return next(err);

        

    }else{
        console.log('db connections successful!! ')
    }
});

// parse incoming responses

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// mongoose.connect('mongodb://localhost:27017/clinicapi');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('open', function(){
//     console.log("db connection successful!")
//     // All database communication goes here
    
// })


// serve static files from /public
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');


// include routes
var routes = require('./rout/index');
app.use('/', routes);



// catch 404 and forward to handler
app.use(function(req, res, next){
    var err = new Error('No File Found');
    err.status = 404;
    next(err);
});

// error handler
// Define as the last app.use callback

// app.use(function(req, res, nex){
// res.status(err.status || 508);
// res.render('error',{
//     message:err.message,
//     error:{}
// });

// });

app.use(function(req, res, nex){
    res.status(err.status || 508);
    res.render('/');
    
    });
// Listen on prt 3000
app.listen(3000, function(){
    console.log('Express app listening on port 3000');

});

