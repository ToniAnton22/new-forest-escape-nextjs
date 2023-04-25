import {Schema} from "mongoose"


const agencySchema = new Schema({
  agencyName: {
    type: String,
  },
  agentName: {
    type: String,
    required: true,
  },
  role: {
    type:String
  },
  email:{
    type: String,
    required: true
  },
  password: {
    type:String,
    required: true
  },
})

module.exports = mongoose.model("agencies", agencySchema)