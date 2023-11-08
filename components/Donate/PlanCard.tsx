import { numberWithCommas } from '@/utils/index';
import { type Plan, type planId } from '@/components/Donate/DonateForm';

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
  const classes = `cursor-pointer w-[180px] column-center gap-2.5 p-4 border-2 ${
    isSelected ? 'border-primary' : 'border-gray-300'
  } rounded-lg hover:bg-primary-100 transition`;

  return (
    <div className={classes} onClick={onClick(id)}>
      <h5 className='heading-5'>{name}</h5>
      <span className='text-primary text-xl font-black'>
        {`NT$${numberWithCommas(amount)}`}
      </span>
      <span className='text-gray-400 body-small'>
        {`已有 ${numberWithCommas(sponsors)} 人贊助`}
      </span>
    </div>
  );
}

export default PlanCard;
