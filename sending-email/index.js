require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

//verify connection
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

//sending emails
const mailer = async ({ to, subject, message }) => {
  const result = transporter.sendMail({
    from: `"aryangurau"<${process.env.SMTP_USER}>`,
    to,
    subject,
    html: message,
  });
  return result;
};

module.exports = { mailer }; //exported in the form of object
//copied
// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: " <aryangurau143@gmail.com", // sender address
//     to: "gurauaryan144@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Welcome to our community</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
// }

// main().catch(console.error);
