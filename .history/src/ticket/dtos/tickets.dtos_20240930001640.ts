import { Type } from "class-transformer"
import { ArrayNotEmpty, IsBoolean, IsDate, IsMongoId, IsNotEmpty, IsNumber, IsString, isString, ValidateNested } from "class-validator"
import { IpassengerIds } from "src/common/interfaces/passengerIds.interface"

export class TicketDTO {

    @IsNumber()
    ticketNumber: number

    @IsNotEmpty()
    @IsMongoId()
    itinerarie: string//provisorio seria um id

    @ArrayNotEmpty() 
    @ValidateNested({ each: true }) 
    @Type(() => PassengerClientDTO) 
    passengers: IpassengerIds[]

    @IsNumber()
    totalValue: number

    @IsNotEmpty()
    @IsMongoId()
    client: string //provisorio seria um id

    @IsNotEmpty()
    @IsBoolean()
    pay: boolean
    
    @IsDate()
    expiresTicket: Date


    


}

export class PassengerClientDTO {
    @IsNotEmpty()
    @IsMongoId()
    readonly client: string//temporiario será um id
}