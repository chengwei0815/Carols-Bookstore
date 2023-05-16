const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminCtrl');

// ADMIN ROUTES
router.route('/')
  .get(adminCtrl.admin)

router.route('/admin-books')
  .get(adminCtrl.admin_books)

router.route('/create-book')
  .get(adminCtrl.create_book)

router.route('/admin-authors')
  .get(adminCtrl.admin_authors)

router.route('/create-author')
  .get(adminCtrl.create_author)

router.route('/:_id/edit-book')
  .get(adminCtrl.book_update_get)

router.route('/:_id/edit-author')
  .get(adminCtrl.author_update_get)


module.exports = router;