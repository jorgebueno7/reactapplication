const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './test/')
    }, 
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const filesUpload = multer({storage: storage}).single("file")

module.exports = filesUpload;