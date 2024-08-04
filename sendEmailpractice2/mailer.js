const { mailer } = require("./index");

mailer({
  from: `"aryangurau" <${process.env.SMTP_USER}>`,
  to: "gurauaryan144@gmail.com",
  subject: "second test",
  message: "<h1>hello aryan </h1>",
});
