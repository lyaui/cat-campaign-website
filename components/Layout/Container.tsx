import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
  const classes = `container mx-auto max-w-[1240px] px-5 ${className}`;
  return <div className={classes}>{children}</div>;
}

export default Container;
