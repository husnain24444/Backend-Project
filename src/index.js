import dotenv from "dotenv"
import mongoose from "mongoose"
import express from "express"
import {db_name} from "./constants.js"

dotenv.config({
    path:'/.env'
});

const app=express()

(async ()=>{
    try {
        await mongoose.connect(`${process.env.mongodb_url}/${db_name}`)
        app.on("error",(error)=>{
            console.log("error",error)
            throw err
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening at ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("error",error)
        throw err
    }
})()