import mongoose from "mongoose";


const convenienceSchema = new mongoose.Schema({

    airConditioning: { type: Boolean, require: true, default: false },
    internet: { type: Boolean, require: true, default: false },
    bathroom: { type: Boolean, require: true, default: false },
    boardServices: { type: Boolean, require: true, default: false }

})

export const BusSchema = new mongoose.Schema({
    identify: { type: String, require: true },
    brand: { type: String, require: true },
    model: { type: String, require: true },
    busType: { type: String, require: true },
    conveniences: {
        type: [convenienceSchema],
        required: true,
        default: []
    },

   

})




