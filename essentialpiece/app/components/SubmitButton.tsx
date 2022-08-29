import { useIsSubmitting } from "remix-validated-form";
import submitBtn from '~/assets/images/btn_submit.svg';

var buttonStyle = {
  background: `url("${submitBtn}") no-repeat`
}

export const SubmitButton = () => {
  const isSubmitting = useIsSubmitting();

  return (
    <button className="hero-button" style={buttonStyle} type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : "Submit"}
    </button>
  );
};