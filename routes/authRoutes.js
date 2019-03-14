const passport = require("passport");

// need to pass app defined in index.js to handle routes
module.exports = app => {
  // Route Handler (get in this case)
  app.get(
    "/auth/google",
    // Google Strategy has an internal identifier of "google"
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Passport sees the code parameter in the URL and this time actually retreives scope info
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    // destroys the cookie
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
