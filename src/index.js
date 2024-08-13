import dotenv from "dotenv"

import mongoose from "mongoose"
import express from "express"
import {db_name} from "./constants.js"
import connectdb from "./db/index.js"


dotenv.config({
    path:'/.env'
});
console.log("hello",process.env) // remove this after you've confirmed it is working
const app=express()

connectdb()

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.mongodb_url}/${db_name}`)
//         app.on("error",(error)=>{
//             console.log("error",error)
//             throw err
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening at ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("error",error)
//         throw err
//     }
// })()