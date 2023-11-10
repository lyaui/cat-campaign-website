import {
  useState,
  useEffect,
  useRef,
  type FormEvent,
  type ChangeEvent,
} from 'react';

import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import PlanCard from '@/components/Donate/PlanCard';
import PlanCardWrapper from '@/components/Donate/PlanCardWrapper';
import useIsDesktop from '@/hooks/useIsDesktop';

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
const customPlanInputId = 'amount';

const plans: Plan[] = [
  { id: 1, name: '喵星人之友', amount: 600, sponsors: 9957 },
  { id: 2, name: '喵星大使', amount: 6000, sponsors: 2000 },
  { id: 3, name: '喵星傳奇', amount: 60000, sponsors: 9957 },
];

function DonateForm({ onClick }: DonateFormProps) {
  const [] = useState();
  const [selectedPlanId, setSelectedPlanId] = useState<planId>(2);
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasError, setHasError] = useState(false);

  const { isDesktop, scale } = useIsDesktop();

  const handlePlanClick = (id: planId) => () => {
    setSelectedPlanId(id);
  };

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const val = +event.currentTarget.value;
  //   setCustomDonateAmt(val);
  // };

  const handleInputBlur = () => {
    setHasError(!inputRef.current);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    const selectedPlan = plans.find((_plan) => _plan.id === selectedPlanId);
    if (!selectedPlan) return;

    const postData: PostDonateForm = {
      id: selectedPlan.id,
      amount: selectedPlan.amount,
    };

    alert(JSON.stringify(postData));
    onClick();
  };

  useEffect(() => {
    console.log(selectedPlanId);
    if (selectedPlanId === customPlanId) return;
    // setCustomDonateAmt(0);
    setHasError(false);
  }, [selectedPlanId]);

  return (
    <form
      onSubmit={handleFormSubmit}
      className='column-center w-full h-[200px] gap-5'
    >
      <h4 className='heading-5 md:heading-4 -mb-2.5'>選擇捐款方案</h4>
      <ul className='grid grid-cols-6 grid-rows-2 gap-2.5 w-full'>
        {plans.map((_plan) => (
          <li key={_plan.id} className='grid-rows-1 col-span-3 md:col-span-2'>
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
        <li className='grid-rows-1 col-span-3 md:col-span-6'>
          <PlanCardWrapper
            id={customPlanId}
            isSelected={selectedPlanId === customPlanId}
            onClick={handlePlanClick}
            className='w-auto'
          >
            <div className='column-center md:flex-center gap-3 w-full'>
              <label
                htmlFor={customPlanInputId}
                className='text-center block shrink-0 heading-6 md:heading-5'
              >
                自訂捐款金額
              </label>
              <Input
                id={customPlanInputId}
                placeholder='請輸入捐款金額'
                type='number'
                // onChange={handleInputChange}
                onBlur={handleInputBlur}
                // inputRef={inputRef}
                // error={hasError}
              />
            </div>
          </PlanCardWrapper>
        </li>
      </ul>

      <div className='flex-center gap-5'>
        <Button
          variant='outlined'
          size={isDesktop ? 'large' : 'medium'}
          onClick={onClick}
        >
          返回
        </Button>
        <Button size={isDesktop ? 'large' : 'medium'} type='submit'>
          我要捐款
        </Button>
      </div>
    </form>
  );
}

export default DonateForm;
