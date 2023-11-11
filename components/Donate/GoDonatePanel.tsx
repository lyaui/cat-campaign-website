import Image from 'next/image';
import CountUp from 'react-countup';

import { ROUTERS } from '@/constants/index';
import donateTitle from '@/public/assets/font-svg/donate.svg';
import accAmountTitle from '@/public/assets/font-svg/accumulated-amount.svg';
import Button from '@/components/UI/Button';
import useIsDesktop from '@/hooks/useIsDesktop';
import coinIcon from '@/public/assets/icons/coin.svg';

const currentRouter = ROUTERS.DONATE;

interface GoDonatePanelProps {
  onClick: () => void;
}

function GoDonatePanel({ onClick }: GoDonatePanelProps) {
  const { isDesktop, scale } = useIsDesktop();

  const accumulatedAmount = 987655873;

  const donateTitleSize = { width: 257 * scale, height: 73 };
  const accAmountTitleSize = { width: 175, height: 56 };

  return (
    <>
      <h2 className='relative w-[200px] md:w-[257px] h-[56px] md:h-[73px]'>
        <Image
          src={donateTitle}
          alt={currentRouter.name}
          style={{ objectFit: 'contain' }}
          fill
          draggable={false}
        />
      </h2>
      <h2 className='flex-center'></h2>
      <>
        <h4 className='hidden md-block md:heading-4 text-center'>
          您的小筆捐款，是每隻毛孩未來的大大動力！
        </h4>
        <h4 className='md-hidden heading-6 whitespace-pre-line text-center'>
          {`您的小筆捐款，\n是每隻毛孩未來的大大動力！`}
        </h4>
      </>
      <div className='column-center font-black text-primary gap-1'>
        <Image
          src={accAmountTitle}
          alt='accumulate amount'
          width={accAmountTitleSize.width * scale}
          height={accAmountTitleSize.height * scale}
          draggable={false}
        />
        <h3 className='font-black text-3xl md:text-6xl'>
          NT$
          <CountUp end={accumulatedAmount} />
        </h3>
      </div>
      <Button
        size={isDesktop ? 'large' : 'medium'}
        className='mt-5'
        onClick={onClick}
        icon={<Image src={coinIcon} alt='donate' draggable={false} />}
      >
        前往捐款
      </Button>
    </>
  );
}

export default GoDonatePanel;
