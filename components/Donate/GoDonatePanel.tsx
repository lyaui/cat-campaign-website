import Image from 'next/image';
import CountUp from 'react-countup';

import { ROUTERS } from '@/constants/index';
import donateTitle from '@/public/assets/font-svg/donate.svg';
import accAmountTitle from '@/public/assets/font-svg/accumulated-amount.svg';
import Button from '@/components/UI/Button';

const currentRouter = ROUTERS.DONATE;

interface GoDonatePanelProps {
  onClick: () => void;
}

function GoDonatePanel({ onClick }: GoDonatePanelProps) {
  const accumulatedAmount = 987655873;
  return (
    <>
      <h2 className='flex-center'>
        <Image
          src={donateTitle}
          alt={currentRouter.name}
          width={257}
          height={72}
          draggable={false}
        />
      </h2>
      <h4 className='heading-4'>您的小筆捐款，是每隻毛孩未來的大大動力！</h4>
      <div className='column-center font-black text-primary'>
        <Image
          src={accAmountTitle}
          alt='accumulate amount'
          width={175}
          height={56}
          draggable={false}
        />
        <h3 className='font-black'>
          NT$
          <CountUp end={accumulatedAmount} />
        </h3>
      </div>
      <Button size='large' className='mt-auto' onClick={onClick}>
        前往捐款
      </Button>
    </>
  );
}

export default GoDonatePanel;
