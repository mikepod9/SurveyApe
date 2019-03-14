const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// serialize user ID into a browser cookie
// user = exisitingUser or newUser from below
passport.serializeUser((user, done) => {
  // user.id = mongodb primary key
  done(null, user.id);
});

// deserialize browser cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({ googleId: profile.id }).save();
        done(null, newUser);
      }
    }
  )
);
