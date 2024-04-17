// Registration Routes
const express = require("express");
const router = express.Router();
const newContact = require("../models/contact");

// contact page
router
  .route("/contact")
  .get((req, res) => {
    res.render("pages/contact",
    {
      title: ".:: Contact Us | Manage your money with Kohwope"
    });
  })
  .post(async (req, res, next) => {
    let Contact = new newContact({
      con_name: req.body.con_name,
      con_email: req.body.con_email,
      con_num: req.body.con_num,
      con_message: req.body.con_message,
    });
    //  =============saving the invest tp the database=================
    await Contact.save().then((contact) => {
        console.log("Contact Message Sent", contact);
        req.flash("success", "your Contact Message has been sent successfully");
        return;
      })
      .catch((err) => {
        console.log(err);
        return req.flash(
          "error",
          "Oops! An error occured and your message could not be sent. - please try again"
        );
      });
  });

module.exports = router;
