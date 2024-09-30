import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class ManagerDTO {

    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsEmail()
    readonly email: string

    @IsNotEmpty()
    @IsString()
    readonly password: string

    @IsNotEmpty()
    @IsString()
    readonly role: string
}