require("dotenv").config();

const server = require("./boot/server");

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`Server on http://localhost:${port}`);
})