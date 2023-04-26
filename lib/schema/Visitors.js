import {Schema} from "mongoose"


const bookingSchema = new Schema({
  referenceid: {
    type: String,
    required: true,
  },
  Name: { type: String, required: true },
  number_of_people: { type: Number, required: true },
  houseName: { type: String, required: true },
  agentName: { type: String, required: true },
  houseid: { type: String, required: true },
})

const visitorsSchema = new Schema({
  bookingid: {
    type: String,
    required: true,
  },
  readings: {
    type: Number,
    required: true,
  },
  booking: [{type:bookingSchema, default: {}}],
})

module.exports = mongoose.model("visitors", visitorsSchema)