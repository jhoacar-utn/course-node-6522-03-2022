const express = require("express");
const path = require("path");
const router = express.Router();


const clientFolder = path.resolve(__dirname + "/../../../../client/build");

router.use("/", express.static(clientFolder));


module.exports = router;