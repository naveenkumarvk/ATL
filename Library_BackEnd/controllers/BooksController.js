var service = require("../services/BooksService");
var logger = require("../config/logger")
const webpush = require('web-push');
var books_schema = require("../models/Books");

var Notification = require("../models/Notification")

module.exports.create_books = function (req, res) {
  var books = req.body;
  //logger.info("req : create books in the controller", books)
  service.create_books(books, function (books) {
    logger.error("controller=============================>", books)
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : created books is either empty or null in the controller ");
      res.status(204);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : created books in the controller", books._doc)
      res.status(201);
      res.json(books);
    }
    else {
      logger.error("res : cannot created books in controller");
      res.status(500)
      res.json(books);
    }

  });
}
module.exports.update_books = function (req, res) {
  var books = req.body;
  //logger.info("req : Update books in the controller", books)
  service.update_books(books, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : booksdetail updated  is either empty or null in the controller ");
      res.status(204);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : booksdetail updated  in the controller", books._doc)
      res.status(200);
      res.json(books);
    }
    else {
      logger.error("res : cannot booksdetail updated  in controller");
      res.status(500)
      res.json(books);
    }

  });
}


module.exports.updateBookToAssign = function (req, res) {
  var books = req.body;
  //logger.info("req : Update books in the controller", books)
  service.updateBookToAssign(books, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : booksdetail updated  is either empty or null in the controller ");
      res.status(204);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : booksdetail updated  in the controller", books._doc)
      res.status(200);
      res.json(books);
    }
    else {
      logger.error("res : cannot booksdetail updated  in controller");
      res.status(500)
      res.json(books);
    }
  });
}

module.exports.search_books_for_update = function (req, res) {
  var books_id = req.params.id;
  logger.info("req : search books for update in the controller", books_id)
  service.search_books_for_update(books_id, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : search books for update details is obtained is either empty or null in the controller ");
      res.status(304);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : search books for update details is obtained in the controller", books._doc)
      res.status(202);
      res.json(books);
    }
    else {
      logger.error("res : cannot search books for update details is obtained in controller");
      res.status(500)
      res.json(books);
    }
  });
}


module.exports.getBooksCountByUserId = function (req, res) {
  var books_id = req.params.user_id;
  logger.info("req : search books for update in the controller", books_id)
  service.getBooksCountByUserId(books_id, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : search books for update details is obtained is either empty or null in the controller ");
      res.status(304);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : search books for update details is obtained in the controller", books._doc)
      res.status(202);
      res.json(books);
    }
    else {
      logger.error("res : cannot search books for update details is obtained in controller");
      res.status(200)
      res.json(books);
    }
  });
}


module.exports.delete_books = function (req, res) {
  var books_id = req.params.id;
  logger.info("req : deletebooks in the controller", books_id)
  service.delete_books(books_id, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : books deleted is either empty or null in the controller ");
      res.status(204);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : books deleted in the controller", books._doc)
      res.status(204);
      res.json(books);
    }
    else {
      logger.error("res : cannot books deleted in controller");
      res.status(500)
      res.json(books);
    }

  });
}

module.exports.get_all_books = function (req, res) {
  logger.info("req : get all books in the controller")
  service.get_all_books(function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : get all booksdetails  is either empty or null in the controller ");
      res.status(204);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : get all booksdetails  in the controller", books._doc)
      res.status(200);
      res.json(books);
    }
    else {
      logger.error("res : cannot get all booksdetails  in controller");
      res.status(500)
      res.json(books);
    }

  });
}

module.exports.getBooksForAssign = function (req, res) {
  logger.info("req : get all books in the controller")
  service.getBooksForAssign(function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : get all booksdetails  is either empty or null in the controller ");
      res.status(204);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : get all booksdetails  in the controller", books._doc)
      res.status(200);
      res.json(books);
    }
    else {
      logger.error("res : cannot get all booksdetails  in controller");
      res.status(500)
      res.json(books);
    }

  });
}


