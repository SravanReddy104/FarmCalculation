const router = require("express").Router();
const user = require("../Models/newModel");

getNewData = async (req, res) => {
  console.log("in new")
  console.log("in get data");
  try{
  const data = await user.find({}).sort({_id:-1}) ;
  console.log(data)
  res.send(data)
  }catch(err){
    console.log(err)
  }
};

router.get("/", getNewData);
module.exports = router;
