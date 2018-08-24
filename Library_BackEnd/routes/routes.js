var express = require("express");
var api = express.Router();
var routers = require("./routers")
api.use("/books", routers.BooksRouter);
api.use("/users", routers.UsersRouter);

module.exports = api;