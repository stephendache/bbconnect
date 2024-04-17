const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  //   Contact form
  con_name: {
    type: String,
    required: true,
  },
  con_email: {
    type: String,
    required: true,
  },
  con_num: {
    type: String,
  },
  con_message: {
    type: String,
    required: true,
  },
});
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
