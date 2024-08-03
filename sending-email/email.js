const email = require("./index");

email.mailer({
  to: "gurauaryan144@gmail.com",
  subject: "Testing",
  message: "<h1>This is email sender app</h1>",
});
