import React from "react";
interface InputFieldProps {
  label: string;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  required = false,
}) => {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex-1 shrink self-stretch py-3 my-auto border-b border-black">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={label}
        required={required}
        className="w-full bg-transparent"
        aria-label={label}
      />
    </div>
  );
};

export default InputField;
