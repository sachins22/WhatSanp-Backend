import mongoose from "mongoose";

const mobileNumberSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true,
        unique: true
    }
});

const Mobile = mongoose.model("Mobile", mobileNumberSchema);

export default Mobile;
