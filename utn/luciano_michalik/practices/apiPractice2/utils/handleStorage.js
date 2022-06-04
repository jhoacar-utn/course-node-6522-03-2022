const multer = require("multer")

const storage = multer.diskStorage({ //Como minimo necesita el destination y el filename
    destination:function(req,file,cb){
        const pathStorage = `${__dirname}/../storage`//Le indico donde guardar los archivos
        cb(null,pathStorage)//Una callback que pasa como primer argumento un error si existiese y por otro lado el destination
    },
    filename:function(req,file,cb){
        const ext = file.originalname.split(".").pop() //pop() agarra el ultimoo valor de un array, que en este caso sería la extension
        const filename = `file-${Date.now()}.${ext}` //Con esta linea le cambio el nombre de archivo para que no se pisen los datos de dos archivos iguales
        cb(null,filename)//Una callback que pasa como primer argumento un error si existiese y por otro lado el filename
    }
})

const uploadMiddleware = multer({storage})

module.exports = uploadMiddleware