var restful = require('node-restful'),
    mongoose = restful.mongoose;
    
mongoose.connect(process.env.VORTICS_MONGODB_URI || 'mongodb+srv://vortics:rdgpsfsWjyqEBxCv@cluster0-aei21.gcp.mongodb.net/vortics-db?retryWrites=true&w=majority');

module.exports = mongoose