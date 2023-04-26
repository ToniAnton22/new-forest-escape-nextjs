import House from "../../../../lib/schema/Houses"

export async function handler(req,res){
    if(!req?.body){
        res.status(400).json({message:"Bad request, please try again"})
        return
    }
    try{

        if(req.method === "POST"){

            let user = await House.findOneAndUpdate({_id: req?.body?.id},{
                $set: {instructions : req?.body?.instructions}
            },{
                rawResults: true
            })
            await user.save()
            if(user?.modifiedCount == 1){
                res.status(201).json({message:"Created"})
                return
            }
            res.status(404).json({message:"House not found"})
        }else{
            res.status(405).json({message:"Method is not allowed"})
            return
        }

    }catch(e){
        console.error(e)
        res.status(500).json({message:"Something went wrong, please try again later."})
    }
}