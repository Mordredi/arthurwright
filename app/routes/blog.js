var express = require('express');
var Post = require('../models/post');
var router = express.Router();

router.get('/api/blog', function(req, res){
  Post.find(function(err, posts){
    var posts = posts;
  });
});

router.get('/api/blog/:id', function(req, res){
  Post.find({ _id: req.params.id }, function(err, post){
    var post = post;
  });
});