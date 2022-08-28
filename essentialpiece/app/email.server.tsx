import ContactEmail from './components/contactEmail';
const sendgrid = require('@sendgrid/mail')
import ReactDOMServer from 'react-dom/server'

export type ContactFormModel = {
  name: string;
  email: string;
  help_information: string | undefined;
  referral: string | undefined;
  call_information: string | undefined;
};

var mailOptions = {
  from: 'noreply.essentialpiecefitness@gmail.com',
  to: 'essentialpiecefitness@gmail.com',
  subject: 'New Contact Form Submission',
  html: 'test'
};

export async function sendEmail(formData: ContactFormModel) {
  let response = false;

  if(!process.env.SENDGRID_API_KEY)
  {
    return response;
  }

  //Check if API key exists
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  mailOptions.html = ReactDOMServer.renderToString(ContactEmail(formData));

  await sendgrid
    .send(mailOptions)
    .then(() => {
      // Pass success Message to page
      response = true;
    })
    .catch((error) => {
      // Pass error status to page
    })

    return response;
}