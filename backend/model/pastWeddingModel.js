import mongoose from "mongoose";

const pastWeddingSchema = new mongoose.Schema({
    wedding_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bride_name: {
        type: String,
        required: true
    },
    groom_name: {
        type: String,
        required: true
    },
    contact_info: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    wedding_type: {
        type: String,
        required: true
    },
    guest_count: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    photographer_videographer: {
        type: String,
        required: true
    },
    caterer: {
        type: String,
        required: true
    },
    decorations: {
        type: String,
        required: true
    },
    entertainment: {
        type: String,
        required: true
    },
    recommendations: {
        type: String,
        default: ""
    },
    additional_notes: {
        type: String,
        default: ""
    }
});

export default mongoose.model("PastWedding", pastWeddingSchema);
