const router = require("express").Router();
// const userModel = require("../Models/userModel");
const user = require("../Models/userModel");

sendData = async (req, res) => {
  const data = req.body;
  console.log(data)

  console.log("in Send data");
  try {
    const response = await user.create(data);
    console.log(response)
    res.send("ok")
  } catch (err) {
    console.log(err);
    res.status(500).send("Err in SendData")
  }
};

router.post("/", sendData);
module.exports = router;
