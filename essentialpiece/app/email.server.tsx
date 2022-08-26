import { json } from '@remix-run/node';
import ContactForm from './components/contactForm';
var nodemailer = require('nodemailer');

export type ContactForm = {
    name: string | undefined;
    email: string | undefined;
    help_information: string | undefined;
    referral: string | undefined;
    call_information: string | undefined;
  };

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'noreply.essentialpiecefitness',
      pass: 'somepass'
    }
  });

  var mailOptions = {
    from: 'noreply.essentialpiecefitness@gmail.com',
    to: 'omarahmed1121@gmail.com',
    subject: 'Contact Form Submission',
    text: 'That was easy!'
  };

export async function sendEmail(email: ContactForm) {
      console.log("Server Hit")
     try{
        let info = await transporter.sendMail({
            from: 'noreply.essentialpiecefitness@gmail.com', // sender address
            to: "omarahmed1121@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
          });
          console.log("Message sent: %s", info.messageId);
     }
     catch(err) {
        console.log("Error caught!",err );
    }
}