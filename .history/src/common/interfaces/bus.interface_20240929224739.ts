export interface IBus extends Document {

    identify
    brand
    model
    busType
    conveniences:

}

export interface IConvenience extends Document {
    airConditioning:boolean
    internet:boolean
    bathroom:boolean
    boardServices:boolean
}