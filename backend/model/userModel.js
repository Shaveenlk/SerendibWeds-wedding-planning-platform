import mongoose from "mongoose";

const appointmentsuserSchema = new mongoose.Schema({
    vendorname: {
        type: String,
        required: true
    },
    bookingDate: {
        type: Date,
        required: true
    },
    bookingTime: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    appointmentId: {
        type: String,
        required: true
    }
});

const savedweddingschema = new mongoose.Schema({
    wedding_id:{
        type: String,
        required: true
    },
    }
)




const userSchema = new mongoose.Schema({
    firebaseUserId: {
        type: String,  // Assuming the Firebase user ID is a string
        required: true  // Adjust the required attribute based on your requirements
    },
    groom_name: {
        type: String,
        required: true
    },
    bride_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    todolist: {
        type: [String],  // Assuming the todolist is an array of strings
        default: []  // Adjust the default value based on your requirements
    },
    savedWeddings: {
        type: [savedweddingschema],  // Assuming the savedWeddings is an array of strings
        default: []  // Adjust the default value based on your requirements
    },
    appointments: {
        type: [appointmentsuserSchema],
        default: []
    }// Embed the appointment schema here
})

export default mongoose.model("Users", userSchema)
