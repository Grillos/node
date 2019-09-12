var restful = require('node-restful'),
    mongoose = restful.mongoose;
    
mongoose.connect('mongodb://db/account');

module.exports = mongoose