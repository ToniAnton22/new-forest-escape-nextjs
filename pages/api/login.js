import {compare} from "bcrypt"
import Users from "../../lib/schema/Users"

export async function handler(req,res){

    if(!req?.query){
        res.status(400).json({message:"Bad Input"})
        return
    }
    try{

        if(req.method === "GET"){
            
            const user = await Users.findOne({email:req?.query?.email})

            const matchPass = await compare(req?.query?.password, user?.password)

            if(matchPass){

                res.status(302).json(user)
                return
            }
            res.status(404).json({message:"Not found"})

        }else{
            res.status(405).json({message:"Method not allowed"})
        }
        
    }catch(e){
        console.error(e)
        res.status(500).json({message:"Something went wrong"})
    }
}