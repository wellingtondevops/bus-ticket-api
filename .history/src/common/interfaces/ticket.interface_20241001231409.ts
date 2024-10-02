import mongoose, { Decimal128 } from "mongoose"
import { IpassengerIds } from "./passengerIds.interface"
import { IClient } from "./client.interface"
import { IItinerary } from "./itinerary.interface"

export interface ITicket extends Document {
    ticketNumber: number
    itinerarie: mongoose.Types.ObjectId | IItinerary//provisorio seria um id
    passengers: IpassengerIds[]
    totalValue: Decimal128
    client: mongoose.Types.ObjectId | IClient //provisorio seria um id
    pay: boolean
    expiresTicket: Date
}