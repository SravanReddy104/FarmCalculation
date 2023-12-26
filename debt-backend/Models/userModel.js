const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  weight:Number,
  perBox:Number,
  boxNumber:Number,
  date:Date,
  vechile:String
},
{timestamps:true}
)
module.exports = mongoose.model("batch2",userSchema)