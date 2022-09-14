import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
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
app.get("/",(req,res)=>{
    res.send("Hello First Request")
})
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