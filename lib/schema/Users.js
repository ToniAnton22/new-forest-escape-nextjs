import {Schema} from "mongoose"

const usersSchema = new Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  delegated: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("users", usersSchema)