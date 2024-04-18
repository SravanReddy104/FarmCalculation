const router = require("express").Router();
const user = require("../Models/userModel");

getData = async (req, res) => {
 
  try{
   const da = Date.now();
  const data = await user.find({date: da }).sort({_id:-1}) ;
  console.log("in get Data Success")
  res.send(data)
  }catch(err){
    console.log(err)
    res.status(500).send("Err in getData")

  }
};

router.get("/", getData);
module.exports = router;
