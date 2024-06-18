const multer = require('multer');
const path  = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
    storage: storage,
    // limits: { fileSize: 1000000 }, // 1MB file size limit
    // fileFilter: (req, file, cb) => {
    //     const fileTypes = /jpeg|jpg|png/;
    //     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    //     const mimetype = fileTypes.test(file.mimetype);

    //     if (extname && mimetype) {
    //         return cb(null, true);
    //     } else {
    //         cb('Error: Images Only!');
    //     }
    // }
});
module.exports = upload;