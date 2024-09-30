import { IsMongoId, IsNotEmpty } from "class-validator"
import { IpassengerIds } from "src/common/interfaces/passengerIds.interface"

export class TicketDTO {

    
        ticketNumber: number
        itinerarie: string//provisorio seria um id
        passengers: IpassengerIds[]
        totalValue: number
        client: string //provisorio seria um id
        pay: boolean
        expiresTicket: Date
    

}

export class PassengerClientDTO {
    @IsNotEmpty()
    @IsMongoId()
    readonly client: string//temporiario será um id
}