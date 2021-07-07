const express = require("express")
const accountsRouter = require("../accounts/accountsRouter")
const server = express()

server.use(express.json());
server.use("/accounts", accountsRouter)

server.get("/", (req, res) => {
  res.status(200).json({
      message: "Running"
   });
});
module.exports = server;