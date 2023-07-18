const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: { type: String, default: '', required: true },
  token: { type: String, default: '', required: true },
  otp: { type: String, },
  

}, {
  timestamps: true
});

const Otp = mongoose.model('Otp', UserSchema);

module.exports = Otp;