//required dependencies
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

//required files
var config = require('./config');
var users = require('./controllers/userCtrl');
var profiles = require('./controllers/profileCtrl')

var app = express();

//configuring CORS to whitelist only a specific origin, note that this is entirely optional and it does not have to be done. you can enable cors like normal using
//app.use(cors());
var corsOptions = {
  origin: 'http://localhost:3000'
};


//.use here
app.use(bodyParser.json());

//now we can call cors like so
app.use(cors(corsOptions));

//this will allow express session to run on all endpoints with our chosen secret being used to track cookies
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + './../public'));


app.post('/api/login', users.login);
app.get('/api/profiles', profiles.getFriends);








var port = 3000;
app.listen(port, function(){
  console.log('Have you heard this port ' + port + ' guy? Please don\'t make me listen him any more!');
})
