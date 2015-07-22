var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http').Server(app);
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
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
app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 3600000
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(flash());
app.use(admin);
app.use(blog);
app.use(project);

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost/arthurwright');

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './public', '/index.html'));
});

app.listen(port);

console.log('Magic happens on port ' + port);