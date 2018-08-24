var dao = require("../daos/UsersDao")
var logger = require("../config/logger")
module.exports.create_users = function (users, callback) {
  logger.info("req : create users in the service", users)
  dao.create_users(users, function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : created users is either empty or null in the service ");
      callback(users);
    }
    else if (users._doc || users.length > 0) {
      logger.info("res : created users in the service", users._id)
      //var id = users._id;
    //  users.id = id;
      logger.error("users", users._doc)
      callback(users);
    }
    else {
      logger.error("cannot created users in the service")
      callback(users);

    }

  });
}
module.exports.update_users = function (users, callback) {
  //logger.info("req : update users in the service", users)
  dao.update_users(users, function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : updated users is either empty or null in the service ");
      callback(users);

    }
    else if (users._doc || users.length > 0) {
      logger.info("res : updated users in the service", users._doc)
      var id = users._id;
      users.id = id;

      callback(users);
    }
    else {
      logger.error("cannot updated users in the service")
      callback(users);

    }

  });
}
module.exports.search_users_for_update = function (users_id, callback) {
  logger.info("req : search users for update in the service", users_id)
  dao.search_users_for_update(users_id, function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : search users for update obtained is either empty or null in the service ");
      callback(users);

    }
    else if (users._doc || users.length > 0) {
      logger.info("res : search users for update obtained in the service", users._doc)
      var id = users._id;
      users.id = id;
      callback(users)

    }
    else {
      logger.error("cannot search users for update obtained in the service")
      callback(users);

    }
  });
}
module.exports.delete_users = function (users_id, callback) {
  logger.info("req : delete users in the service", users_id)
  dao.delete_users(users_id, function (users) {
    if (users == '' || users == undefined || users == null) {
      logger.debug(" res : deleted users is either empty or null in the service ");
      callback(users);

    }
    else if (users._doc || users.length > 0) {
      logger.info("res : deleted users in the service", users._doc)

      callback(users);
    }
    else {
      logger.error("cannot deleted users in the service")
      callback(users);

    }

  });
}
module.exports.get_all_users = function (callback) {
  logger.info("req : get all users values in the service")
  dao.get_all_users(function (list_of_users) {
    if (list_of_users == '' || list_of_users == undefined || list_of_users == null) {
      logger.debug(" res : get all users values are obtained is either empty or null in the service ");
      callback(list_of_users);

    }
    else if (list_of_users._doc || list_of_users.length > 0) {
      logger.info("res : get all users values are obtained in the service", list_of_users._doc)
      var count = 0;
      for (var i = 0; i < list_of_users.length; i++) {
        var id = list_of_users[i]._id;
        list_of_users[i].id = id;
        count++;
      }
      if (list_of_users.length === count)
        callback(list_of_users)

    }
    else {
      logger.error("cannot get all users values are obtained in the service")
      callback(list_of_users);

    }
  });
}


module.exports.getusersForAssign = function (callback) {
  logger.info("req : get all users values in the service")
  dao.getusersForAssign(function (list_of_users) {
    if (list_of_users == '' || list_of_users == undefined || list_of_users == null) {
      logger.debug(" res : get all users values are obtained is either empty or null in the service ");
      callback(list_of_users);

    }
    else if (list_of_users._doc || list_of_users.length > 0) {
      logger.info("res : get all users values are obtained in the service", list_of_users._doc)
      var count = 0;
      for (var i = 0; i < list_of_users.length; i++) {
        var id = list_of_users[i]._id;
        list_of_users[i].id = id;
        count++;
      }
      if (list_of_users.length === count)
        callback(list_of_users)

    }
    else {
      logger.error("cannot get all users values are obtained in the service")
      callback(list_of_users);

    }
  });
}



module.exports.getCounts = function (callback) {
  logger.info("req : get all users values in the service")
  dao.getCounts(function (list_of_users) {
    if (list_of_users == '' || list_of_users == undefined || list_of_users == null) {
      logger.debug(" res : get all users values are obtained is either empty or null in the service ");
      callback(list_of_users);

    }
    else if (list_of_users) {
      logger.info("res : get all users values are obtained in the service", list_of_users._doc)
      callback(list_of_users)
    }
    else {
      logger.error("cannot get all users values are obtained in the service")
      callback(list_of_users);

    }
  });
}