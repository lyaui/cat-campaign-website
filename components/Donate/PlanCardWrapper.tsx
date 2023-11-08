import { type ReactNode } from 'react';
import { type Plan, type planId } from '@/components/Donate/DonateForm';

interface PlanCardWrapperProps {
  id: planId;
  isSelected: boolean;
  onClick: (id: planId) => () => void;
  children: ReactNode;
}

function PlanCardWrapper({
  id,
  children,
  isSelected = false,
  onClick,
}: PlanCardWrapperProps) {
  const classes = `cursor-pointer w-[180px] column-center gap-2.5 p-4 border-2 ${
    isSelected ? 'border-primary' : 'border-gray-300'
  } rounded-lg hover:bg-primary-100 transition`;

  return (
    <div className={classes} onClick={onClick(id)}>
      {children}
    </div>
  );
}

export default PlanCardWrapper;
