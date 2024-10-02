import mongoose from "mongoose";



const ArmChairSchema = new mongoose.Schema({

    armchair: {type:Number,require:true},
    window: {type:Boolean,require:true},
    ticket: { type: mongoose.Schema.Types.ObjectId,ref: 'Ticket',require:false}
    passenger?: string//temporiario será um id

})
export const BusmapSchema = new mongoose.Schema({
    itinerarie: string //temporiario será um id
    capacity: number
    left: IArmChair[]
    right: IArmChair[]
})





