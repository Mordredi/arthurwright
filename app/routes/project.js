var express = require('express');
var Project = require('../models/project');
var router = express.Router();

router.get('/api/project', function(req, res){
  Project.find(function(err, projects){
    if (err) { console.log('error')};
    console.log(projects);
    res.json(projects);
  });
});

router.post('/api/project', function(req, res){
  var project = new Project({ name: req.body.name, description: req.body.description, url: req.body.url, image: req.body.image, git: req.body.git });
  project.save(function(err, project){
    res.send(project);
  });
});

module.exports = router;