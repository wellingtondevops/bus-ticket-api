import { IConvenience } from "src/common/interfaces/bus.interface"

export class BusDTO {
    readonly identify: string
    readonly brand: string
    readonly model: string
    readonly busType: string
    readonly conveniences: IConvenience[]
}