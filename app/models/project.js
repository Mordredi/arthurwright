var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Project = new Schema({
  name: { type: String },
  description: { type: String },
  url: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('Project', Project);