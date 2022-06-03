const server=require("./boot/server")

const port=process.env.PORT || 4005

server.listen(port,()=>{
    console.log(`Server on http://localhost:${(port)}`)
})