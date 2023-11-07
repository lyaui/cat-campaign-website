import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: string;
  icon?: ReactNode;
  variant?: 'solid' | 'outlined';
  size?: 'medium' | 'large';
  className?: string;
}

function Button({
  children,
  icon,
  variant = 'solid',
  size = 'medium',
  className = '',
  ...others
}: ButtonProps) {
  const variantClasses = {
    solid: 'bg-primary text-white hover:bg-primary-300 active:bg-primary-600',
    outlined:
      'text-primary border-[3px] hover:bg-primary-100 active:bg-primary-200',
  }[variant];

  const sizeClasses = {
    medium: 'min-w-[100px] text-[20px] px-7 py-4',
    large: 'min-w-[176px] text-[28px] px-7 py-5',
  }[size];

  const classes = `rounded-[100px] font-bold transition-all duration-300 ${variantClasses} ${sizeClasses} ${className}`;
  return (
    <button className={classes} {...others}>
      {children}
    </button>
  );
}

export default Button;
