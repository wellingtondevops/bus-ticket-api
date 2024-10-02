import mongoose from "mongoose";

const PassengerId = new mongoose.Schema({
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'Passenger', required: true },
})

export const TicketSchema = new mongoose.Schema({


    ticketNumber: { type: Number, required: true },
    itinerarie: { type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary', required: true },
    passengers: { type: [PassengerId], required: true },
    price: { type: mongoose.Schema.Types.Decimal128 },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },//provisorio seria um id //provisorio seria um id
    pay: { type: Boolean, default: false },
    expiresTicket: { type: Date, default: () => Date.now().toLocaleString() + 30 * 60 * 1000 }

}, { timestamps: true })