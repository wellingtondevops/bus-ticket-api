import { IsBoolean, IsMongoId, IsNotEmpty, IsNumber } from "class-validator"

export class Chair {

    @IsNotEmpty()
    @IsNumber()
    readonly armchair: number

    @IsNotEmpty()
    @IsBoolean()
    readonly window: boolean

    @IsNotEmpty()
    @IsMongoId()
    
    readonly ticket: string//temporiario será um id
    @IsNotEmpty()
    @IsMongoId()
    readonly passenger: string//temporiario será um id
}