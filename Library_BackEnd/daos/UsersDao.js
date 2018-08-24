//var users_schema = require("../models/users")
var users_to_issue_schema = require("../models/BooksToIssue")
var logger = require("../config/logger");
var users_schema = require("../models/Users")
var async = require("async");

module.exports.create_users = function (user, callback) {

  var users_data = new users_schema(user)


  users_schema.findOne({ email: user.email }, function (error, users) {
    if (error) {
      logger.error("res : cannot get all users in the dao", error)
      callback(error);
    }
    else if (users === null || users === undefined || users.length === 0) {
      logger.debug(" get all users details obtained is either undefined or null in the dao ");
      users_data.save(function (error, users) {
        if (error) {
          logger.error("===========sdsddsds===============>")
          callback(error);
        }
        else if (users === null || users === undefined || users.length === 0) {
          callback(users);
        }
        else {
          logger.error("saved============>", users._id);
          callback(users);
        }
      });
    }
    else {
      logger.info("res :  get all users details obtained in the dao", users._doc)
      callback(users);
    }
  });
}


module.exports.update_users = async function (users, callback) {
  // logger.info("req : update users in the dao", users)
  users_schema.findOneAndUpdate({ _id: users._id }, { $set: users }, { upsert: true, new: true }, function (error, users) {
    if (error) {
      logger.error("res : cannot update users in the dao", error)
      callback(error);
    }
    else if (users === null || users === undefined || users.length === 0) {
      logger.debug(" updated users details obtained is either undefined or null in the dao ")
      callback(users);
    }
    else {
      logger.info("res :  updated users details obtained in the dao", users._doc)
      var ref_users = users;

      users_to_issue_schema.find({ isbn: users.isbn }, function (error, isbnusers) {

        var diff = users.NoOfCopies - isbnusers.length

        var object = {
          name: users.name,
          title: users.title,
          description: users.description,
          imageUrl: users.imageUrl,
          isbn: users.isbn,
          authors: users.authors,
          category: users.category,
          rating: users.rating
        }

        if (users.NoOfCopies > isbnusers.length) {  // updated copies is more 
          var user_to_issue = []
          for (var i = 1; i <= diff; i++) {
            user_to_issue.push(object)
          }
          async.forEachOf(user_to_issue, function (value, key, callback) {
            var users_to_issue = new users_to_issue_schema(value)
            users_to_issue.save(function (err, saved) {
              if (err) {
                console.log(err);
                callback(err);
              }
              callback();
            });
          }, function (err) {
            if (err) callback(err);
            callback(users);
          });
        } else if (users.NoOfCopies < isbnusers.length) { // updated copies is less
          users_to_issue_schema.find({ isbn: users.isbn }).select('_id').sort({ _id: 1 }).limit(1)
            .exec(function (err, docs) {
              var ids = docs.map(function (doc) { return doc._id; });
              users_to_issue_schema.remove({ _id: { $in: ids } }, function (err) {
                callback(users);
              });
            });
        } else {
          callback(users);
        }
      })
    }
  });
}


module.exports.update_users = async function (users, callback) {
  // logger.info("req : update users in the dao", users)
  users_schema.findOneAndUpdate({ _id: users._id }, { $set: users }, { upsert: true, new: true }, function (error, users) {
    if (error) {
      logger.error("res : cannot update users in the dao", error)
      callback(error);
    }
    else if (users === null || users === undefined || users.length === 0) {
      logger.debug(" updated users details obtained is either undefined or null in the dao ")
      callback(users);
    }
    else {
      logger.info("res :  updated users details obtained in the dao", users._doc)
      var ref_users = users;

      users_to_issue_schema.find({ isbn: users.isbn }, function (error, isbnusers) {

        var diff = users.NoOfCopies - isbnusers.length

        var object = {
          name: users.name,
          title: users.title,
          description: users.description,
          imageUrl: users.imageUrl,
          isbn: users.isbn,
          authors: users.authors,
          category: users.category,
          rating: users.rating
        }

        if (users.NoOfCopies > isbnusers.length) {  // updated copies is more 
          var user_to_issue = []
          for (var i = 1; i <= diff; i++) {
            user_to_issue.push(object)
          }
          async.forEachOf(user_to_issue, function (value, key, callback) {
            var users_to_issue = new users_to_issue_schema(value)
            users_to_issue.save(function (err, saved) {
              if (err) {
                console.log(err);
                callback(err);
              }
              callback();
            });
          }, function (err) {
            if (err) callback(err);
            callback(users);
          });
        } else if (users.NoOfCopies < isbnusers.length) { // updated copies is less
          users_to_issue_schema.find({ isbn: users.isbn }).select('_id').sort({ _id: 1 }).limit(1)
            .exec(function (err, docs) {
              var ids = docs.map(function (doc) { return doc._id; });
              users_to_issue_schema.remove({ _id: { $in: ids } }, function (err) {
                callback(users);
              });
            });
        } else {
          callback(users);
        }
      })
    }
  });
}


module.exports.search_users_for_update = function (users_id, callback) {
  logger.info("req : search users for update in the dao", users_id)
  users_schema.findById({ _id: users_id }, function (error, users) {
    if (error) {
      logger.error("res : cannot search users for update in the dao", error)
      callback(error);
    }
    else if (users === null || users === undefined || users.length === 0) {
      logger.debug(" search users for update details obtained is either undefined or null in the dao ")
      callback(users);
    }
    else {
      logger.info("res :  search users for update details obtained in the dao", users._doc)
      callback(users);
    }
  });
}
module.exports.delete_users = function (users_id, callback) {
  logger.info("req : delete users in the dao", users_id)
  users_schema.findByIdAndRemove(users_id, function (error, users) {
    if (error) {
      logger.error("res : cannot delete users in the dao", error)
      callback(error);
    }
    else if (users === null || users === undefined || users.length === 0) {
      logger.debug(" deleted users is either undefined or null in the dao ")
      callback(users);
    }
    else {
      logger.info("res :  deleted users in the dao", users._doc)
      callback(users);
    }
  });
}
module.exports.get_all_users = function (callback) {
  logger.info("req : get all users in the dao")
  users_schema.find(function (error, users) {
    if (error) {
      logger.error("res : cannot get all users in the dao", error)
      callback(error);
    }
    else if (users === null || users === undefined || users.length === 0) {
      logger.debug(" get all users details obtained is either undefined or null in the dao ")
      callback(users);
    }
    else {
      logger.info("res :  get all users details obtained in the dao", users._doc)
      callback(users);
    }
  });
}

module.exports.getusersForAssign = function (callback) {
  logger.info("req : get all users in the dao")
  users_to_issue_schema.find({ assigned: false }, function (error, users) {
    if (error) {
      logger.error("res : cannot get all users in the dao", error)
      callback(error);
    }
    else if (users === null || users === undefined || users.length === 0) {
      logger.debug(" get all users details obtained is either undefined or null in the dao ")
      callback(users);
    }
    else {
      logger.info("res :  get all users details obtained in the dao", users._doc)
      callback(users);
    }
  });
}


module.exports.getCounts = async function (callback) {
  logger.info("req : get all users in the dao")
  const number = await users_schema.count();
  console.log(number);
  callback(number)


}