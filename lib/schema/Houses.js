import {Schema} from "mongoose"

const instructionsSchema = new Schema({
    picture: { type: Image, required: true },
    details: { type: String, required: true },
    date: { timestaps: true, required: true },
    location: { type: String, enum: ["Point"] },
})

const readingsSchema = new Schema({
    prePost: {type:String, require: true},
    picture: {type:String, require: true},
    numbers: {type:String, require: true},
    uploadedBy: {type:String, require:true},
    date: {type:Date, require:true}
})

const housesSchema = new Schema({
    houseid: { type: String, required: true },
    houseName: { type: String, required: true },
    readings: [{ type: readingsSchema, default:{} }],
    address: { type: String, required: true },
    images: [{type:String}],
    houseOwner: { type: String, required: true },
    energyTarif: {type:Number, required: true },
    bufferAmount:{type:Number, required: true},
    Total_Cost: {
      type: Number,
    },
    Instructions: {type:instructionsSchema, default: {}},
})

module.exports = mongoose.model("house", housesSchema)