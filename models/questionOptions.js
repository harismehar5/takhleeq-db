const mongoose = require("mongoose");

const QuestionOptions = new mongoose.Schema({
  option: {
    type: String,
    required: [true, "Please enter question"],
    maxlength: [255, "Question cannot exceed 255 char"],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
    maxlength: [255, "Description cannot exceed 255 char"],
  },
  is_correct: {
    type: Boolean,
    required: true,
    default: false,
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  // question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
});

module.exports = QuestionOptions;