module.exports.getAssignedBooksForAdmin = function (req, res) {
  logger.info("req : get all books in the controller")
  service.getAssignedBooksForAdmin(function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : get all booksdetails  is either empty or null in the controller ");
      res.status(204);
      res.json(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : get all booksdetails  in the controller", books._doc)
      res.status(200);
      res.json(books);
    }
    else {
      logger.error("res : cannot get all booksdetails  in controller");
      res.status(500)
      res.json(books);
    }
  });
}


module.exports.getCounts = function (req, res) {
  logger.info("req : get all books in the controller")
  service.getCounts(function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : get all booksdetails  is either empty or null in the controller ");
      res.status(204);
      var count = { book: 0 }
      res.json({ count });
    }
    else if (books) {
      var book = books
      logger.info("res : get all booksdetails  in the controller", books._doc)
      res.status(200);
      res.json({ book });
    }
    else {
      logger.error("res : cannot get all booksdetails  in controller");
      res.status(500)
      res.json(books);
    }
  });
}





module.exports.getAssignedBooks = function (req, res) {
  var books_id = req.params.user_id;
  logger.info("req : search books for update in the controller", books_id)
  service.getAssignedBooks(books_id, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : search books for update details is obtained is either empty or null in the controller ");
      res.status(200);
      res.json(books);
    }
    else if (books._doc || books.length >= 0) {
      logger.info("res : search books for update details is obtained in the controller", books._doc)
      res.status(202);
      res.json(books);
    }
    else {
      logger.error("res : cannot search books for update details is obtained in controller");
      res.status(500)
      res.json(books);
    }
  });
}


module.exports.saveNotifcation = function (req, res) {
  var notification = req.body;
  logger.info("notification", notification)
  //logger.info("req : Update books in the controller", books)
  var notification_object = new Notification(notification)

  notification_object.save(function (error, savedNotification) {
    if (error) {
      logger.error("===========sdsddsds===============>")
      res.status(500)
      res.json(error);
    } else {
      res.status(200)
      res.json(savedNotification);
    }
  });
}


module.exports.getNotification = function (req, res) {
  //var notification = req.body;

  var today = new Date();
  today.setHours(0, 0, 0, 0)
  //logger.error("res : today books", today_books.length)
  books_schema.find({ updated_date: { "$gte": today } }, function (error, today_books) {
    if (error) {
      callback(error);
    } else {

      if (today_books.length > 0) {
        today_books.forEach((element, index) => {
          const notificationPayload = {
            notification: {
              title: element.name,
              body: element.description,
              icon: 'assets/icons/icon-512x512.png'
            }
          };
          Notification.find(function (error, notification_object) {
            if (error) {
              logger.error("res : cannot get all books in the dao", error)
              callback(error);
            } else {
              const promises = [];
              notification_object.forEach(subscription => {
                promises.push(webpush.sendNotification(subscription.name, JSON.stringify(notificationPayload)));
              });
              Promise.all(promises).then(() => res.sendStatus(200));
            }
          });
        });
      }
      else{
        res.status(200)
      }
    }
  });
}


module.exports.saveNotifcation = function (req, res) {
  var notification = req.body;
  logger.info("notification", notification)
  //logger.info("req : Update books in the controller", books)
  var notification_object = new Notification(notification)

  notification_object.save(function (error, savedNotification) {
    if (error) {
      logger.error("===========sdsddsds===============>")
      res.status(500)
      res.json(error);
    } else {
      res.status(200)
      res.json(savedNotification);
    }
  });
}


module.exports.checkSubscribeStatus = function (req, res) {
  var user_id = req.params.user_id;
  logger.error("res : user_id", user_id)
  Notification.find({ user_id: user_id }, function (error, notification_object) {
    if (error) {

      callback(error);
    } else {
      logger.error("res : cannot get all books in the dao", notification_object)
      res.status(200)
      res.json(notification_object);
    }
  });
}