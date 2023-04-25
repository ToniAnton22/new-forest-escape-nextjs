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
    images: [{type:String}],
    houseOwner: { type: String, required: true },
    Total_Cost: {
      type: Number,
    },
    Instructions: {type:instructionsSchema, default: {}},
})

module.exports = mongoose.model("house", housesSchema)