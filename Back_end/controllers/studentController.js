const studentModel = require("../models/studentModel");

const getAllStudents = async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(400).send(err);
  }
};

const addStudents = async (req, res) => {
  try {
    const newStudent = new studentModel(req.body);
    await newStudent.save();
    res.status(200).send(newStudent);
  } catch (err) {
    res.status(400).send(err);
  }
};

const findStudents = async (req, res) => {
  try {
    const { id } = req.params;
    const findStudent = await studentModel.findById(id);
    res.status(200).json(findStudent);
  } catch (err) {
    res.status(400).send(err);
  }
};

const updateStudents = async (req, res) => {
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
};

const deleteStudents = async (req, res) => {
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
};

module.exports = {
  getAllStudents,
  addStudents,
  findStudents,
  updateStudents,
  deleteStudents,
};
