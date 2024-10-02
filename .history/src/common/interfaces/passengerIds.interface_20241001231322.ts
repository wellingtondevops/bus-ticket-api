import mongoose from "mongoose"
import { IPassenger } from "./passenger.interface"

export interface IpassengerIds extends Document {
    passenger: mongoose.Types.ObjectId | IPassenger
}

