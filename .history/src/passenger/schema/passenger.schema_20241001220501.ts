import mongoose from "mongoose";



export const PassengerSchema = new mongoose.Schema({
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true }


}, { timestamps: true })