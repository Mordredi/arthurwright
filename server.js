var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./config');
var http = require('http').Server(app);
var bcrypt = require('bcrypt');
var morgan = require('morgan');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var path = require('path');
var flash = require('connect-flash');
var admin = require('./app/routes/admin');
var blog = require('./app/routes/blog');
var project = require('./app/routes/project');
var User = require('./app/models/user');
var Post = require('./app/models/post');
var Project = require('./app/models/project');

var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(admin);
app.use(blog);
app.use(project);

mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost/arthurwright');

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './public', '/index.html'));
});

app.listen(port);

console.log('Magic happens on port ' + port);