import express from 'express';
import { uploadImage } from '../controllers/Image.controller.js';
import { upload } from '../middlewares/Multer.middel.js'; // Assuming the file is named multerConfig.js

const router = express.Router();
router.get("/test",(req , res)=> {
    console.log("working fine")
});
router.post('/upload', upload.single('image'), uploadImage);
// router.post('/upload', upload.single("image"), (req , res) =>{
//     console.log("working fine 2")
// });

export default router;
