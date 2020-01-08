var restful = require('node-restful'),
    mongoose = restful.mongoose;
    
mongoose.connect(process.env.VORTICS_MONGODB_URI || '');

module.exports = mongoose