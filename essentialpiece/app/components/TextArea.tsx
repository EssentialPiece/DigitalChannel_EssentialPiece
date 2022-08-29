import { FC } from "react";
import { useField, useIsSubmitting } from "remix-validated-form";

export type TextareaProps = {
    name: string;
    label: string;
    value?: string
};

export const TextArea: FC<TextareaProps> = ({
    name,
    label
}) => {
    const { error, getInputProps } = useField(name);
    const isSubmitting = useIsSubmitting();
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={name}>{label}</label>
            <textarea
                {...getInputProps({ id: name, className: "form-control" })}
                disabled={isSubmitting}
            ></textarea>
            {error && <p>{error}</p>}
        </div>
    );
};