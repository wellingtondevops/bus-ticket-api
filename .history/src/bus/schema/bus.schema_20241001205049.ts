import mongoose from "mongoose";

const convenienceSchema = new mongoose.Schema({
    airConditioning: { type: Boolean, required: true, default: false },
    internet: { type: Boolean, required: true, default: false },
    bathroom: { type: Boolean, required: true, default: false },
    boardServices: { type: Boolean, required: true, default: false }
});

export const BusSchema = new mongoose.Schema({
    identify: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    busType: { type: String, required: true },
    conveniences: {
        type: [convenienceSchema],
        required: true,
        default: []
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        currentTime: () => new Date().toLocaleDateString('pt-BR')  // Return Date object
    }
});