import mongoose from "mongoose"
import { IClient } from "./client.interface"

export interface IPassenger extends Document {
    client: mongoose.Types.ObjectId | IClient //provisorio
    name: string
    age: number
}