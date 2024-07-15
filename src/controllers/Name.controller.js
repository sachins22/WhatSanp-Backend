import { Name } from "../models/Name.modal.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


const AddName = asyncHandler(async(req,res)=>{

    const {firstname, lastname} = req.body;
console.log({firstname,lastname})


    if (!firstname && !lastname) {
        throw new ApiError(400, " name not found ")
    }
    
    const bothName = await Name.create({
        firstname,
        lastname
    });

    return res.status(200).json(new ApiResponse(200, "Name  registered",
        bothName));
})

const getName = asyncHandler(async(req, res)=>{


    const bothName = await Name.find({})


    if (!bothName.length) {
        throw new ApiError(404, "No Name found");
    }


        return res.status(200).json(new ApiResponse(200, "Name found", bothName));
})



export {
    AddName,
    getName
}
