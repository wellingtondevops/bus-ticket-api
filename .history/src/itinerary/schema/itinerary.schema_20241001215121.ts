import mongoose from "mongoose";

export const ItinerarySchema = new mongoose.Schema({
    dateTravel: { type: Date, required: true },
    origin: { type: String, required: true },
    boardingLocation: { type: String, required: true },
    boardingTime: { type: String, required: true },
    destination: { type: String, required: true },
    landingPlace: { type: String, required: true },
    landingTime: { type: String, required: true },
    bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
    busmap: { type: mongoose.Schema.Types.ObjectId, ref: 'BusMap', required: true },
    price: { type: mongoose.Schema.Types.Decimal128 }  
}
,{
    timestamps: true
});