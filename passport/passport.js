var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose')
var app = express()



//
passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));
  // login post redirect
  app.post('login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

//login
app.get((req, res)=>{
  req.login(user, function(err) {
    if (err) { return next(err);
     }
    //  if(username : loanofficer){
    //      return res.redirect('../views/loanoffier')
    //  }
    //  else ifusername : loanofficer){
    //     return res.redirect('../views/loanoffier')
    // }
    return res.redirect('/users/' + req.user.username);
  });
})



//logout
app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });