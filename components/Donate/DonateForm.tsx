import { useState } from 'react';
import PlanCard from '@/components/Donate/PlanCard';

export type planId = 0 | 1 | 2 | 3;

export interface Plan {
  id: planId;
  name: string;
  amount: number;
  sponsors: number;
}

const plans: Plan[] = [
  { id: 1, name: '喵星人之友', amount: 600, sponsors: 9957 },
  { id: 2, name: '喵星大使', amount: 6000, sponsors: 2000 },
  { id: 3, name: '喵星傳奇', amount: 60000, sponsors: 9957 },
];

function DonateForm() {
  const [selectedPlanId, setSelectedPlanId] = useState<planId>(1);
  const handlePlanClick = (id: planId) => () => {
    setSelectedPlanId(id);
  };
  return (
    <form className='column-center gap-5'>
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
    </form>
  );
}

export default DonateForm;
