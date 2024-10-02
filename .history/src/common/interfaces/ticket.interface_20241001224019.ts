import { Decimal128 } from "mongoose"
import { IpassengerIds } from "./passengerIds.interface"

export interface ITicket extends Document {
    ticketNumber: number
    itinerarie: string//provisorio seria um id
    passengers: IpassengerIds[]
    totalValue: Decimal128
    client: string //provisorio seria um id
    pay: boolean
    expiresTicket: Date
}