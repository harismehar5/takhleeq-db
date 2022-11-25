const mongoose = require("mongoose");

const Topic = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter topic name"],
    maxlength: [30, "Topic name cannot exceed 30 char"],
  },
  video_link: {
    type: String,
    required: [true, "Please enter video link"],
    maxlength: [255, "Topic name cannot exceed 255 char"],
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  chapter: { type: mongoose.Schema.Types.ObjectId, ref: "Chapter" },
});

module.exports = mongoose.model("Topic", Topic);
