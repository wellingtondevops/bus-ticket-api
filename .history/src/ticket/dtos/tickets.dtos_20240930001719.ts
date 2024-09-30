import { Type } from "class-transformer"
import { ArrayNotEmpty, IsBoolean, IsDate, IsMongoId, IsNotEmpty, IsNumber, IsString, isString, ValidateNested } from "class-validator"
import { IpassengerIds } from "src/common/interfaces/passengerIds.interface"

export class TicketDTO {

    @IsNumber()
    readonly ticketNumber: number

    @IsNotEmpty()
    @IsMongoId()
    readonly itinerarie: string//provisorio seria um id

    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => PassengerClientDTO)
    readonly passengers: IpassengerIds[]

    @IsNumber()
    readonly totalValue: number

    @IsNotEmpty()
    @IsMongoId()
    readonly client: string //provisorio seria um id

    @IsNotEmpty()
    @IsBoolean()
    readonly pay: boolean

    @IsDate()
    readonly expiresTicket: Date


}

export class PassengerClientDTO {
    @IsNotEmpty()
    @IsMongoId()
    readonly client: string//temporiario será um id
}