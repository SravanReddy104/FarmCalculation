const router = require("express").Router();
const VechileModel = require("../Models/vechileSchema");
const user = require("../Models/userModel");

addData = async (req, res) => {
  const data = req.body;
  console.log(data)

  console.log("in get data");
  try {
    const response = await VechileModel.create(data);
    console.log(response)
    res.send("ok")
  } catch (err) {
    console.log(err);
  }
};

router.post("/", addData);
module.exports = router;