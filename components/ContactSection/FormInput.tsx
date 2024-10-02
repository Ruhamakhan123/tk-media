import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}) => {
  const id = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex-1 shrink self-stretch py-3 my-auto border-b border-black">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border-none focus:outline-none bg-transparent"
        aria-label={label}
      />
    </div>
  );
};

export default FormInput;
