// Node.JS does not have support for ES2015 import statements
const express = require("express");
const app = express();

// Route Handler (get in this case)
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
// Express telling Node to listen on a port
app.listen(PORT);
