import { ContactFormModel } from "~/email.server";

export default function ContactEmail(form: ContactFormModel){
    return(
        <div>
            <div>
                <strong>Name </strong>
                <div>{form.name}</div>
                <br/>
            </div>
            <div>
                <strong>Email </strong>
                <div>{form.email}</div>
                <br/>
            </div>
            <div>
                <strong>What kind of help and information do you want right now? </strong>
                <div>{form.help_information}</div>
                <br/>
            </div>
            <div>
                <strong>How did you hear about me? </strong>
                <div>{form.referral}</div>
                <br/>
            </div>
            <div>
                <strong>Could we have a call within 7 business days? (If so, what days and times work best for you)</strong>
                <div>{form.call_information}</div>
                <br/>
            </div>
        </div>
    );
}