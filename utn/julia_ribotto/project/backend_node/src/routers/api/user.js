const express = require('express');
const { handleProfile } = require('../../controllers/profile');

const router = express.Router();

router.get("/profile", handleProfile);

module.exports = router;