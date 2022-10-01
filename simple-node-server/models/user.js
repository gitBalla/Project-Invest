const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  developer: { type: Boolean, required: true },
  investor: { type: Boolean, required: true },
});

// Export model
module.exports = mongoose.model('User', UserSchema);
