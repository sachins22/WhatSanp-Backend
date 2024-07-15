import Mobile from "../models/MobileNumber.model.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


const registerNumber = asyncHandler(async (req, res) => {
    const { number } = req.body;
    console.log(number);

    if (!number) {
        throw new ApiError(400, "Invalid mobile number");
    }

    const existingNumber = await Mobile.findOne({ number });

    if (existingNumber) {
        throw new ApiError(400, "Mobile number already registered");
    }

    const mobileNumber = await Mobile.create({ number });

    return res.status(200).json(new ApiResponse(200, "mobile number registered", mobileNumber));
});




const getMobile = asyncHandler(async(req, res)=>{
    const mobileNumber = await Mobile.find({})

if(!mobileNumber){
    throw new ApiError(404, "No mobile number found")
}
return res.status(200).json(new ApiResponse(200, "mobile number found", mobileNumber));
})

export {
    registerNumber,
    getMobile
};
