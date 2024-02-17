import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
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
    }
})

export default mongoose.model("Users", userSchema)
