import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true

    }
})

const Image = mongoose.model("Image",imgSchema)

export{
    Image
}