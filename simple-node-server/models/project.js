const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  dateCreated: { type: Date, required: true },
});

// Export model
module.exports = mongoose.model('Project', ProjectSchema);
