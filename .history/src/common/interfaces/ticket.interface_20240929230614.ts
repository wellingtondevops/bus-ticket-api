export interface ITicket extends Document{

    ticketNumber:number
    itinerarie: string//provisorio seria um id
    passengers
    totalValue:number
    client:string //provisorio seria um id
    pay:boolean
    expiresTicket:Date
    
}