var express = require('express');
var Post = require('../models/post');
var router = express.Router();

router.get('/api/blog', function(req, res){
  Post.find(function(err, posts){
    if (err) { console.log('error')};
    res.json(posts);
  });
});

router.post('/api/blog', function(req, res){
  var post = new Post({title: req.body.title, article: req.body.article});
  post.save(function(err, post){
    res.send(post);
  });
});

router.get('/api/blog/:id', function(req, res){
  var postId = req.params.id;
  Post.findOne({_id: postId}, function(err, post){
    res.json(post);
  });
});

module.exports = router;