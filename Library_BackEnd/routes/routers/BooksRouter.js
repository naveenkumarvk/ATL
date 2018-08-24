var express = require("express");
var router = express.Router();
var controller = require("../../controllers/BooksController")

//admin
router.post("/books", controller.create_books);
router.get("/books/:id", controller.search_books_for_update);
router.put("/books", controller.update_books);
router.delete("/books/:id", controller.delete_books);
router.get("/books", controller.get_all_books);
router.get("/counts", controller.getCounts);

router.get("/getAssignedBooksForAdmin", controller.getAssignedBooksForAdmin);

//user
router.get("/getBooksCountByUserId/:user_id", controller.getBooksCountByUserId)
router.get("/getBooksForAssign", controller.getBooksForAssign);
router.post("/updateBookToAssign", controller.updateBookToAssign);
router.get("/getAssignedBooks/:user_id", controller.getAssignedBooks);

router.post("/notification", controller.saveNotifcation);
router.get("/getNotification", controller.getNotification);
router.get("/checkSubscribeStatus/:user_id", controller.checkSubscribeStatus);

module.exports = router;