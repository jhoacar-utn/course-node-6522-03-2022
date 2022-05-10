require('dotenv').config()

const express=require("express")
const cookieSession=require('cookie-session')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cookieSession({
    name:'session',
    keys:['key1','key2']
}))

app.set('view engine','ejs')

const {connectToServer}=require("./config/mongo/connection")
const apiRoute=require("./routes/api")
const webRoute=require("./routes/web")

const PORT=5000
app.listen(PORT,()=>{
    console.log("server on port"+PORT)
})