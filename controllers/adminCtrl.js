const siteData = require("../data/siteData");
const Book = require("../models/bookModel");
const Author = require("../models/authorModel");

module.exports = {
  admin: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/admin", {
        // copyrightYear: siteData.year,
      });
    } else {
      console.log("There is an error.");
      response.redirect("/login");
    }
  },

  how_to_admin: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/adminInfo", {
        // copyrightYear: siteData.year,
      });
    } else {
      response.redirect("/login");
    }
  },

  logout: (request, response) => {
    // new code as of 6/2022 - the correct logout function
    request.logout(function (err) {
      // destroy the session for the user
      if (err) {
        return next(err);
      }
      // redirect back to the homepage
      response.redirect("/");
    });
  },

  admin_books: (request, response) => {
    if (request.isAuthenticated()) {
      Book.find({}, (error, allBooks) => {
        if (error) {
          return error;
        } else {
          response.render("pages/adminBooks", {
            // copyrightYear: siteData.year,
            inventoryArray: allBooks,
          });
        }
      });
    } else {
      response.redirect("/login");
    }
  },
  // admin_books: (request, response) => {
  //   Book.find({}, (error, allBooks) => {
  //     if (error) {
  //       return error;
  //     } else {
  //       if (request.isAuthenticated()) {
  //         response.render("pages/adminBooks", {
  //           copyrightYear: siteData.year,
  //           inventoryArray: allBooks,
  //         });
  //       } else {
  //         console.log("There is an error.");
  //         response.redirect("/login");
  //       }
  //     }
  //   });
  // },

  create_book: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/bookCreate", {
        // copyrightYear: siteData.year,
      });
    } else {
      response.redirect("/login");
    }
  },
  // create_book: (request, response) => {
  //   response.render("pages/bookCreate", {
  //     copyrightYear: siteData.year,
  //   });
  // },

  admin_authors: (request, response) => {
    if (request.isAuthenticated()) {
      Author.find({}, (error, allAuthors) => {
        if (error) {
          return error;
        } else {
          response.render("pages/adminAuthors", {
            // copyrightYear: siteData.year,
            authorArray: allAuthors,
          });
        }
      });
    } else {
      response.redirect("/login");
    }
  },
  // admin_authors: (request, response) => {
  //   Author.find({}, (error, allAuthors) => {
  //     if (error) {
  //       return error;
  //     } else {
  //       if (request.isAuthenticated()) {
  //         response.render("pages/adminAuthors", {
  //           copyrightYear: siteData.year,
  //           authorArray: allAuthors,
  //         });
  //       } else {
  //         console.log("There is an error.");
  //         response.redirect("/login");
  //       }
  //     }
  //   });
  // },

  create_author: (request, response) => {
    if (request.isAuthenticated()) {
      response.render("pages/authorCreate", {
        // copyrightYear: siteData.year,
      });
    } else {
      response.redirect("/login");
    }
  },
  // create_author: (request, response) => {
  //   response.render("pages/authorCreate", {
  //     copyrightYear: siteData.year,
  //   });
  // },

  book_update_get: (request, response) => {
    if (request.isAuthenticated()) {
      const { _id } = request.params;
      Book.findOne({ _id: _id }, (error, foundBook) => {
        if (error) {
          return error;
        } else {
          response.render("pages/updateBook", {
            // copyrightYear: siteData.year,
            foundBook: foundBook,
          });
        }
      });
    } else {
      response.redirect("/login");
    }
  },
  // book_update_get: (request, response) => {
  //   const { _id } = request.params;
  //   Book.findOne({ _id: _id }, (error, foundBook) => {
  //     if (error) {
  //       return error;
  //     } else {
  //       if (request.isAuthenticated()) {
  //         response.render("pages/updateBook", {
  //           copyrightYear: siteData.year,
  //           foundBook: foundBook,
  //         });
  //       } else {
  //         console.log("There is an error.");
  //         response.redirect("/login");
  //       }
  //     }
  //   });
  // },
  author_update_get: (request, response) => {
    if (request.isAuthenticated()) {
      const { _id } = request.params;
      Author.findOne({ _id: _id }, (error, foundAuthor) => {
        if (error) {
          return error;
        } else {
          response.render("pages/updateAuthor", {
            // copyrightYear: siteData.year,
            foundAuthor: foundAuthor,
          });
        }
      });
    } else {
      response.redirect("/login");
    }
  },
};
//   author_update_get: (request, response) => {
//     const { _id } = request.params;
//     Author.findOne({ _id: _id }, (error, foundAuthor) => {
//       if (error) {
//         return error;
//       } else {
//         if (request.isAuthenticated()) {
//           response.render("pages/updateAuthor", {
//             copyrightYear: siteData.year,
//             foundAuthor: foundAuthor,
//           });
//         } else {
//           console.log("There is an error.");
//           response.redirect("/login");
//         }
//       }
//     });
//   },
// };
