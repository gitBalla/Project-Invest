const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  username: { type: String, required: true, unique: true },
  displayName: { type: String, required: true },
  profileImage: { type: String, required: true },
  description: { type: String, required: true },
  github: { type: String, required: true },
  email: { type: String, required: true },
});

// Export model
module.exports = mongoose.model('Profile', ProfileSchema);
