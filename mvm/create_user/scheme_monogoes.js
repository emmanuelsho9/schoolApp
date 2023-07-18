const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, default: '', required: true },
  token: { type: String, default: '', required: true },
  otp: { type: String, },
  email: { type: String, default: '', required: true },
  password: { type: String, default: '', required: true },
  phoneNumber: { type: String, default: '', required: true },
  verified: { type: Boolean, default: false},
  children: { type: Array, default: []},
  typeRegister: { type: String, default: ''},


}, {
  timestamps: true
});

const UserMoniBag = mongoose.model('Parent', UserSchema);

module.exports = UserMoniBag;
