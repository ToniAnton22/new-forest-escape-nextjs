import House from "../../../../lib/schema/Houses"
export default async function handler(req,res){
    let house = await Homeowners.findOne(req.body.id)
    if(house){
       let reading = house.readings.uploadedBy(req?.body?.date)
       res.status(201).json({reading})
    }
    res.status(404).json({message:"house not found"})
 
   
}
