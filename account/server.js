const app = require('./src/config/custom-express')

app.get('/', function (req, res) {
    res.send('Account up and running!');
  });

app.listen(3000, function(){
    console.log('Server running in port 3000')
})
