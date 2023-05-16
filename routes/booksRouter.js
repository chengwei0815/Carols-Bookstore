const express = require('express');
const booksCtrl = require('../controllers/booksCtrl');
const router = express.Router();

// BOOKS ROUTES
router.route('/')
  .get(booksCtrl.all_books)
  .post(booksCtrl.book_create_post)

router.route('/:_id')
  .get(booksCtrl.book_detail)
  .put(booksCtrl.book_update_put)
  .delete(booksCtrl.book_delete)

module.exports = router;