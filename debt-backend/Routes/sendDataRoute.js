const router = require("express").Router();
const userModel = require("../Models/userModel");
const user = require("../Models/userModel");

sendData = async (req, res) => {
  const data = req.body;
  console.log(data)

  console.log("in get data");
  try {
    const response = await userModel.create(data);
    console.log(response)
    res.send("ok")
  } catch (err) {
    console.log(err);
  }
};

router.post("/", sendData);
module.exports = router;
