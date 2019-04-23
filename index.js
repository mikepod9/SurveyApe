// Node.JS does not have support for ES2015 import statements
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
// User file is just executed
require("./models/User");
require("./models/Survey");
// passport.js is not returning anything, just want to run the code
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const billingRoutes = require("./routes/billingRoutes");
const surveyRoutes = require("./routes/surveyRoutes");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
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

// equivalent to
// require("./routes/authRoutes")(app);
authRoutes(app);
billingRoutes(app);
surveyRoutes(app);

if (process.env.NODE_ENV === "production") {
  // Express can retrieve production assets
  app.use(express.static("client/build"));

  // Express can serve the static index.html
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
// Express telling Node to listen on a port
app.listen(PORT);
