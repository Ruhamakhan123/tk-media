import React, { useState } from "react";
import FormInput from "./FormInput";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-8 text-base font-bold text-black bg-white min-w-[240px] rounded-[32px] w-[509px] max-md:w-full max-md:p-5"
    >
      <h3 className="text-3xl leading-10 max-md:max-w-full max-md:text-2xl">
        Drop us a message, we won't ignore it :)
      </h3>

      <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
        <div className="flex gap-4 justify-center items-center w-full max-md:flex-col max-md:gap-2">
          <FormInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-4 justify-center mt-4 w-full max-md:flex-col max-md:gap-2">
          <div className="flex flex-1 shrink justify-between items-center py-3 h-full border-b border-black basis-0 w-full">
            <label
              htmlFor="service"
              className="flex-1 shrink self-stretch my-auto basis-0"
            >
              Service I need<span className="text-red-600">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="appearance-none bg-transparent"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <FormInput
            label="Phone no."
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex-1 shrink pt-3 pb-24 mt-4 w-full border-b border-black min-h-[131px] max-md:max-w-full">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message..."
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full h-full bg-transparent resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="gap-2 self-start py-2 pr-5 pl-6 mt-6 text-white bg-cyan-500 rounded-[100px] max-md:w-full max-md:py-3 max-md:px-5 hover:bg-cyan-600 transition-colors"
      >
        Submit Query
      </button>
    </form>
  );
};

export default ContactForm;
