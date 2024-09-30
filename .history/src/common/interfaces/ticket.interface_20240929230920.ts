import { IpassengerIds } from "./passengerIds.interface"

export interface ITicket extends Document {
    ticketNumber: number
    itinerarie: string//provisorio seria um id
    passengers: IpassengerIds[]
    totalValue: number
    client: string //provisorio seria um id
    pay: boolean
    expiresTicket: Date
}