import Link, { type LinkProps as NextLinkProps } from 'next/link';
import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

interface BaseProps {
  children: string;
  icon?: ReactNode;
  variant?: 'solid' | 'outlined' | 'ghost';
  size?: 'medium' | 'large';
  className?: string;
}

type LinkProps = BaseProps &
  NextLinkProps & {
    href: string | { pathname: string; hash?: string };
  };

type ButtonProps = BaseProps &
  ComponentPropsWithoutRef<'button'> & {
    href?: never;
  };

function isLink(props: LinkProps | ButtonProps): props is LinkProps {
  return 'href' in props;
}

function Button(props: LinkProps | ButtonProps) {
  const {
    children,
    icon,
    variant = 'solid',
    size = 'medium',
    className = '',
    ...others
  } = props;
  const variantClasses = {
    ghost: '',
    solid: 'bg-primary text-white hover:bg-primary-300 active:bg-primary-600',
    outlined:
      'text-primary hover:text-primary-300 border-[3px] hover:border-primary-300 hover:bg-primary-100 active:bg-primary-200',
  }[variant];

  const sizeClasses = {
    medium: 'min-w-[100px] text-[20px] px-7 py-4',
    large: 'min-w-[176px] text-[28px] px-7 py-5',
  }[size];

  const classes = `flex-center gap-2 rounded-[100px] font-bold c-transition ${variantClasses} ${sizeClasses} ${className}`;

  if (isLink(props)) {
    return (
      <Link className={classes} {...others} scroll={false}>
        {icon || null}
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...others}>
      {icon || null}
      {children}
    </button>
  );
}

export default Button;
