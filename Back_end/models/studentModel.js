const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  class: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
});

const studentModel = mongoose.model("studentModel", studentSchema);

module.exports = studentModel;
