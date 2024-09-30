import { Decimal128 } from "mongoose"

export interface IItinerary extends Document {

    origin: string
    boardingLocation: string
    boardingTime: string
    destination: string
    landingPlace: string
    landingTime: string
    bus: string //provisorio será um id
    busmap: string //provisorio será um id
    price: Decimal128


}