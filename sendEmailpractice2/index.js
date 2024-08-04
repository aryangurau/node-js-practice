require("dotenv").config();
const nodemailer = require("nodemailer");

//transporter
const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("server is ready to take message");
  }
});

const mailer = async ({ from, to, subject, message }) => {
  await transporter.sendMail({
    from,
    to,
    subject,
    html: message,
  });
};
module.exports = { mailer };
