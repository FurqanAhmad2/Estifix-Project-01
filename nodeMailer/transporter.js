"use strict";
const nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.email",
    service: "gmail",
    auth: {
      user: "azraunt@gmail.com",
      pass: "rrkqczqhjkyyxnwn",
    },
  });



module.exports = transporter;