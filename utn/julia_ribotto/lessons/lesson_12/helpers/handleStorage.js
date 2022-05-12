const multer = require('multer');
const path = require('path');


const handleDestination = function (req,file,cb) {
    const pathStorage = path.resolve(__dirname + '/../storage')
    
    cb(null, pathStorage)
};

const handleFileName = function (req,file,cb) {
    //devuelve el nombre del archivo junto con la extension
    const filename = file.originalname;

    //extraigo la extensión del archivo
    const extension = filename.split(".").pop();

    const newFileName = "filename-" + Date.now() + '.' + extension;

    req.avatarFile = "/user/" + newFileName;

    cb(null, newFileName);
}

const storage = multer.diskStorage({
    destination: handleDestination,
    filename: handleFileName
});

module.exports = storage