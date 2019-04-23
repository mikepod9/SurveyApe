// This is only needed for development
// On production heroku builds the app, and just uses the static build files
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/auth/google", { target: "http://localhost:5000" }));
  app.use(proxy("/api/*", { target: "http://localhost:5000" }));
  app.use(proxy("/api/surveys/", { target: "http://localhost:5000" }));
};
