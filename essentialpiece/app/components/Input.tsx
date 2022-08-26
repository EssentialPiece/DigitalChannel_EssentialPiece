import { useField } from "remix-validated-form";

export const Input = ({ name, label } : { name: string, label: string}) => {
  const { error, getInputProps } = useField(name);

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <input {...getInputProps({ id: name, className: "form-control" })} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};