import { Type } from "class-transformer"
import { ArrayNotEmpty, IsBoolean, IsNotEmpty, IsNumber, ValidateNested,IsMongoId } from "class-validator"
import { IArmChair } from "src/common/interfaces/busmap.interface"

export class Busmap {


    readonly itinerarie: string //temporiario será um id
    readonly capacity: number
    readonly left: IArmChair[]

    @ArrayNotEmpty() // Garante que o array não é vazio
    @ValidateNested({ each: true }) // Valida cada elemento do array com base na classe fornecida
    @Type(() => ArmChair) // Transforma os objetos no tipo IArmChair
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