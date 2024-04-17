const express = require("express");
const router = express.Router();
const Invest = require("../models/invest");
const User = require("../models/register");
const auth = require("../config/middlewares");
const isUser = auth.isUser;

router.get("/", (req, res) => {
  res.render("pages/index", {
    title: ".:: BuildConnect",
  });
});

// about page
router.route("/about").get((req, res) => {
  res.render("pages/about", {
    title: ".:: BuildConnect",
  });
});

// faq page
router.route("/faqs").get((req, res) => {
  res.render("pages/faqs", {
    title: ".:: FAQs",
  });
});
// privacy page
router.route("/privacy").get((req, res) => {
  res.render("pages/privacy-policy", {
    title: ".:: Privacy Policy | Manage Your Money with Kohwope",
  });
});
// team page
router.route("/team").get((req, res) => {
  res.render("pages/team", {
    title: ".:: Team | Manage Your Money with Kohwope",
  });
});
// All users
router.route("/all-user").get(isUser, async (req, res) => {
  let userType = req.user.usertype;
  await User.find({ usertype: "user" })
    .then(async (allUser) => {
      res.render(
        "pages/allUser",
        { userType, allUser }
      );
    })
    .catch((err) => {
      req.flash("error", "sorry something went wrong");
      return res.redirect("back");
    });
});


// dashboard
router.route("/dashboard").get(isUser, async (req, res) => {
  let user = req.user;
  let userType = req.user.usertype;
  await User.find({ usertype: "user" })
    .then(async (allUser) => {
      res.render(
        "pages/dashboard",
        {
          userType,
          allUser,
          userType: userType,
          user,
        }
      );
    })
    .catch((err) => {
      req.flash("error", "sorry something went wrong");
      return res.redirect("back");
    });
});

// Profile
router.route("/profile").get(isUser, async (req, res) => {
  let user = req.user;
  let userType = req.user.usertype;
  await User.find({ usertype: "user" })
    .then(async (allUser) => {
      res.render(
        "pages/profile",
        {
          title: ".:: myProfile | Manage Your Money with Kohwope",
        },
        { userType, allUser, user }
      );
    })
    .catch((err) => {
      req.flash("error", "sorry something went wrong");
      res.redirect("back");
      return;
    });
});

router.get("/logout", (req, res) => {
  req.logOut();
  req.flash("success", "logout successful");
  res.redirect("/");
  return;
});

module.exports = router;
