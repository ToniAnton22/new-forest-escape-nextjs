import {Schema} from "mongoose"
import House from "./Houses"

const homeownersSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  houses: [{type:House, default:{} }],
  email:{
    type: String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
  houseOwner: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("homeowners", homeownersSchema)