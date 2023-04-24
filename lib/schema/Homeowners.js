import {Schema} from "mongoose"

const instructionsSchema = mongoose.schema({
  picture: { type: Image, required: true },
  details: { type: String, required: true },
  date: { timestaps: true, required: true },
  location: { type: String, enum: ["Point"] },
})

const housesSchema = mongoose.schema({
  houseid: { type: String, required: true },
  houseName: { type: String, required: true },
  readings: { type: String, required: true },
  address: { type: String, required: true },
  houseOwner: { type: String, required: true },
  Total_Cost: {
    type: Number,
  },
  Instructions: [instructionsSchema],
})

const homeownersSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  houses: [housesSchema],
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