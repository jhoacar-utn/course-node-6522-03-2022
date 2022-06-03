const express=require("express")

const router=express.Router()

router.get("/",(req,res)=>{
    console.log(req.query)
    return res.send ("Estoy en la api")

})

module.exports=router