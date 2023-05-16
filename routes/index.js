const express = require('express');
const siteRouter = require('./siteRouter')
const booksRouter = require('./booksRouter');
const authorsRouter = require('./authorsRouter');
const adminRouter = require('./adminRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/books', booksRouter);
router.use('/authors', authorsRouter);
router.use('/admin', adminRouter);

module.exports = router;