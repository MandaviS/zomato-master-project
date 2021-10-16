import passport from "passport";
import googleOauth from "passport-google-oauth20";

import { UserModel } from "../database/allModels";

const GoogleStrategy = googleOauth.Strategy;

export default (passport) => {
 passport.use(
     new GoogleStrategy({
         clientID: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
         callbackURL: "http://localhost:4000/auth/google/callback",
     } , async (accessToken, refreshToken, profile, done) =>{
         //creating a new user object
         const newUser = {
         fullname: profile.displayName,
         email: profile.emails[0].value,
         profilePic: profile.photos[0].value,
         };
         try{
             //check if the user exist
             const user = await UserModel.findOne({ email: newUser.email});
             
             if(user){
                 //generate token
                 const token = user.generateJwtToken();
                 done(null, { user,token }); //return user
             } else{
                 const user = await UserModel.create(newUser); //create new user
                 //generate token
                 const token = user.generateJwtToken();
                 done(null, { user,token });  //return user
             }
         } catch(error){
            done(error, null);
         }
     } )
 );

 passport.serializeUser((userData,done)=> done(null, {...userData}));
 passport.deserializeUser((userData,done)=> done(null,id));
};
