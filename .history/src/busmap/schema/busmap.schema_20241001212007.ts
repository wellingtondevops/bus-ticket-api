import mongoose from "mongoose";



const ArmChairSchema = new mongoose.Schema({

    armchair: { type: Number, require: true },
    window: { type: Boolean, require: true },
    ticket: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', require: false },
    passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', require: false }

})
export const BusmapSchema = new mongoose.Schema({
    itinerarie: { type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary', require: true },
    capacity: { type: Number, require: true },
    left: { type: [ArmChairSchema], require: true },
    right: { type: [ArmChairSchema], require: true }
})

BusmapSchema.index({ itinerarie: 1 }, { unique: true })


