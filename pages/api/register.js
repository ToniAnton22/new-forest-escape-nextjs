import {compare} from "bcrypt"
import Users from "../../lib/schema/Users"

export async function handler(req,res){

    if(!req.query){
        res.status(400).json({message:"Bad Input"})
        return
    }
    try{

        if(req.method === "GET"){
            let user;

            if(req?.query?.role === "Guest"){
                user = await Users.create({
                    firstName: req?.query?.firstname,
                    email: req?.query?.email,
                    password: req?.query?.password,
                    lastName: req?.query?.lastName,
                    delegated: req?.query?.delegate      
                })                
            }
            if(req?.query?.role === "Homeowner"){
                user = await Users.create({
                    fullName: req?.query?.firstname + " " + req?.query?.lastname,
                      houses: null,
                      email: req?.query?.email,
                      password: req?.query?.password,
                      houseOwner: 1,
                })
            }
            if(req?.query?.role === "Agency"){
                user = await Users.create({
                    agencyName: "",
                    agentName: req?.query?.firstname + " " + req?.query?.lastname,
                    role: "admin",
                    email:req?.query?.email,
                    password: req?.query?.password,    
                })
            }

            await user.save()
            if(user instanceof Users){
                res.status(201).json(user)
            }
            res.status(400).json({message:"Bad request"})
        }else{
            res.status(405).json({message:"Method not allowed"})
        }
        
    }catch(e){
        console.error(e)
        res.status(500).json({message:"Something went wrong"})
    }
}