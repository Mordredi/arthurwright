var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var Post = require('../models/post');
var Project = require('../models/project');
var router = express.Router();

router.post('/admin/new', function(req, res){
  User.register(new User({ username: req.body.username}), req.body.password, function(err, user){
    passport.authenticate('local')(req, res, function(){
      res.send(req.user);
    });
  });
});

router.post('/admin/login', passport.authenticate('local'), function(req, res){
  res.send(req.user);
});

router.post('admin/project', function(req, res){
  var project = new Project({name: req.body.name, description: req.body.description, url: req.body.url, image: req.body.image});
  project.save(function(err, project){
    console.log('Saved');
  });
});

module.exports = router;