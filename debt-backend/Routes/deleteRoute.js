const router = require("express").Router();
const user = require("../Models/userModel");

const deleteData = async (req, res) => {
  console.log("in delete data",req.body);
  const id = req.body
  try{
  const data = await user.deleteOne(id);
  console.log(data)
  res.send(data)
  }catch(err){
    console.log(err)
  }
};

router.post("/", deleteData);
module.exports = router;
