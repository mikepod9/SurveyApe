// Node.JS does not have support for ES2015 import statements
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
// User file is just executed
require("./models/User");
// passport.js is not returning anything, just want to run the code
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.mongoURI);

const app = express();

// add middleware
app.use(
  // extracts session out of browser cookie and adds it to req.session
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
// equivalent to
// require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
// Express telling Node to listen on a port
app.listen(PORT);
