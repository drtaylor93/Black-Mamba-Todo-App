var passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.use(new GitHubStrategy({
    //In real life this client ID and secret would be stored in a db and hashed
    clientID: "238cf091e65431a92861",
    clientSecret: "d54521bfc6a0be845cd54b0741e912d0ba4c1c4a",
    callbackURL: "http://localhost:54320/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    //User.findOrCreate({})
      return done(null, profile);
      }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    //User.findById(id, function(err, user) {
      done(null, user);
   // });
  });

