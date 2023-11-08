interface BadgeProps {
  children: string;
}

function Badge({ children }: BadgeProps) {
  return (
    <div className='w-fit text-base px-2.5 py-1.5 mb-2.5 bg-secondary text-title-light rounded-tl-lg rounded-br-lg'>
      {children}
    </div>
  );
}

export default Badge;
