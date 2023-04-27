import {compare} from "bcrypt"
import Users from "../../lib/schema/Users"
import dbConnect from "../../lib/dbConnect"

export default async function handler(req,res){

    await dbConnect()
    if(!req.query){
        res.status(400).json({message:"Bad Input"})
        return
    }
    try{

        if(req.method === "GET"){
            let user;

            console.log(req?.query?.role)
            if(req?.query?.role == "guest"){
                console.log("guest")
                user = await Users.create({
                    firstName: req?.query?.firstName,
                    email: req?.query?.email,
                    password: req?.query?.password,
                    lastName: req?.query?.lastName,
                    delegated: req?.query?.delegate      
                })                
            }
            if(req?.query?.role == "homeowner"){
                user = await Users.create({
                    fullName: req?.query?.firstname + " " + req?.query?.lastname,
                      houses: null,
                      email: req?.query?.email,
                      password: req?.query?.password,
                      houseOwner: 1,
                })
            }
            if(req?.query?.role == "agency"){
                user = await Users.create({
                    agencyName: "",
                    agentName: req?.query?.firstname + " " + req?.query?.lastname,
                    role: "admin",
                    email:req?.query?.email,
                    password: req?.query?.password,    
                })
            }

            await user.save()
            console.log(user)
            if(user instanceof Users){
                res.status(201).json(user)
                return user
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