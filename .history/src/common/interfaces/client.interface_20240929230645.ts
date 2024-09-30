export interface IClient extends Document {

    name: string
    fone: string
    email: string
    password: string
    address: string
    number: number
    city: string
    province: string
    country: string
    passengers: IpassengerIds[]
}

export interface IpassengerIds extends Document {
    passenger: string //provisorio 
}