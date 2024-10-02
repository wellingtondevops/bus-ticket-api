import mongoose, { Decimal128 } from "mongoose"
import { IBus } from "./bus.interface"
import { IBusmap } from "./busmap.interface"

export interface IItinerary extends Document {

    dateTravel: Date
    origin: string
    boardingLocation: string
    boardingTime: string
    destination: string
    landingPlace: string
    landingTime: string
    bus: mongoose.Types.ObjectId | IBus 
    busmap: mongoose.Types.ObjectId | IBusmap 
    price: Decimal128


}