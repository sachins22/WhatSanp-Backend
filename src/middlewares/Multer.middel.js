import multer from "multer";
// import * from "../../public/temp"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

export const upload = multer({ 
    storage, 
})