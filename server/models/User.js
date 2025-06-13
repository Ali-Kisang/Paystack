
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String },
  subscriptionStatus: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  subscriptionExpiry: { type: Date },
});

module.exports = mongoose.model('User', userSchema);
