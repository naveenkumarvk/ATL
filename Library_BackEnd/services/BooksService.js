var dao = require("../daos/BooksDao")
var logger = require("../config/logger")
module.exports.create_books = function (books, callback) {
 // logger.info("req : create books in the service", books)
  dao.create_books(books, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : created books is either empty or null in the service ");
      callback(books);
    }
    else if (books._doc || books.length > 0) {
      logger.info("res : created books in the service", books._id)
      //var id = books._id;
    //  books.id = id;
      logger.error("books", books._doc)
      callback(books);
    }
    else {
      logger.error("cannot created books in the service")
      callback(books);

    }

  });
}

module.exports.update_books = function (books, callback) {
  //logger.info("req : update books in the service", books)
  dao.update_books(books, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : updated books is either empty or null in the service ");
      callback(books);

    }
    else if (books._doc || books.length > 0) {
      logger.info("res : updated books in the service", books._doc)
      var id = books._id;
      books.id = id;

      callback(books);
    }
    else {
      logger.error("cannot updated books in the service")
      callback(books);

    }

  });
}


module.exports.updateBookToAssign = function (books, callback) {
  //logger.info("req : update books in the service", books)
  dao.updateBookToAssign(books, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : updated books is either empty or null in the service ");
      callback(books);

    }
    else if (books._doc || books.length > 0) {
      logger.info("res : updated books in the service", books._doc)
      var id = books._id;
      books.id = id;

      callback(books);
    }
    else {
      logger.error("cannot updated books in the service")
      callback(books);

    }

  });
}


module.exports.search_books_for_update = function (books_id, callback) {
  logger.info("req : search books for update in the service", books_id)
  dao.search_books_for_update(books_id, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : search books for update obtained is either empty or null in the service ");
      callback(books);

    }
    else if (books._doc || books.length > 0) {
      logger.info("res : search books for update obtained in the service", books._doc)
      var id = books._id;
      books.id = id;
      callback(books)

    }
    else {
      logger.error("cannot search books for update obtained in the service")
      callback(books);

    }
  });
}

module.exports.getBooksCountByUserId = function (books_id, callback) {
  logger.info("req : search books for update in the service", books_id)
  dao.getBooksCountByUserId(books_id, function (books) {
    callback(books)
    // if (books == '' || books == undefined || books == null) {
    //   logger.debug(" res : search books for update obtained is either empty or null in the service ");
    //   callback(books);

    // }
    // else if (books._doc || books.length > 0) {
    //   logger.info("res : search books for update obtained in the service", books._doc)
    //   callback(books)
    // }
    // else {
    //   logger.error("cannot search books for update obtained in the service",books)
    //   callback(books);

    // }
  });
}


module.exports.delete_books = function (books_id, callback) {
  logger.info("req : delete books in the service", books_id)
  dao.delete_books(books_id, function (books) {
    if (books == '' || books == undefined || books == null) {
      logger.debug(" res : deleted books is either empty or null in the service ");
      callback(books);

    }
    else if (books._doc || books.length > 0) {
      logger.info("res : deleted books in the service", books._doc)

      callback(books);
    }
    else {
      logger.error("cannot deleted books in the service")
      callback(books);

    }

  });
}
module.exports.get_all_books = function (callback) {
  logger.info("req : get all books values in the service")
  dao.get_all_books(function (list_of_books) {
    if (list_of_books == '' || list_of_books == undefined || list_of_books == null) {
      logger.debug(" res : get all books values are obtained is either empty or null in the service ");
      callback(list_of_books);

    }
    else if (list_of_books._doc || list_of_books.length > 0) {
      logger.info("res : get all books values are obtained in the service", list_of_books._doc)
      var count = 0;
      for (var i = 0; i < list_of_books.length; i++) {
        var id = list_of_books[i]._id;
        list_of_books[i].id = id;
        count++;
      }
      if (list_of_books.length === count)
        callback(list_of_books)

    }
    else {
      logger.error("cannot get all books values are obtained in the service")
      callback(list_of_books);

    }
  });
}


module.exports.getBooksForAssign = function (callback) {
  logger.info("req : get all books values in the service")
  dao.getBooksForAssign(function (list_of_books) {
    if (list_of_books == '' || list_of_books == undefined || list_of_books == null) {
      logger.debug(" res : get all books values are obtained is either empty or null in the service ");
      callback(list_of_books);

    }
    else if (list_of_books._doc || list_of_books.length > 0) {
      logger.info("res : get all books values are obtained in the service", list_of_books._doc)
      var count = 0;
      for (var i = 0; i < list_of_books.length; i++) {
        var id = list_of_books[i]._id;
        list_of_books[i].id = id;
        count++;
      }
      if (list_of_books.length === count)
        callback(list_of_books)

    }
    else {
      logger.error("cannot get all books values are obtained in the service")
      callback(list_of_books);
    }
  });
}


module.exports.getAssignedBooksForAdmin = function (callback) {
  logger.info("req : get all books values in the service")
  dao.getAssignedBooksForAdmin(function (list_of_books) {
    if (list_of_books == '' || list_of_books == undefined || list_of_books == null) {
      logger.debug(" res : get all books values are obtained is either empty or null in the service ");
      callback(list_of_books);

    }
    else if (list_of_books._doc || list_of_books.length > 0) {
      logger.info("res : get all books values are obtained in the service", list_of_books._doc)
      var count = 0;
      for (var i = 0; i < list_of_books.length; i++) {
        var id = list_of_books[i]._id;
        list_of_books[i].id = id;
        count++;
      }
      if (list_of_books.length === count)
        callback(list_of_books)

    }
    else {
      logger.error("cannot get all books values are obtained in the service")
      callback(list_of_books);
    }
  });
}

module.exports.getCounts = function (callback) {
  logger.info("req : get all books values in the service")
  dao.getCounts(function (list_of_books) {
    if (list_of_books == '' || list_of_books == undefined || list_of_books == null) {
      logger.debug(" res : get all books values are obtained is either empty or null in the service ");
      callback(list_of_books);

    }
    else if (list_of_books) {
      logger.info("res : get all books values are obtained in the service", list_of_books._doc)
      callback(list_of_books)
    }
    else {
      logger.error("cannot get all books values are obtained in the service")
      callback(list_of_books);

    }
  });
}

module.exports.getAssignedBooks = function (books_id, callback) {
  logger.info("req : search books for update in the service", books_id)
  dao.getAssignedBooks(books_id, function (books) {
    if (books == '' || books == undefined || books == null ) {
      logger.debug(" res : search books for update obtained is either empty or null in the service ");
      callback(books);

    }
    else if (books._doc || books.length >= 0) {
      logger.info("res : search books for update obtained in the service", books._doc)
      var id = books._id;
      books.id = id;
      callback(books)

    }
    else {
      logger.error("cannot search books for update obtained in the service")
      callback(books);

    }
  });
}