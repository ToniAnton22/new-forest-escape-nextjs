import Houses from "../../../../lib/schema/Houses"
export default async function handler(req,res){
    if(!req.body){
        req.status(400).json({message:"Bad request, please try again"})
        return
    }
    try{
        if(req.method === "GET"){

           const data = await fetch(`https://api.octopus.energy`)
            
            if(data.modifiedCount == 1){
                res.status(200).json(data)
                return
            }
            res.status(406).send({message:"Your input wasn't accepted"})
    
        }else{
            res.status(405).json({message:"Method is not allowed"})
            return
        }
    }catch(e){
        console.error(e)
        res.status(500).json({message:"Server is down/Unexpected error"})
    }

}