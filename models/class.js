const mongoose = require("mongoose");
const validator = require("validator");

const Class = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter class name"],
    maxlength: [30, "Class name cannot exceed 30 char"],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
    maxlength: [255, "Description cannot exceed 255 char"],
  },
  primary_color: {
    type: String,
    required: [true, "Enter primary color"],
  },
  secondary_color: {
    type: String,
    required: [true, "Enter secondary color"],    
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true,
  },
  is_published: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = mongoose.model("Class", Class);
