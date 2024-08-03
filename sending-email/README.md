# Email sending process

Transporter, setup message(from,to) , sendEmails

# Environment setup

1. create a folder(sending-emails)
2. in terminal:
   - npm init -y
   - npm i --save nodemailer dotenv
   - create index.js file
3. go to gmail
4. goto profile
5. click security tab
6. enable 2FA
7. search for "App password"
8. create your app password
9. copy your app password
10. create .env file
11. Add SMTP_PASSWORD as your password in index file but before doing this import require("dotenv").config() in index.js
    12.create .gitignore file and put whatever you want to ignore while pushing to github (add node_modules and .env file)
12. write the code in index.js
