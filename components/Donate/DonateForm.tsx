import { useState } from 'react';

import Button from '@/components/UI/Button';
import PlanCard from '@/components/Donate/PlanCard';

export type planId = 0 | 1 | 2 | 3;

export interface Plan {
  id: planId;
  name: string;
  amount: number;
  sponsors: number;
}

interface DonateFormProps {
  onClick: () => void;
}

const plans: Plan[] = [
  { id: 1, name: '喵星人之友', amount: 600, sponsors: 9957 },
  { id: 2, name: '喵星大使', amount: 6000, sponsors: 2000 },
  { id: 3, name: '喵星傳奇', amount: 60000, sponsors: 9957 },
];

function DonateForm({ onClick }: DonateFormProps) {
  const [] = useState();
  const [selectedPlanId, setSelectedPlanId] = useState<planId>(1);

  const handlePlanClick = (id: planId) => () => {
    setSelectedPlanId(id);
  };

  const handleFormSubmit = () => {
    onClick();
  };

  return (
    <form onSubmit={handleFormSubmit} className='column-center gap-5'>
      <h4 className='heading-4 mb-2.5'>選擇捐款方案</h4>
      <ul className='flex gap-2.5'>
        {plans.map((_plan) => (
          <li key={_plan.id}>
            <PlanCard
              id={_plan.id}
              name={_plan.name}
              amount={_plan.amount}
              sponsors={_plan.sponsors}
              isSelected={selectedPlanId === _plan.id}
              onClick={handlePlanClick}
            />
          </li>
        ))}
      </ul>
      <div className='flex-center gap-5'>
        <Button variant='outlined' size='large' onClick={onClick}>
          返回
        </Button>
        <Button size='large' type='submit'>
          我要捐款
        </Button>
      </div>
    </form>
  );
}

export default DonateForm;
