import mongoose, { Decimal128 } from "mongoose"
import { IpassengerIds } from "./passengerIds.interface"
import { IClient } from "./client.interface"

export interface ITicket extends Document {
    ticketNumber: number
    itinerarie: string//provisorio seria um id
    passengers: IpassengerIds[]
    totalValue: Decimal128
    client: mongoose.Types.ObjectId | IClient //provisorio seria um id
    pay: boolean
    expiresTicket: Date
}