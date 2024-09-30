import { Type } from "class-transformer"
import { IsMongoId, IsNotEmpty, IsNumber, IsString, isString, ValidateNested } from "class-validator"
import { IpassengerIds } from "src/common/interfaces/passengerIds.interface"

export class TicketDTO {

    @IsNumber()
    ticketNumber: number

    @IsNotEmpty()
    @IsMongoId()
    itinerarie: string//provisorio seria um id

    @ValidateNested({ each: true }) 
    @Type(() => PassengerClientDTO) 
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