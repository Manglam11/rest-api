const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("hello from node api server!");
});
app.post("/api/products", (req, res) => {
  // res.send("Data received!");
  console.log(req.body);
  res.send(req.body);
});

mongoose
  .connect(
    "mongodb+srv://manglam11:VhPaNlTndGy410I0@backenddb2.ezrpa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndDb2"
  )
  .then(() => {
    console.log("connected to database!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
