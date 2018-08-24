var service = require("../services/UsersService");
var logger = require("../config/logger")

module.exports.create_users = function (req, res) {
  var users = req.body;

  logger.info("req : create users in the controller", users)
  service.create_users(users, function (users) {
    logger.error("controller=============================>",users)
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : created users is either empty or null in the controller ");
      res.status(204);
      res.json(users);
    }
    else if (users._doc || users.length > 0) {
     logger.info("res : created users in the controller", users._doc)
      res.status(201);
      res.json(users);
    }
    else {
      logger.error("res : cannot created users in controller");
      res.status(500)
      res.json(users);
    }

  });
}
module.exports.update_users = function (req, res) {
  var users = req.body;
  //logger.info("req : Update users in the controller", users)
  service.update_users(users, function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : usersdetail updated  is either empty or null in the controller ");
      res.status(204);
      res.json(users);
    }
    else if (users._doc || users.length > 0) {
      logger.info("res : usersdetail updated  in the controller", users._doc)
      res.status(200);
      res.json(users);
    }
    else {
      logger.error("res : cannot usersdetail updated  in controller");
      res.status(500)
      res.json(users);
    }

  });
}
module.exports.search_users_for_update = function (req, res) {
  var users_id = req.params.id;
  logger.info("req : search users for update in the controller", users_id)
  service.search_users_for_update(users_id, function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : search users for update details is obtained is either empty or null in the controller ");
      res.status(304);
      res.json(users);
    }
    else if (users._doc || users.length > 0) {
      logger.info("res : search users for update details is obtained in the controller", users._doc)
      res.status(202);
      res.json(users);
    }
    else {
      logger.error("res : cannot search users for update details is obtained in controller");
      res.status(500)
      res.json(users);
    }

  });
}
module.exports.delete_users = function (req, res) {
  var users_id = req.params.id;
  logger.info("req : deleteusers in the controller", users_id)
  service.delete_users(users_id, function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : users deleted is either empty or null in the controller ");
      res.status(204);
      res.json(users);
    }
    else if (users._doc || users.length > 0) {
      logger.info("res : users deleted in the controller", users._doc)
      res.status(204);
      res.json(users);
    }
    else {
      logger.error("res : cannot users deleted in controller");
      res.status(500)
      res.json(users);
    }

  });
}

module.exports.get_all_users = function (req, res) {
  logger.info("req : get all users in the controller")
  service.get_all_users(function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : get all usersdetails  is either empty or null in the controller ");
      res.status(204);
      res.json(users);
    }
    else if (users._doc || users.length > 0) {
      logger.info("res : get all usersdetails  in the controller", users._doc)
      res.status(200);
      res.json(users);
    }
    else {
      logger.error("res : cannot get all usersdetails  in controller");
      res.status(500)
      res.json(users);
    }

  });
}

module.exports.getusersForAssign = function (req, res) {
  logger.info("req : get all users in the controller")
  service.getusersForAssign(function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : get all usersdetails  is either empty or null in the controller ");
      res.status(204);
      res.json(users);
    }
    else if (users._doc || users.length > 0) {
      logger.info("res : get all usersdetails  in the controller", users._doc)
      res.status(200);
      res.json(users);
    }
    else {
      logger.error("res : cannot get all usersdetails  in controller");
      res.status(500)
      res.json(users);
    }

  });
}


module.exports.getCounts = function (req, res) {
  logger.info("req : get all users in the controller")
  service.getCounts(function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : get all usersdetails  is either empty or null in the controller ");
      res.status(204);
      var count = {book:0}
      res.json({count});
    }
    else if (users) {
      var book = users
      logger.info("res : get all usersdetails  in the controller", users._doc)
      res.status(200);
      res.json({book});
    }
    else {
      logger.error("res : cannot get all usersdetails  in controller");
      res.status(500)
      res.json(users);
    }

  });
}