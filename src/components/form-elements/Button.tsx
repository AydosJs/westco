import React from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  className?: React.ReactNode;
  variant?: 'secondary' | 'primary';
};

export default function Button({
  children,
  className = '',
  variant = 'primary',
  ...rest
}: Props) {
  return (
    <button
      className={`bg-${variant}
      font-medium w-full bg-blue-500 text-white text-whitebg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-md
      ${className}`}
      {...rest}>
      {children}
    </button>
  );
}
