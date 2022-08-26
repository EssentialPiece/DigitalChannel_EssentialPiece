import { ActionFunction, json, LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { validationError } from 'remix-validated-form';
import banner from '~/assets/images/Banner.jpg';
import ContactForm, { validator } from '~/components/contactForm';
import { sendEmail } from '~/email.server';

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
  // Do something with the data
  // console.log(result.data);
  
  sendEmail(result.data);
  return result;
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