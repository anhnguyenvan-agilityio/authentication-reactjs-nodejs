'use strict';

var passport = require('passport');

var GoogleTokenStrategy = require('passport-google-token').Strategy;
var config = require('./config');

module.exports = function () {
  passport.use(new GoogleTokenStrategy({
    clientID: config.googleAuth.clientID,
    clientSecret: config.googleAuth.clientSecret
  },
    function (accessToken, refreshToken, profile, done) {
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
      // Save user to db
      const user = {
        fullName: profile.displayName,
        email: profile.emails[0].value,
        googleProvider: {
          id: profile.id,
          token: accessToken
        }
      };
      return done(null, user);
    }));
};