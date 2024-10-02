import mongoose from "mongoose";
import { ITicket } from "./ticket.interface";
import { IItinerary } from "./itinerary.interface";
import { IPassenger } from "./passenger.interface";



export interface IBusmap extends Document {
    itinerarie:mongoose.Types.ObjectId | IItinerary;
    capacity: number
    left: IArmChair[]
    right: IArmChair[]
}

export interface IArmChair extends Document {
    armchair: number
    window: boolean
    ticket?:  mongoose.Types.ObjectId | ITicket;
    passenger?: mongoose.Types.ObjectId | IPassenger
}
