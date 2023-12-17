const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  weight:Number,
  perBox:Number,
  boxNumber:Number,
  date:Date

},
{timestamps:true}
)
module.exports = mongoose.model("farmdata",userSchema)