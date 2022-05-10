const express = require("express");
const router = express.Router();

const userRouter = require("@routes/userRouter");

const {getDocApi,get_spoty} = require("@controllers/apiController");


router.use("/user",userRouter);

router.get("/",getDocApi);

router.get("/spoty", get_spoty);

module.exports = router;
