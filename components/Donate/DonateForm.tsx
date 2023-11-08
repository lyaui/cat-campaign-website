import { useState } from 'react';

import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import PlanCard from '@/components/Donate/PlanCard';
import PlanCardWrapper from '@/components/Donate/PlanCardWrapper';

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

interface PostDonateForm {
  id: planId;
  amount: number;
}

const customPlanId = 0;

const plans: Plan[] = [
  { id: 1, name: '喵星人之友', amount: 600, sponsors: 9957 },
  { id: 2, name: '喵星大使', amount: 6000, sponsors: 2000 },
  { id: 3, name: '喵星傳奇', amount: 60000, sponsors: 9957 },
];

function DonateForm({ onClick }: DonateFormProps) {
  const [] = useState();
  const [selectedPlanId, setSelectedPlanId] = useState<planId>(2);
  const [customDonateAmt, setCustomDonateAmt] = useState<number | null>(null);

  const handlePlanClick = (id: planId) => () => {
    setSelectedPlanId(id);
  };

  const handleFormSubmit = () => {
    const selectedPlan = plans.find((_plan) => _plan.id === selectedPlanId);
    if (!selectedPlan) return;

    const postData: PostDonateForm = {
      id: selectedPlan.id,
      amount: selectedPlan.amount,
    };

    alert(JSON.stringify(postData));
    onClick();
  };

  return (
    <form onSubmit={handleFormSubmit} className='column-center w-full gap-5'>
      <h4 className='heading-4 mb-2.5'>選擇捐款方案</h4>
      <ul className='flex gap-2.5 w-full'>
        {plans.map((_plan) => (
          <li key={_plan.id} className='w-full'>
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
      <PlanCardWrapper
        id={customPlanId}
        isSelected={selectedPlanId === customPlanId}
        onClick={handlePlanClick}
        className='w-auto'
      >
        <Input placeholder='請輸入捐款金額' />
      </PlanCardWrapper>
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
