var express = require('express')
var app = express();
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
var port = 3000;

function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  } else {
    req.flash('info', 'You must be logged in to see this page.');
    //res.redirect('/login');
  }
}
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.info = req.flash('info');
  next();
});

app.get('/',
 ensureAuthenticated,
 function (req, res) {
 res.send('Hello World');
  req.flash('info', 'Success!');
});

app.listen(port);
console.log('Server Started on Port : ' + port);
