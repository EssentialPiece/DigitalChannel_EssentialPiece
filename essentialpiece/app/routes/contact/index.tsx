import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { validationError } from 'remix-validated-form';
import banner from '~/assets/images/Banner.jpg';
import ContactForm, { validator } from '~/components/contactForm';
import { sendEmail } from '~/email.server';

const SuccessMessage = "Email sent! We look forward to working with you soon.";
const ErrorMessage = "Oops! Something went wrong. Please try again later.";

export const action: ActionFunction = async ({
  request,
}) => {
  const result = await validator.validate(
    await request.formData()
  );

  if (result.error) {
    // validationError comes from `remix-validated-form`
    return validationError(result.error);
  }

  const { name, email,  help_information, referral, call_information } = result.data;
  
  let resp = await sendEmail(result.data);
  return { 
    success: resp, 
    message: resp? SuccessMessage : ErrorMessage
  };
};

var heroStyle = {
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${banner}")`
}
export default function ContactIndexRoute() {
    return (
      <div>
        <div className="banner-image" style={heroStyle}></div>
        <ContactForm />
      </div>
    );
  }