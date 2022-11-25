const mongoose = require("mongoose");
const QuestionOptions = require("./questionOptions");

const Question = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Please enter question"],
    maxlength: [255, "Question cannot exceed 255 char"],
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: "Topic" },
  options: {
    type: [QuestionOptions],
    default: undefined,
  },
});

module.exports = mongoose.model("Question", Question);
