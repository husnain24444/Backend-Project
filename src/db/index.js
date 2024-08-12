import mongoose from "mongoose";
import { db_name } from "../constants.js";

const connectdb =async ()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.mongodb_url}/${db_name}`)
        console.log(`\n mongodb connection !! host:${connectionInstance}`)
        
    } catch (error) {
        console.log("mongodb connection error",error)
        process.exit(1)
    }
}
export default connectdb