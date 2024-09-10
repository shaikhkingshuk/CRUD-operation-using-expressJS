const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("node is running...");
});

mongoose
  .connect("mongodb://localhost:27017/crud")
  .then(() => {
    console.log("connected to the database"); //to check connected or not
  })
  .catch((error) => {
    console.log(error); //to see what's the error if occurs
  });

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

const Item = mongoose.model("Item", itemSchema);

//creating data in mongoDB
app.post("/addStudent", async (req, res) => {
  try {
    const newStudent = new Item(req.body);
    await newStudent.save();
    res.status(201).send(newStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.get("/getStudent", async (req, res) => {
  try {
    const getStudent = await Item.find({});
    res.status(200).send(getStudent);
  } catch (err) {
    res.status(400).send(err);
  }
});
