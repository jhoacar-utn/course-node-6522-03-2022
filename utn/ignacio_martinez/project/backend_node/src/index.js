require("dotenv").config();

const server = require("./boot/server");
const initDB = require("./boot/database");

const PORT = process.env.PORT || 5050;

server.listen(PORT, ()=>{
    console.log("Server running on port "+ PORT);
    
    initDB();
});
