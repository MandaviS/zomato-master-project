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
        const{ email, password,fullname, phoneNumber } = req.body.credentials;
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
Route  /signup
Des    signup with email and password
Params none
Access Public
Method POST
*/
export default Router;