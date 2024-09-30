import { IArmChair } from "src/common/interfaces/busmap.interface"

export class Busmap {


    readonly itinerarie: string //temporiario será um id
    readonly capacity: number
    readonly left: IArmChair[]
    readonly right: IArmChair[]
}