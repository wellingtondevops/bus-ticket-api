export interface IBusmap extends Document {

    itinerarie: string //temporiario será um id
    capacity: number
    left:IArmChair[]
    right:IArmChair[]
}

export interface IArmChair extends Document {
    armchair: number
    window: boolean
    ticket: string//temporiario será um id
    passenger: string//temporiario será um id
}
