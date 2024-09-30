export interface ITicket extends Document{

    ticketNumber:number
    itinerarie: string//provisorio seria um id
    passengers
    totalValue
    client
    pay:boolean
    expiresTicket:Date
    
}