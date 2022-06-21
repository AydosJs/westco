import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { placeholder?: string; className?: string };

export default function TextField({ className = '', ...props }: Props): JSX.Element {
  return (
    <div className="relative mb-2">
      <label htmlFor={props.id} className="leading-7 text-sm font-medium text-gray-600 ">
        {props.placeholder}
      </label>
      <input
        {...props}
        className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  ${className} `} />
    </div>
  );
}
