import {Schema} from "mongoose"

const instructionsSchema = new Schema({
  picture: { type: Image, required: true },
  details: { type: String, required: true },
  date: { timestaps: true, required: true },
  location: { type: String, enum: ["Point"] },
})

const housesSchema = new Schema({
  houseid: { type: String, required: true },
  houseName: { type: String, required: true },
  readings: { type: String, required: true },
  address: { type: String, required: true },
  houseOwner: { type: String, required: true },
  Total_Cost: {
    type: Number,
  },
  Instructions: [{type:instructionsSchema, default: {}}],
})

const homeownersSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  houses: [{type:housesSchema, default:{} }],
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