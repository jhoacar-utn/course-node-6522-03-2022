const express = require("express")
require('dotenv').config()

const PORT = parseInt(process.env.PORT);
const app = express();
const routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("", routes)

app.listen(PORT, () => {
    console.log("escuchando")
})