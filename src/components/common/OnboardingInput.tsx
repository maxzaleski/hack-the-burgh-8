import { InputHTMLAttributes } from 'react';

export const OnboardingInput: React.FC<
  { label?: string; error?: string; touched?: boolean } & Omit<InputHTMLAttributes<any>, 'error'>
> = ({ label, error, touched, className, ...inputProps }) => (
  <div className="md:flex md:items-center mb-4">
    <div className="md:w-1/3">
      <label
        className="block text-gray-200 font-bold md:text-right md:mb-0 pr-4"
        htmlFor={inputProps.id}>
        {label}
      </label>
    </div>
    <div className="md:w-2/3">
      <input
        className={`h-10 w-full px-4 py-2 my-2 bg-neutral-800 text-neutral-200 focus:bg-white focus:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 placeholder:text-neutral-400 ${
          error ? 'ring-red-500' : 'ring-blue-500'
        } ${className}`}
        {...inputProps}
      />
      {touched && error ? <p className="text-red-500 text-xs">{error}</p> : null}
    </div>
  </div>
);
