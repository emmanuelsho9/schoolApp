const mongoose = require('mongoose');

// Define the subject schema
const subjectSchema = new mongoose.Schema(
    {
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  parentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'parentId',
    required: true,
  },

},{
  timestamps: true
});

// Create the Subject model
const Subject = mongoose.model('Result', subjectSchema);

module.exports = Subject;
