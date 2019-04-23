const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 }
});

// mongoose creates a new collection if it does not exist
// otherwise, will use the existing collection
// will not delete/overwrite existing collections
mongoose.model("users", userSchema);
