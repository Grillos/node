const mongoose = require('../../config/mongoose-conect');
var restful = require('node-restful');

var User = restful.model('user', mongoose.Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date
}))
.methods(['get', 'post', 'put', 'delete']);

module.exports = User;