var
  express = require('express'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  path = require('path');

var app = express();

var
  mongoose = require('mongoose'),
  Api = require('./models/api');
mongoose.connect('mongodb://localhost/advent');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret: 'it is quite secret',
  resave: false,
  saveUninitialized: true
}));

app.use('/api/users', require('./controllers/user'));
app.use('/api/apilibrary', require('./controllers/api'));

app.listen(3000, function(){
  console.log('Broadcasting at port 3000...');
});
