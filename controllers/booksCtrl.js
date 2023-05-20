const siteData = require('../data/siteData');
const Book = require('../models/bookModel');

module.exports = {
  all_books: (request, response) => {
    // if (request.isAuthenticated()) {
      Book.find({}, (error, allBooks) => {
        if (error) {
          return error;
        } else {
          response.render('pages/books', {
            copyrightYear: siteData.year,
            inventoryArray: allBooks
          });
        }
      })
    // } else {
    //   console.log('There is an error.');
    //   response.redirect('/');
    // }
  },
  book_detail: (request, response) => {
    // if (request.isAuthenticated()) {
      const { _id } = request.params;
      Book.findOne({ _id: _id }, (error, foundBook) => {
        if (error) {
          return error;
        } else {
          response.render('pages/bookDetail', {
            copyrightYear: siteData.year,
            inventoryItem: foundBook
          });
        }
      })
    // }
  },
  // we are changing here
  book_create_post: (request, response) => {
    // if (request.isAuthenticated()){
      const { title, author, price, starRating, synopsis } = request.body;
      const newBook = new Book({
        title: title,
        author: author,
        price: price,
        starRating: starRating,
        synopsis: synopsis
      });

      newBook.save();

      response.redirect("/admin/admin-books");
    // }
  },

  book_update_put: (request, response) => {
    // if (request.isAuthenticated()) {
      const { _id } = request.params;

      const { title, author, price, starRating, synopsis } = request.body;

      Book.findByIdAndUpdate(_id, {
        $set: {
          title: title,
          author: author,
          price: price,
          starRating: starRating,
          synopsis: synopsis
        }
      }, { new: true }, error => {
        if (error) {
          return error;
        } else {
          response.redirect('/admin/admin-books');
        }
      })
    // }
  },
  book_delete: (request, response) => {
    // if (request.isAuthenticated()) {
      const { _id } = request.params;
      Book.deleteOne({ _id: _id }, error => {
        if (error) {
          return error;
        } else {
          response.redirect('/admin/admin-books')
        }
      });
    // }
  }
}
