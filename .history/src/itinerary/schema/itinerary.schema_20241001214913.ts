import mongoose from "mongoose";




export const ItinerarySchema = new mongoose.Schema({


    dateTravel:{type:Date,required:true},
    origin: {type:String,requerid:true},
    boardingLocation: {type:String,requerid:true},
    boardingTime: {type:String,requerid:true},
    destination: {type:String,requerid:true},
    landingPlace: {type:String,requerid:true},
    landingTime: {type:String,requerid:true},
    bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', require: true }, //provisorio será um id
    busmap: { type: mongoose.Schema.Types.ObjectId, ref: 'BusMap', require: true }, //provisorio será um id
    price: {type:Decimal128}
    

})



