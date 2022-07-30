const express = require("express")
const app = express();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
   service: "gmail",
   port: 465,
   host: "smtp.gmail.com",
   auth: {
    user: "progress7790@gmail.com",
    pass: "xwtudejmakqyrpsf",
   },
   from: "progresssplash@gmail.com"
   
});

const mailOptions = {
    from: "progress7790@gmail.com",
    to: "progresssplash@gmail.com",
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
