import { Decimal128 } from "mongoose"

export class ItineraryDTO {


    readonly dateTravel: Date
    readonly origin: string
    readonly boardingLocation: string
    readonly boardingTime: string
    readonly destination: string
    readonly landingPlace: string
    readonly landingTime: string
    readonly bus: string //provisorio será um id
    readonly busmap: string //provisorio será um id
    readonly price: Decimal128
}