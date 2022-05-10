const express=require('express')
const app=express()

const{connectToServer, getDb} =require("./config/mongo/conection")

const route_users=require("./routes/userRouter")

const PORT=3002
const handleRequest=(req,res,next)=>{
    
    const dbConnect = getDb();

    dbConnect
      .collection("welcome")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
       } else {
          res.json(result);
        }
      });

    //res.sendFile(__dirname+"/views/welcome.html")
}
app.get("/",handleRequest);

app.use('/user',route_users)
/*app.get("/user")=> mostrar todos los usuarios
app.post("/user")=> subir un usuario a la base de datoas*/


app.listen(PORT,()=>{
    console.log("Server on port"+PORT)
    
    connectToServer((error)=>{
     if(error){
         console.log(error)
         
     }else{
         console.log("Conection estabilished")}
    })
})