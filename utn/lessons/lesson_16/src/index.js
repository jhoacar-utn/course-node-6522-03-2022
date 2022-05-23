require("dotenv").config();
const server = require("./bootstrap/server");
const initDatabase = require("./bootstrap/database");

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)

    initDatabase();
});