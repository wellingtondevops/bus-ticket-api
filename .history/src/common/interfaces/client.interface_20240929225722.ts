export interface IClient extends Document{

    name : string
    fone : string
    email :string
    password: string
    address: string
    number:number
    city:string
    province:string
    country:string
    passengers:string
}

export interface IpassengerIds extends Document{
    client:string //provisorio 
}