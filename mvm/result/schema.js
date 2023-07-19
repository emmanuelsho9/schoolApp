const mongoose = require('mongoose');

// Define the subject schema
const subjectSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'studentId',
    required: true,
  },

},{
  timestamps: true
});

// Create the Subject model
const Subject = mongoose.model('Result', subjectSchema);

module.exports = Subject;
