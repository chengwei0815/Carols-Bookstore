const express = require("express");
const siteCtrl = require("../controllers/siteCtrl");
const router = express.Router();

// SITE ROUTES
router.route("/").get(siteCtrl.index);

router
  .route("/register")
  .get(siteCtrl.register_get)
  .post(siteCtrl.register_post);

router.route("/login").get(siteCtrl.login_get).post(siteCtrl.login_post);

// add a logout route to destroy the session
router.route("logout").get(siteCtrl.logout);

//OAuth
router.route("/auth/google").get(siteCtrl.google_get);
router.route("/auth/google/admin").get(siteCtrl.google_redirect_get);

module.exports = router;
