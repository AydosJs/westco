import React from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  className?: React.ReactNode;
  variant?: 'secondary' | 'primary';
  icon?: any
};

export default function Button({
  children,
  icon = null,
  className = '',
  variant = 'primary',
  ...rest
}: Props) {
  return (
    <button
      className={`bg-${variant}
      font-medium w-full bg-blue-500 text-white text-whitebg-indigo-500 border-0 py-2 px-6
      focus:outline-none hover:bg-blue-700 rounded text-md flex flex-row space-x-2 flex-none items-center justify-center
      ${className}`}
      {...rest}>
      {icon && (
        <span className='h-full flex items-center'>
          {icon}
        </span>
      )}
      <span className='h-full flex items-center'>
        {children}
      </span>
    </button>
  );
}
