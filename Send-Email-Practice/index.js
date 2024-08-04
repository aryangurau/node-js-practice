require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});
// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

//setting up sender receiver,messages
const mailer = async ({ from, to, subject, message }) => {
  const result = await transporter.sendMail({
    from,
    to,
    subject,
    html: message,
  });
  return result;
};

mailer({
  from: `"aryan gurau <${process.env.SMTP_USERNAME}>`,
  to: "gurauaryan144@gmail.com",
  subject: "testing",
  message: "<h1>I practiced to create email sending app</h1>",
});
