import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//if you are importing JS file you should also put js extension in express server
import authRouter from '../api/routes/auth.js'
import usersRouter from '../api/routes/users'
import hotelsRouter from '../api/routes/hotels'
import roomsRouter from '../api/routes/rooms'
const app = express()
// from now we are able to reach our data
dotenv.config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error;
    }
}
//middleware
app.use("/api/auth",authRouter)
app.use("/api/users",usersRouter)
app.use("/api/rooms",roomsRouter)
app.use("/api/hotels",hotelsRouter)
// if you want to look your connection in editor
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDb disconnected!")
})
mongoose.connection.on("connected",()=>{
    console.log("MongoDb connected!")
})


app.listen(8800, () => {
    connect()
    console.log("Connected to backend.")
})