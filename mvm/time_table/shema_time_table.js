const mongoose = require('mongoose');

// Define the subject schema
const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },

}, {
  timestamps: true
});

// Create the Subject model
const TimeTable = mongoose.model('TimeTable', subjectSchema);

module.exports = TimeTable;
