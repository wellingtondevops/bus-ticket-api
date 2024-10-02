import mongoose from "mongoose";

const PassengerId = new mongoose.Schema({
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'Passenger', required: true },
})
export const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    country: { type: String, required: true },
    passengers: { type: [PassengerId], required: true },

}, { timestamps: true })