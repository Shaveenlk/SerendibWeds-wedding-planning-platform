import mongoose from "mongoose";


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
    todolist: {
        type: [String],  // Assuming the todolist is an array of strings
        default: []  // Adjust the default value based on your requirements
    }
})

export default mongoose.model("Users", userSchema)
