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
const Input: React.FC<InputProps> = (props: InputProps) => {
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
      type="text"
      className="border-2 border-gray-300 w-full px-3 py-1.5 rounded-md shadow-md focus:border-gray-400"
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

<Input />;
export default Input;
