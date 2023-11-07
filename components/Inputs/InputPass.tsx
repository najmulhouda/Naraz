import React from "react";

interface InputProps {
  placeholder?: string;
  name?: string;
  value?: string | number | readonly string[];
  required?: boolean;
  disabled?: boolean;
  error?: any;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * An input element
 */
const InputPass: React.FC<InputProps> = (props: InputProps) => {
  const {
    value = "",
    placeholder = "",
    onChange = () => null,
    name = "",
    required,
    disabled,
    error,
    readonly,
  } = props;
  function triggerOnChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
  }

  return (<>
    <input
      type="password"
      className={`w-full ${disabled ? `text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600` : `bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2 `} `}
      value={value}
      placeholder={placeholder}
      name={name}
      required={required}
      onChange={triggerOnChangeEvent}
      disabled={disabled}
      readOnly={readonly}
    />
    {
      error?.length > 0 ? <p className="w-full mt-1 mb-1 text-red-500  text-base font-mono font-semibold antialiased">{error}</p> : null
    }
  </>
  );
};

export default InputPass;
