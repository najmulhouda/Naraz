import React from "react";

interface InputProps {
  placeholder?: string;
  name?: string;
  value?: string | number | readonly string[];
  error?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * An input element
 */
const InputPhone: React.FC<InputProps> = (props: InputProps) => {
  const {
    value = "",
    placeholder = "",
    onChange = () => null,
    name = "",
    error,
  } = props;
  function triggerOnChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
  }

  return (<>
    <input
      type="tel"
      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={triggerOnChangeEvent}
    />
    {
      error?.length > 0 ? <p className="w-full mt-1 mb-1 text-red-500  text-base font-mono font-semibold antialiased">{error}</p> : null
    }
  </>
  );
};

export default InputPhone;
