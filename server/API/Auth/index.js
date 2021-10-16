import express from "express";
import bcrypt from "bcryptjs";

//models
import { UserModel } from "../../database/user";
import jwt from "jsonwebtoken";

const Router = express.Router();

/*
Route  /signup
Des    signup with email and password
Params none
Access Public
Method POST
*/
Router.post("/signup", async(req,res)=> {
    try{
       
        await UserModel.findByEmailAndPhone(req.body.credentials);
    
        //save to DB
     const newUser = await UserModel.create(req.body.credentials);
        //generate JWT auth token
        const token = newUser.generateJwtToken();
        //return
        return res.status(200).json({ token, status: "success"});
    }
    catch(error){
    return res.status(500).json({ error: error.message});
    }
});

/*
Route  /signin
Des    signin with email and password
Params none
Access Public
Method POST
*/
Router.post("/signin", async(req,res)=> {
try{
    
   const user = await UserModel.findByEmailAndPassword(req.body.credentials);

 
    //generate JWT auth token
    const token = user.generateJwtToken();
    //return
    return res.status(200).json({ token, status: "success"});
}
catch(error){
return res.status(500).json({ error: error.message});
}
});
export default Router;