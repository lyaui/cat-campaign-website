interface BadgeProps {
  children: string;
  className?: string;
}

function Badge({ children = '', className = '' }: BadgeProps) {
  return (
    <div
      className={`w-fit text-base px-2.5 py-1.5 bg-secondary text-title-light rounded-tl-lg rounded-br-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default Badge;
