import { Type } from "class-transformer"
import { ArrayNotEmpty, IsEmail, IsMongoId, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator"
import { IpassengerIds } from "src/common/interfaces/passengerIds.interface"

export class ClientDTO {

    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsString()
    readonly fone: string

    @IsNotEmpty()
    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    @IsString()
    readonly password: string

    @IsNotEmpty()
    @IsString()
    readonly address: string

    @IsNotEmpty()
    @IsNumber()
    readonly number: number

    @IsNotEmpty()
    @IsString()
    readonly city: string
    
    @IsNotEmpty()
    @IsString()
    readonly province: string
    
    @IsNotEmpty()
    @IsString()
    readonly country: string
    
    @ArrayNotEmpty() 
    @ValidateNested({ each: true }) 
    @Type(() => Passenger) 
    readonly passengers: IpassengerIds[]


    
    
    

}


export class Passenger {
    @IsNotEmpty()
    @IsMongoId()
    readonly client: string//temporiario será um id
}