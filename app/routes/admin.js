var express = require('express');
var User = require('../models/user');
var Post = require('../models/post');
var Project = require('../models/project');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var config = require('../../config');
var router = express.Router();

router.post('/authenticate', function(req, res){
  User.findOne({username: req.body.username}, function(err, user){
    if (err) throw err;
    if (!user) {
      res.json({ success: false, message: 'User not found'});
    } else if (user) {
      bcrypt.compare(req.body.password, user.password, function(err, response) {
        if (response === false) {
          res.json({success: false, message: 'Incorrect password'});
        } else {
          var token = jwt.sign(user, config.secret, {
            expiresInMinutes: 1440
          });
          res.json({
            success: true,
            message: "Authenticated",
            token: token
          });
        }
      });
    }
  });
});

router.get('/admin/users', function(req, res){
  User.find({}, function(err, users){
    res.send(users);
  });
});

router.post('/admin/new', function(req, res){
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      var admin = new User({
        username: req.body.username,
        password: hash
      });
      admin.save(function(err, admin) {
        if (err) throw err;
        var token = jwt.sign(admin, config.secret, {
            expiresInMinutes: 1440
          });
          res.json({
            success: true,
            message: "Authenticated",
            token: token
          });
      });
    });
  });
})

router.post('admin/project', function(req, res){
  var project = new Project({name: req.body.name, description: req.body.description, url: req.body.url, image: req.body.image});
  project.save(function(err, project){
  });
});

router.get('/setup', function(req, res) {
  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash('password', salt, function(err, hash){
      var paul = new User({
        username: 'paul',
        password: hash
      });
      paul.save(function(err) {
        if (err) throw err;
        console.log('User saved successfully');
        res.json({ success: true });
      });
    });
  });
});

module.exports = router;