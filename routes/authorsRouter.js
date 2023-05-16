const express = require('express');
const authorsCtrl = require('../controllers/authorsCtrl');
const router = express.Router();

// AUTHORS ROUTES

router.route('/')
  .get(authorsCtrl.all_authors)
  .post(authorsCtrl.author_create_post)

router.route('/:_id')
  .get(authorsCtrl.author_detail)
  .put(authorsCtrl.author_update_put)
  .delete(authorsCtrl.author_delete)

  module.exports = router;