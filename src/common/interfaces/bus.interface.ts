export interface IBus extends Document {
    identify: string
    brand: string
    model: string
    busType: string
    conveniences: IConvenience[]
}

export interface IConvenience extends Document {
    airConditioning: boolean
    internet: boolean
    bathroom: boolean
    boardServices: boolean
}