const router = require("express").Router();
const user = require("../Models/userModel");

const deleteData = async (req, res) => {
 
  const {_id} = req.body
 
  const {formData} = req.body
  console.log("Edited FormData",_id)

  try{
  const data = await user.replaceOne({_id},formData);
  console.log("EditedData",data)
  res.send(data)
  }catch(err){
    console.log(err)
    res.status(500).send("Err in EditData")

  }
};

router.post("/", deleteData);
module.exports = router;