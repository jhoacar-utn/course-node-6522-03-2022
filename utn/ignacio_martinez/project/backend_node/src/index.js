require("dotenv").config();

const server = require("./boot/server");
const initDB = require("./config/connection");

const PORT = process.env.PORT || 8000;

server.listen(PORT, ()=>{
    console.log("Server running on http://localhost:"+ PORT);
    
    initDB();
});
