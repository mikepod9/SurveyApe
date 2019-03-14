const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// will not delete/overwrite existing collections
mongoose.model("users", userSchema);
