require("dotenv").config()

const express = require("express");
const cookieSession = require("cookie-session");
const app = express();
const { nameCookie, keyCookie } = require("./config/cookies");

app.use(express.urlencoder({ extended: true}));