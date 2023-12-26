const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();


const getDataRoute = require("./Routes/getDataRoute");
const sendDataRoute = require("./Routes/sendDataRoute");
const deleteRoute = require("./Routes/deleteRoute");
const userModel = require("./Models/userModel");
const editRoute = require("./Routes/editRoute");






app.use(express.json());

app.use(cors());
// app.use(express.static(path.join(__dirname,"./build")))
require("dotenv").config();
mongoose
  .connect(process.env.URL)
  .then((e) => {
    console.log("connection success");
  })
  .catch((err) => {
    console.log(err);
  });
  
app.use("/getData", getDataRoute);


app.use("/edit",editRoute)
app.get("/del", async (req,res)=>{
  console.log("in delete data",req.body);

  const id = req.body
  try{
  const data = await userModel.deleteMany({});
  console.log(data)
  res.send(data)
  }catch(err){
    console.log(err)
  }
})

app.use("/sendData", sendDataRoute);
app.use("/delete", deleteRoute);

app.get("/hello", (req, res) => {
  res.send("hello");
});
app.listen(9000, () => {
  console.log("server is listening");
});
