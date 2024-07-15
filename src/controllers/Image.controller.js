import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/Cloudinay.js"; 
import { Image } from "../models/image.model.js";

const uploadImage = asyncHandler(async (req, res) => {
  let imageLocalPath;

  // Debugging: Log the entire request object
  console.log('Request received:', req);

  if (req.file) {
    imageLocalPath = req.file.path;
  }

  console.log('Image local path:', imageLocalPath);

  if (!imageLocalPath) {
    throw new ApiError(400, "Image file is required");
  }

  const image = await uploadOnCloudinary(imageLocalPath);
  console.log('Uploaded image:', image);

  if (!image) {
    throw new ApiError(500, "Failed to upload image to Cloudinary");
  }

  const setImage = await Image.create({
    image: image.secure_url,
  });

  if (!setImage) {
    throw new ApiError(500, "Something went wrong while registering the image");
  }

  return res.status(201).json(
    new ApiResponse(201, setImage, "Image registered successfully")
  );
});

export {
  uploadImage
};
