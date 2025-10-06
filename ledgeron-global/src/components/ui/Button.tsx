import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  isExternal = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}