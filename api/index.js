import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();  // This must be at the top


const app = express()

mongoose.connect(process.env.Mongo).then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log("you are listing on port 3000")
})