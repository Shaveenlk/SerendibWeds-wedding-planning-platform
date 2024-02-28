import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    services: {
        type: [String],
        default: []
    },
    testimonials: {
        type: [String],
        default: []
    },
    appointments: {
        type: [Object],
        default: []
    }
});

export default mongoose.model("Vendors", vendorSchema);