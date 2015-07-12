var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var Post = require('../models/post');
var Project = require('../models/project');
var router = express.Router();

router.post('/admin/login', passport.authenticate('local', { successRedirect: '/admin',
                                                         failureRedirect: '/admin/login'
                                                    })
);

router.post('/admin/blog', function(req, res){
  var post = new Post({title: req.body.title, article: req.body.article});
  post.save(function(err, post){
    console.log('Saved');
  });
});

router.post('admin/project', function(req, res){
  var project = new Project({name: req.body.name, description: req.body.description, url: req.body.url, image: req.body.image});
  project.save(function(err, project){
    console.log('Saved');
  });
});

module.exports = router;