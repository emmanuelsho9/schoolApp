const mongoose = require('mongoose');

// Define the subject schema
const subjectSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  term: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  results: [
    {
      subject: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
      grade: {
        type: String,
        required: true,
      },
    },
    // Add more subjects, scores, and grades here...
  ]
}, {
  timestamps: true
});

// Create the Subject model
const Subject = mongoose.model('Result', subjectSchema);

module.exports = Subject;
