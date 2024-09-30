import { IsBoolean, IsNotEmpty, IsString } from "class-validator"
import { IConvenience } from "src/common/interfaces/bus.interface"

export class BusDTO {
    @IsNotEmpty()
    @IsString()
    readonly identify: string
    @IsNotEmpty()
    @IsString()
    readonly brand: string
    @IsNotEmpty()
    @IsString()
    readonly model: string
    @IsNotEmpty()
    @IsString()
    readonly busType: string
    @IsNotEmpty()
    @IsBoolean()
    readonly conveniences: IConvenience[]
}