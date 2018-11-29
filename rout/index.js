
var express = require('express');
var router = express.Router();
var Reg = require('../model/reg');
var profile = require('../model/profile');
var Email = require('../model/email');




// GET / home
router.get('/', (req, res, next)=>{
    return res.render('index', {title:'Home'});
    next();
    });

    // GET / about
router.get('/about', (req, res, next)=>{
    return res.render('about', {title:'About Us'});
    next();
    });
    // GET / services
router.get('/services', (req, res, next)=>{
    return res.render('services', {title:'Services'});
    });

    // GET / doctors
router.get('/doctors', (req, res, next)=>{
    return res.render('doctors', {title:'Doctors'});
});

    
    // GET / Appointment
router.get('/myappointment', (req, res, next)=>{
    return res.render('myappointment', {title:'My Appointment'});
    });

    
    // GET / Request
router.get('/myrequest', (req, res, next)=>{
    return res.render('myrequest', {title:'My Request'});
    });

    
    // GET / Profile
router.get('/myprofile', (req, res, next)=>{
    return res.render('myprofile', {title:'My Profile'});
    });

    //POST/ Profile

       // GET / Profile
router.post('/myprofile', (req, res, next)=>{
      
            
    var profileData = {
        name: req.body.name,
        email: req.body.email,
        mobileNumber: req.body.mobileNumber,
        history:req.body.aboutMedicalHistory,
        birthday:req.body.birthday,
        selectBloodGroup:req.body.selectBloodGroup,
        gender:req.body.selectGender,
        yourAlleriges:req.body.yourAlleriges,
        AdressLine:req.body.AdressLine,
        country:req.body.country,
        yourHobbies:req.body.yourHobbies


    }

    profile.create(profileData, (error, reg)=>{
        if (error){
            return next(error);
        }else{
            return res.redirect('/myprofile');
        }
    })
    // }else{
    //     var err = new Error("All fields required");
    //     err.status = 400;
    //     return next(err);
    // }
    
    });

    
    // GET / News Letter
router.get('/myappointment', (req, res, next)=>{
    return res.render('myappointment', {title:'My Appointment'});
    });

    
   // GET / login
router.get('/login', (req, res, next)=>{
    return res.render('login', {title:'Login'});
    next();
});

// POST / login

router.post('/login', (req, res, next)=>{
    if(req.body.email && req.body.password ){
        Reg.authenticate(req.body.email, req.body.password, (error, user)=>{
            if(error || !user){
                var err = new Error("Wrong email or password");
                err.status = 401;
                return next( err);
            }
            else{
                req.session = user._id;
                return res.redirect('/myprofile');
            }
        });

    }else{
        var err = new Error("Email and Password required");
        err.status = 401;
        return next(err);
    }
});



// GET / sign up

router.get('/register', (req, res, next)=>{
    return res.render('register', {title:'Register'});
    next();
});


// Post / Email

router.post('/newsletter', (req, res, next)=>{
    var emailData = {
        email:req.body.yourEmail
    }
    Email.create(emailData, (error, email)=>{
        if (error){
            return next(error);
        }else{
            return res.redirect('/');
        }

    })
});

// POST / sign up
// Register = require('../model/reg');

router.post('/register', (req, res, next)=>{
         if(req.body.name && req.body.email && req.body.password){
           
        var regData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        }

        Reg.create(regData, (error, reg)=>{
            if (error){
                return next(error);
            }else{
                return res.redirect('/myprofile');
            }
        })
        }else{
             var err = new Error("All fields required");
             err.status = 400;
             return next(err);
         }
   
        

  

});

module.exports = router;

    
    