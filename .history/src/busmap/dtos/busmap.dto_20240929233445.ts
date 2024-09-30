import { Type } from "class-transformer"
import { ArrayNotEmpty, IsBoolean, IsNotEmpty, IsNumber, ValidateNested,IsMongoId, IsString } from "class-validator"
import { IArmChair } from "src/common/interfaces/busmap.interface"

export class Busmap {

    @IsNotEmpty()
    @IsString()
    readonly itinerarie: string //temporiario será um id

    @IsNotEmpty()
    @IsNumber()
    readonly capacity: number


    @ArrayNotEmpty() 
    @ValidateNested({ each: true }) 
    @Type(() => ArmChair) 
    readonly left: IArmChair[]

    @ArrayNotEmpty() 
    @ValidateNested({ each: true }) 
    @Type(() => ArmChair) 
    readonly right: IArmChair[]
}


export class ArmChair {

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