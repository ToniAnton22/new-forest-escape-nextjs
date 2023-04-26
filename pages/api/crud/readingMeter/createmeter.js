import House from "../../../../lib/schema/Houses"
export default async function handler(req,res){
    let house = await House.findOne(req.body.id)
    if(house){
        house.readings.push(req.body.readings)
    }
    await house.save()
    
    res.status(201).json({message:"successfully created"})
}
