const User = require('../models/userModel');
const siteData = require('../data/siteData');
const passport = require('passport');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

module.exports = {
  index: (request, response) => {
    response.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },
  register_get:(request, response) => {
    response.render('pages/register', {
      copyrightYear: siteData.year
    });
  },

  //we are making changes here
  register_post:(request, response) => {
    User.register({ username: request.body.username }, request.body.password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/login');
        });
      }
    });
  },
  login_get: (request, response) => {
    response.render('pages/login',{
      copyrightYear: siteData.year
    });
  },
  // login_post: (request, response) => {
  //   const {username, password} = request.body;
  //   console.log(`password entered is: ${password}`);
  //   User.findOne({username: username}, (error, foundUser) => {
  //     if (error) {
  //       console.log(`The error at login is: ${error}`);
  //     } else {
  //       if(foundUser) {
  //         console.log(`username was matched: ${foundUser.username}`);
  //         console.log(`their password is: ${foundUser.password}`);
  //         bcrypt.compare(password, foundUser.password, (error, result) => {
  //           if (result === true) {
  //             console.log(`user ${foundUser.username} successfully logged in`);
  //             response.redirect('/admin');
  //           };
  //         });
  //       };
  //     };
  //  });
  // }
  login_post: (request, response) => {
    const { username, password } = request.body;
    // console.log(`password entered is: ${password}`);

    const user = new User({
      username: username,
      password: password
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error)
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin');
        });
      }
    });
  },
  // we are changing here

  logout: (request, response) => {
    request.logout(function (err) {
      if (err) { return next(err); }

      response.redirect('/');
    })},

// OAuth
  google_get: passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }),
  google_redirect_get: [
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (request, response) {
      response.redirect('/admin');
    }
  ]

}
