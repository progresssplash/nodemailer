const express = require("express")
require('dotenv').config();
const app = express();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
   service: "gmail",
   port: 465,
   host: "smtp.gmail.com",
   auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.PROJECT_API_KEY,
   },
   from: process.env.RECEIVER_EMAIL
   
});

const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: "Sending Email with Node js",
    text: "I am sending an email using nodemailer",
};

transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Email Sent Successfully");
});


app.listen(3000, ()=> {
    console.log("Server is up and running!");
});
