import { FC } from "react";
import { useField } from "remix-validated-form";

export type TextareaProps = {
  name: string;
  label: string;
  value?: string;
  "data-testid"?: string;
};

export const TextArea: FC<TextareaProps> = ({
  name,
  label,
  "data-testid": dataTestId,
}) => {
  const { error, getInputProps } = useField(name);
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>{label}</label>
      <textarea
        {...getInputProps({ id: name, className: "form-control" })}
        data-testid={dataTestId}
      ></textarea>
      {error && <p>{error}</p>}
    </div>
  );
};