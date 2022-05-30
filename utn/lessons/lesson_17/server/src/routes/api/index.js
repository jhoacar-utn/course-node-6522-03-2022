const express = require("express");

const router = express.Router();


router.get("/",(req,res)=>{
    return res.send("Estoy en la api");
})

module.exports = router;