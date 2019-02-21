const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String
});

// will not delete/overwrite existing collections
mongoose.model("users", userSchema);
