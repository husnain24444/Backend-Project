import mongoose from "mongoose";
import { db_name } from "../constants.js";
import express from "express"
const app=express()

const connectdb =async ()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.mongodb_url}/${db_name}`)
        app.on("error",(error)=>{
            console.log("error",error)
            throw err
        })
        console.log(`\n mongodb connection !! host:${connectionInstance.connection}`)
        
        
    } catch (error) {
        console.log("mongodb connection error",error)
        process.exit(1)
    }
}
export default connectdb