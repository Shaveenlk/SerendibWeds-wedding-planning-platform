import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";

const app =express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("DB connected sucessfully");
}).catch((error) => {
    console.log(error);
})

app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
})



app.use("/api", router)