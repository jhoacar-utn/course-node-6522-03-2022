/*levanta le servidor*/
require("dotenv").config();
const server=require("./boot/server")

const initdatabase=require("./boot/database")

const PORT=process.env.PORT || 5000
server.listen(PORT,()=>{
    console.log("server on port "+ PORT)
 initdatabase()
})