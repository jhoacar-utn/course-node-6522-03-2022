
const express=require("express")
const app=express()

const webRouter=require("../route/web/index")
const apiRouter=require("../route/api/index")

app.use(express.json())//
app.use(express.urlencoded({extended:true}))

app.use("/api/v1",apiRouter)
app.use("/",webRouter)

module.exports=app
