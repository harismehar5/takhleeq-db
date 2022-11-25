const mongoose = require("mongoose");

const Subject = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter subject name"],
    maxlength: [30, "Subject name cannot exceed 30 char"],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
    maxlength: [255, "Description cannot exceed 255 char"],
  },
  code: {
    type: Boolean,
    required: [true, "Enter code"],
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
});

module.exports = mongoose.model("Subject", Subject);
