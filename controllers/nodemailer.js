const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

// Use at least Nodemailer v4.1.0
// Generate SMTP service account from ethereal.email
// nodemailer.createTestAccount((err, account) => {
//     if (err) {
//         console.error('Failed to create a testing account. ' + err.message);
//         return process.exit(1);
//     }

//     console.log('Credentials obtained, sending message...');

//     // Create a SMTP transporter object
//     let transporter = nodemailer.createTransport({
//         host: account.smtp.host,
//         port: account.smtp.port,
//         secure: account.smtp.secure,
//         auth: {
//             user: account.user,
//             pass: account.pass
//         }
//     });

//     // Message object
//     let message = {
//         from: 'Sender Name <sender@example.com>',
//         to: 'Recipient <recipient@example.com>',
//         subject: 'Nodemailer is unicode friendly ✔',
//         text: 'Hello to myself!',
//         html: '<p><b>Hello</b> to myself!</p>'
//     };

//     transporter.sendMail(message, (err, info) => {
//         if (err) {
//             console.log('Error occurred. ' + err.message);
//             return process.exit(1);
//         }

//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
//     });
// });

router.post("/", async (req, res) => {
    // console.log(req.body);
    // console.log(res);
    var name = req.body.clientName;
    var email = req.body.clientEmail;
    var message = req.body.clientMessage;
    console.log(name, email, message);
    console.log("console hit");
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.mailName, // generated ethereal user
          pass: process.env.mailPassword, // generated ethereal password
        },
      });
  
      // send mail with defined transport object
      let info = await transporter.sendMail({
        //TODO: Add a area for customer to add number to contact them on.
        //FIXME: Send to a real email address.
        from: `"${name} 🚘" <${email}>`, // sender address
        to: "dagreatcode@gmail.com, baz@example.com", // list of receivers
        subject: `${name} need some work done`, // Subject line
        text: `${message}`, // plain text body
        html: `<b>${message}</b>`, // html body
      });
  
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      res.send(`API is working properly`);
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = router;