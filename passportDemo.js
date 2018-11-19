// var express = require('express');
// var router = express.Router();
// var async = require('async');
// var request = require('request');
// var promise = require('promise');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var app = express();
// app.use(passport.initialize());
// app.use(passport.session());

// router.get('/getAllEmployee',function(req,res){

//   console.log('Hey!!!');
// })
// /*
// router.post('/', passport.authenticate('local',function(req, res) {
//   console.log('In authentication');
//   res.send("HOME..");
//   //res.send(req.body.email);
// }));*/
// router.get('/hello',function(req,res){
//   console.log('Hi');
//   res.send('Hey!!!');
// })
// module.exports = router;
// app.listen(5000);
var express = require('express');
var router = express.Router();
var app = express();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
app.listen(5000);