import { numberWithCommas } from '@/utils/index';
import { type Plan, type planId } from '@/components/Donate/DonateForm';
import PlanCardWrapper from '@/components/Donate/PlanCardWrapper';

interface PlanCard extends Plan {
  isSelected: boolean;
  onClick: (id: planId) => () => void;
}

function PlanCard({
  id,
  name,
  amount,
  sponsors,
  isSelected = false,
  onClick,
}: PlanCard) {
  return (
    <PlanCardWrapper id={id} isSelected={isSelected} onClick={onClick}>
      <h5 className='heading-6 md:heading-5'>{name}</h5>
      <span className='text-primary text-xl font-black'>
        {`NT$${numberWithCommas(amount)}`}
      </span>
      <span className='text-gray-400 body-small'>
        {`已有 ${numberWithCommas(sponsors)} 人贊助`}
      </span>
    </PlanCardWrapper>
  );
}

export default PlanCard;
