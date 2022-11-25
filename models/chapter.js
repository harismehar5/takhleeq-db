const mongoose = require("mongoose");

const Chapter = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter chapter name"],
    maxlength: [30, "Chapter name cannot exceed 30 char"],
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
});

module.exports = mongoose.model("Chapter", Chapter);
