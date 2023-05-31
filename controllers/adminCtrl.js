const siteData = require("../data/siteData");
const Book = require("../models/bookModel");
const Author = require("../models/authorModel");

module.exports = {
  admin: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/admin", {
        copyrightYear: siteData.year,
      });
    } else {
      console.log("There is an error.");
      response.redirect("/login");
    }
  },

  logout: (request, response) => {
    request.logout(function (err) {
      if (err) { return next(err); }
      response.redirect('/');
    });
  },

  admin_books: (request, response) => {
    Book.find({}, (error, allBooks) => {
      if (error) {
        return error;
      } else {
        if (request.isAuthenticated()) {
          response.render("pages/adminBooks", {
            copyrightYear: siteData.year,
            inventoryArray: allBooks,
          });
        } else {
          console.log("There is an error.");
          response.redirect("/login");
        }
      }
    });
  },
  create_book: (request, response) => {
    response.render("pages/bookCreate", {
      copyrightYear: siteData.year,
    });
  },
  admin_authors: (request, response) => {
    Author.find({}, (error, allAuthors) => {
      if (error) {
        return error;
      } else {
        if (request.isAuthenticated()) {
          response.render("pages/adminAuthors", {
            copyrightYear: siteData.year,
            authorArray: allAuthors,
          });
        } else {
          console.log("There is an error.");
          response.redirect("/login");
        }
      }
    });
  },
  create_author: (request, response) => {
    response.render("pages/authorCreate", {
      copyrightYear: siteData.year,
    });
  },
  book_update_get: (request, response) => {
    const { _id } = request.params;
    Book.findOne({ _id: _id }, (error, foundBook) => {
      if (error) {
        return error;
      } else {
        if (request.isAuthenticated()) {
          response.render("pages/updateBook", {
            copyrightYear: siteData.year,
            foundBook: foundBook,
          });
        } else {
          console.log("There is an error.");
          response.redirect("/login");
        }
      }
    });
  },
  author_update_get: (request, response) => {
    const { _id } = request.params;
    Author.findOne({ _id: _id }, (error, foundAuthor) => {
      if (error) {
        return error;
      } else {
        if (request.isAuthenticated()) {
          response.render("pages/updateAuthor", {
            copyrightYear: siteData.year,
            foundAuthor: foundAuthor,
          });
        } else {
          console.log("There is an error.");
          response.redirect("/login");
        }
      }
    });
  },
};
