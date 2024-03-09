import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const vendorSchema = new mongoose.Schema({
    vendorId: {
        type: String,
        required: true
    },
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
        type: [serviceSchema],
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