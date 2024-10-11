const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRoute = require("./routes/studentRoute");

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

app.use("/", studentRoute);
