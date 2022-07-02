const express = require("express");
const router = express.Router();
const welcome = require("../../models/index");
const {handleWelcome} = require("../../controllers/welcome");
const path = require("path");


const clientFolder = path.resolve(__dirname + "/../../../../frontend_react/build");

router.use("/", express.static(clientFolder));

router.use("/*",(req,res)=>{
    return res.sendFile(clientFolder+"/index.html")
})


// const {authMiddleware} = require("../../middleware/authMiddleware");

// router.get("/", handleWelcome);  <-- con esto funcionaba antes

 
module.exports = router;