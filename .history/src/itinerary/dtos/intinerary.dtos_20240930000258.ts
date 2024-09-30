import { IsDate, IsDecimal, IsMongoId, IsNotEmpty, IsString } from "class-validator"
import { Decimal128 } from "mongoose"

export class ItineraryDTO {

    @IsNotEmpty()
    @IsDate()
    readonly dateTravel: Date

    @IsNotEmpty()
    @IsString()
    readonly origin: string

    @IsNotEmpty()
    @IsString()
    readonly boardingLocation: string

    @IsNotEmpty()
    @IsString()
    readonly boardingTime: string

    @IsNotEmpty()
    @IsString()
    readonly destination: string

    @IsNotEmpty()
    @IsString()
    readonly landingPlace: string

    @IsNotEmpty()
    @IsString()
    readonly landingTime: string

    @IsNotEmpty()
    @IsMongoId()
    readonly bus: string //provisorio será um id

    @IsNotEmpty()
    @IsMongoId()
    readonly busmap: string //provisorio será um id

    @IsNotEmpty()
    @IsDecimal({ force_decimal: true, decimal_digits: '2,2' })
    readonly price: Decimal128
}