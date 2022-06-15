const express = require("express");
const router = express.Router();

// const path = require("path");

const {authMiddleware} = require("../../middleware/authMiddleware");

// route.get("/", handleWelcomeWeb);

router.get("/", (req,res)=>{
    res.send("Hello world")
})




module.exports = router;