const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  phoneNumber:Number,
  vechileNumber:String,
  TotalBox:Number,
  date:Date

},
{timestamps:true}
)
module.exports = mongoose.model("veichledata",userSchema)