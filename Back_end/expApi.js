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
    console.log("connected to the database"); //to check connected or not
  })
  .catch((error) => {
    console.log(error); //to see what's the error if occurs
  });

//.... creating student model for DB

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

//.... doing CRUD operation with mongoDB

app.post("/addStudent", async (req, res) => {
  try {
    const newStudent = new studentModel(req.body);
    await newStudent.save();
    res.status(200).send(newStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/students", async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findStudent = await studentModel.findById(id);
    res.status(200).json(findStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.put("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateStudent = await studentModel.findByIdAndUpdate(id, req.body);
    if (!updateStudent) {
      return res.status(404).send({ message: "user not found with this ID" });
    }
    res.status(200).json(updateStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await studentModel.findByIdAndDelete(id);
    if (!deleteStudent) {
      return res.status(404).send({ message: "user not found with this ID" });
    }
    res.status(200).json(deleteStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});
