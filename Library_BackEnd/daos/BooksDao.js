var books_schema = require("../models/Books")
var books_to_issue_schema = require("../models/BooksToIssue")
var logger = require("../config/logger");
var books_to_issue_schema = require("../models/BooksToIssue")
var async = require("async");

module.exports.create_books = function (book, callback) {

  var books = new books_schema(book)
  books.save(function (error, books) {
    if (error) {
      logger.error("===========sdsddsds===============>")
      callback(error);
    }
    else if (books === null || books === undefined || books.length === 0) {
      callback(books);
    }
    else {
      logger.error("saved============>", books._id)
      logger.error("saved============>", books._doc)
      var book_to_issue = []
      for (var i = 1; i <= book.NoOfCopies; i++) {
        book_to_issue.push(book)
      }

      async.forEachOf(book_to_issue, function (value, key, callback) {
        var books_to_issue = new books_to_issue_schema(value)
        books_to_issue.save(function (err, saved) {
          if (err) {
            console.log(err);
            callback(err);
          }
          callback();
        });
      }, function (err) {

        if (err) callback(err);
        callback(books);
      });
    }
  });
}


module.exports.update_books = async function (books, callback) {
  // logger.info("req : update books in the dao", books)
  books_schema.findOneAndUpdate({ _id: books._id }, { $set: books }, { upsert: true, new: true }, function (error, books) {
    if (error) {
      logger.error("res : cannot update books in the dao", error)
      callback(error);
    }
    else if (books === null || books === undefined || books.length === 0) {
      logger.debug(" updated books details obtained is either undefined or null in the dao ")
      callback(books);
    }
    else {
      logger.info("res :  updated books details obtained in the dao", books._doc)
      var ref_books = books;

      books_to_issue_schema.find({ isbn: books.isbn }, function (error, isbnBooks) {

        var diff = books.NoOfCopies - isbnBooks.length

        var object = {
          name: books.name,
          title: books.title,
          description: books.description,
          imageUrl: books.imageUrl,
          isbn: books.isbn,
          authors: books.authors,
          category: books.category,
          rating: books.rating
        }

        if (books.NoOfCopies > isbnBooks.length) {  // updated copies is more 
          var book_to_issue = []
          for (var i = 1; i <= diff; i++) {
            book_to_issue.push(object)
          }
          async.forEachOf(book_to_issue, function (value, key, callback) {
            var books_to_issue = new books_to_issue_schema(value)
            books_to_issue.save(function (err, saved) {
              if (err) {
                console.log(err);
                callback(err);
              }
              callback();
            });
          }, function (err) {
            if (err) callback(err);
            callback(books);
          });
        } else if (books.NoOfCopies < isbnBooks.length) {
          logger.error("hre---------->") // updated copies is less
          books_to_issue_schema.find({ isbn: books.isbn }).select('_id').sort({ _id: 1 }).limit(diff)
            .exec(function (err, docs) {
              var ids = docs.map(function (doc) { return doc._id; });
              books_to_issue_schema.remove({ _id: { $in: ids } }, function (err) {
                callback(books);
              });
            });
        } else {
          callback(books);
        }
      })
    }
  });
}





module.exports.search_books_for_update = function (books_id, callback) {
  logger.info("req : search books for update in the dao", books_id)
  books_schema.findById({ _id: books_id }, function (error, books) {
    if (error) {
      logger.error("res : cannot search books for update in the dao", error)
      callback(error);
    }
    else if (books === null || books === undefined || books.length === 0) {
      logger.debug(" search books for update details obtained is either undefined or null in the dao ")
      callback(books);
    }
    else {
      logger.info("res :  search books for update details obtained in the dao", books._doc)
      callback(books);
    }
  });
}


module.exports.getBooksCountByUserId = async function (user_id, callback) {
  logger.info("req : search books for update in the dao", user_id)

  books_to_issue_schema.find({ assignedTo: user_id }, function (err, results) {
    var user_book_count = results.length
    var books = {
      user_book_count: user_book_count
    }
    callback(books)
  });
}


