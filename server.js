const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
var methodOverride = require('method-override');
var passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const cookie = require('cookie-session');

const app = express();
app.use(passport.initialize());
app.use(passport.session());

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(cookie({
  name: 'user-session',
  keys: ['random1', 'random2'] 
}))



const db = require('./src/config/database');
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error ' + err))

//Using handlebars js as template of choice
app.engine('handlebars', exphbs({ 
  defaultLayout: 'main'
  })
);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//API routes
app.use('/', require('./routes/routes'));

app.use(express.static('css'))
const PORT = process.env.PORT || 54320;
 
app.listen(PORT, console.log(`Server started on port ${PORT}`));