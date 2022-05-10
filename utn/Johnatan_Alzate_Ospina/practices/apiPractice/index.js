require("dotenv").config()

const express=require("express")
const app=express()

const PORT=process.env.PORT||5000
const routes=require("./routes")

app.use(express.urlencoded({ extended: true }));//todos los parametrso que viajan por get
app.use(express.json());//todo lo que viaja por post
app.use("",routes)


app.listen(PORT,()=>{
   console.log("Server run in port " + PORT)
})