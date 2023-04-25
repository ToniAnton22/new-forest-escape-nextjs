import House from "../../../../lib/schema/Houses"
export async function handler(req,res){
    let house = await House.findOne(req.body.id)
    if(house){
       let reading = house.readings.uploadedBy(req.body.author)
       res.status(201).json({reading})
    }
    res.status(404).json({message:"house not found"})
 
   
}
