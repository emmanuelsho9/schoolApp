const mongoose = require('mongoose');

const AskQuestion = new mongoose.Schema({
    classteacher: { type: String, default: '', required: true },
    subject: { type: String, default: '', required: true },
    parentName: { type: String, default: '', required: true },
    applicationtitle: { type: String, default: '', required: true },
    description: { type: String, default: '', required: true },
 
}, {
  timestamps: true
});
 
const ask_question = mongoose.model('AskQuestion', AskQuestion);

module.exports = ask_question;