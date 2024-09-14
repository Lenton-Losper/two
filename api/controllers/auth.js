import User from "../models/User.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req,res)=>{
   const {username,email,password} = req.body;
  const hashedpassword = bcryptjs.hashSync(password,10)
   const newUser = new User({username,email,password:hashedpassword})
   try {
       await newUser.save()
   
       res.status(200).json({
      message:"New user" })
   } catch (error) {
      res.status(409).json({
         message:error.message
      })
   }

  



}