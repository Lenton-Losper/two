import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();  // This must be at the top
import userRoutes from './routes/User.js'
import authRoutes from './routes/auth.route.js'

const app = express()

app.use(express.json())

mongoose.connect(process.env.Mongo).then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log("you are listing on port 3000")
})

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)