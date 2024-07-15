import mongoose from "mongoose";

const NameSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        unique: true
    },
    lastname:{
        type:String,
        unique: true
    }
})

const  Name = mongoose.model("Name", NameSchema);


export{
    Name
}