"use strict";
const nodemailer = require("nodemailer");

// To send using nodemailer we need to create an account on smtp server like gmail.
// Ethereal is fack smtp server.
const sendEmail = async (req, res)=> {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: "emilia99@ethereal.email",
              pass: "cSKHzQQv2p1u912VMW",
            },
        });
    
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Fred Foo 👻" <emilia99@ethereal.email>', // sender address
            to: "test@gmail.com, myown@gmail.com", // list of receivers
            subject: "Greeting Success", // Subject line
            text: "Hello there, ", // plain text body
            html: "<b>This email is generated by ethereal smtp server.</b>", // html body
        });
    
        console.log("Message sent: %s", info.messageId);
        res.send('Email send successfully.')
    } catch (error) {
        console.log('Error to send mail ', error);
        
        res.send('Can not send email right now.. ');
    }
    
}

module.exports = sendEmail;