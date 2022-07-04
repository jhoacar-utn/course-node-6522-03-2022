const express = require("express");
const authMiddleware = require("../../middleware/authMiddleware");
const { handleGetDashboard } = require("../../controllers/user");


const router = express.Router();


router.get("/profile/:token", handleGetDashboard);

module.exports = router;