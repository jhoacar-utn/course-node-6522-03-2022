const express = require("express");
const { handleRegister, handleLogin, handleGetDashboard } = require("../../controllers/auth");

const router = express.Router();

router.post("/login", handleLogin);
router.post("/register", handleRegister);
router.post("/dashboard", handleGetDashboard);

module.exports = router;