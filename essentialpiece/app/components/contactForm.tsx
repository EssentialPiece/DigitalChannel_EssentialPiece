import { useTransition } from "@remix-run/react";
import { withYup } from "@remix-validated-form/with-yup";
import { ValidatedForm } from "remix-validated-form";
import { string, object } from "yup";
import { Input } from "./Input";
import { SubmitButton } from "./SubmitButton";
/*
Form Values:
- Full Name
- Email Address
- What kind of help and information do you want right now?
- How did you hear about me?
- Could we have a call within 7 business days? (If so, what days and times work best for you)
*/

export const validator = withYup(
    object({
        name: string()
            .required('* Name field is required'),
        email: string().email('Invalid email address')
            .required('* Email field is required'),
        help_information: string(),
        referral: string(),
        call_information: string()
    })
);

export default function ContactForm() {
    const transition = useTransition();

    return (
        <div className="container pt-4">
            <div className="col-12 col-md-6 m-auto">
            <div className="form-title my-4">Contact Us</div>
                <ValidatedForm className="shadow rounded p-3 mb-5" validator={validator} method="post">
                    <Input name="name" label="Full Name" />
                    <Input name="email" label="Email" />
                    <Input name="help_information" label="What kind of help and information do you want right now?" />
                    <Input name="referral" label="How did you hear about me?" />
                    <Input name="call_information" label="Could we have a call within 7 business days? (If so, what days and times work best for you)" />
                    <SubmitButton />
                </ValidatedForm>
            </div>
        </div>
    );
}