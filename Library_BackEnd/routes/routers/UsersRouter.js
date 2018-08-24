var express = require("express");
var router = express.Router();
//var request = require('request');
//var logger = require("../../config/logger");
var controller = require("../../controllers/UsersController")
router.post("/users",controller.create_users);
router.get("/users/:id",controller.search_users_for_update);




module.exports = router;