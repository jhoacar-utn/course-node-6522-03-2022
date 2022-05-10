const app = require("./server");

const initConnectionDatabase = require("./config/connection")

const PORT = 5000


app.listen(PORT, ()=>{
    console.log("Application running in port:" + PORT);

    initConnectionDatabase();
})