module.exports.delete_books = function (books_id, callback) {
  logger.info("req : delete books in the dao", books_id)
  books_schema.findByIdAndRemove(books_id, function (error, books) {
    if (error) {
      logger.error("res : cannot delete books in the dao", error)
      callback(error);
    }
    else if (books === null || books === undefined || books.length === 0) {
      logger.debug(" deleted books is either undefined or null in the dao ")
      callback(books);
    }
    else {
      logger.info("res :  deleted books in the dao", books._doc)
      callback(books);
    }
  });
}

module.exports.get_all_books = function (callback) {
  logger.info("req : get all books in the dao")
  books_schema.find(function (error, books) {
    if (error) {
      logger.error("res : cannot get all books in the dao", error)
      callback(error);
    }
    else if (books === null || books === undefined || books.length === 0) {
      logger.debug(" get all books details obtained is either undefined or null in the dao ")
      callback(books);
    }
    else {
      logger.info("res :  get all books details obtained in the dao", books._doc)
      callback(books);
    }
  });
}

module.exports.getBooksForAssign = function (callback) {
  logger.info("req : get all books in the dao")
  books_to_issue_schema.find({ assigned: false }, function (error, books) {
    if (error) {
      logger.error("res : cannot get all books in the dao", error)
      callback(error);
    }
    else if (books === null || books === undefined || books.length === 0) {
      logger.debug(" get all books details obtained is either undefined or null in the dao ")
      callback(books);
    }
    else {
      logger.info("res :  get all books details obtained in the dao", books._doc)
      callback(books);
    }
  });
}

module.exports.getAssignedBooksForAdmin = function (callback) {
  logger.info("req : get all books in the dao")
  books_to_issue_schema.find({ assigned: true }).populate("assignedTo").exec(function (error, books)  {
    if (error) {
      logger.error("res : cannot get all books in the dao", error)
      callback(error);
    }
    else if (books === null || books === undefined || books.length === 0) {
      logger.debug(" get all books details obtained is either undefined or null in the dao ")
      callback(books);
    }
    else {
      logger.info("res :  get all books details obtained in the dao", books._doc)
      callback(books);
    }
  });
}


module.exports.getCounts = async function (callback) {
  logger.info("req : get all books in the dao")
  const number = await books_schema.count();
  console.log(number);
  callback(number)


}


module.exports.updateBookToAssign = function (book, callback) {
  logger.info("req : update book in the dao", book)
  books_to_issue_schema.findOneAndUpdate({ _id: book._id }, { $set: book }, { upsert: true, new: true }, function (error, book) {
    if (error) {
      logger.error("res : cannot update book in the dao", error)
      callback(error);
    }
    else if (book === null || book === undefined || book.length === 0) {
      logger.debug(" updated book details obtained is either undefined or null in the dao ")
      callback(book);
    }
    else {
      logger.info("res :  updated book details obtained in the dao", book._doc)
      callback(book);
    }
  });
}

module.exports.search_books_for_update = function (books_id, callback) {
  logger.info("req : search books for update in the dao", books_id)
  books_schema.findById({ _id: books_id }, function (error, books) {
    if (error) {
      logger.error("res : cannot search books for update in the dao", error)
      callback(error);
    }
    else if (books === null || books === undefined || books.length === 0) {
      logger.debug(" search books for update details obtained is either undefined or null in the dao ")
      callback(books);
    }
    else {
      logger.info("res :  search books for update details obtained in the dao", books._doc)
      callback(books);
    }
  });
}


module.exports.getAssignedBooks = function (user_id, callback) {
  // logger.info("req : search books for update in the dao", books_id)
  books_to_issue_schema.find({ assigned: true, assignedTo: user_id }, function (error, books) {
    if (error) {
      logger.error("res : cannot search books for update in the dao", error)
      callback(error);
    }
    else if (books === null || books === undefined ) {
      logger.debug(" search books for update details obtained is either undefined or null in the dao ")
      callback(books);
    }
    else {
      logger.info("res :  search books for update details obtained in the dao", books._doc)
      callback(books);
    }
  });
}