import { IsBoolean, IsMongoId, IsNotEmpty, IsNumber } from "class-validator"

export class Chair {

    @IsNotEmpty()
    @IsNumber()
    readonly armchair: number

    @IsNotEmpty()
    @IsBoolean()
    readonly window: boolean
    
    @IsMongoId()
    readonly ticket: string//temporiario será um id
    
    @IsMongoId()
    readonly passenger: string//temporiario será um id
}