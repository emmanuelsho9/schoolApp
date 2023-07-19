const mongoose = require('mongoose');

const Assignment = new mongoose.Schema({
  subject: { type: String, default: '', required: true },
  topic: { type: String, default: '', required: true },
  assign_date: { type: String, default: '', required: true },
  last_date_submission: { type: String, default: '', required: true },
  submited: { type: Boolean, default: false},
  studentClass: { type: String, default: '',  },
  teacherName: { type: String, default: '',  },




}, {
  timestamps: true
});
 
const Assign = mongoose.model('Assignment', Assignment);

module.exports = Assign;