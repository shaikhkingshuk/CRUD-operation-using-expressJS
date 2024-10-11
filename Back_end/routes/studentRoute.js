const express = require("express");
const router = express.Router();
const studentModel = require("../models/studentModel");
const {
  getAllStudents,
  addStudents,
  findStudents,
  updateStudents,
  deleteStudents,
} = require("../controllers/studentController");

router.post("/addStudent", addStudents);

router.get("/students", getAllStudents);

router.get("/students/:id", findStudents);

router.put("/students/:id", updateStudents);

router.delete("/students/:id", deleteStudents);

module.exports = router;
