import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class PassengerDTO {

    @IsNotEmpty()
    @IsMongoId()
    readonly client: string //provisorio

    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsNumber()
    readonly age: number
}