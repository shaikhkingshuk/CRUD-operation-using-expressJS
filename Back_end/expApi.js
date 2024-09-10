const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json()); // used to read json files

app.listen(3000, () => {
  console.log("node is running...");
});

//.... connecting with mongoDB

mongoose
  .connect("mongodb://localhost:27017/crudOperation")
  .then(() => {
    console.log("connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });

//.... creating student model for DB

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: Number,
  section: String,
});

const studentModel = mongoose.model("studentModel", studentSchema);
