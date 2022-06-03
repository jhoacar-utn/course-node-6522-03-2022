/*configura todo els ervidor*
se agrega las rutas */
const express= require("express")
const app= express()
const webRouter=require("../routes/web")
app.use("/",webRouter)/*asi se usa la ruta*/

module.exports=app