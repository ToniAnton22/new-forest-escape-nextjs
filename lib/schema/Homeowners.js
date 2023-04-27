import {Schema,models,model} from "mongoose"
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

export default (models.homeowners) || model("homeowners",homeownersSchema)