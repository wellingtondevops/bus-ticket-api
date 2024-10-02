import mongoose from "mongoose";


export const ManagerSchema = new mongoose.Schema({


    name: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    role: {type:String,required:true}

},{timestamps:true})