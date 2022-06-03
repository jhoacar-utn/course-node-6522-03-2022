const express=require("express")
const path=require("path")
const router=express.Router()
const clientFolder=__dirname + "/../../../../client/build"

router.use("/",express.static(clientFolder))//archivos staticos 
router.use("/*",(req,res)=>{
    return res.send(clientFolder+"/index.html")

})

module.exports=router