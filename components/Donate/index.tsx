import Image from 'next/image';
import CountUp from 'react-countup';

import { ROUTERS } from '@/constants/index';
import donateTitle from '@/public/assets/font-svg/donate.svg';
import accAmountTitle from '@/public/assets/font-svg/accumulated-amount.svg';
import Button from '@/components/UI/Button';
import Container from '@/components/Layout/Container';
import donateBg from '@/public/assets/images/donate_bg.png';

const currentRouter = ROUTERS.DONATE;

function GoDonatePanel() {
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
      <Button size='large'>前往捐款</Button>
    </>
  );
}

function Donate() {
  return (
    <section
      id={currentRouter.hash}
      className='bg-no-repeat bg-cover bg-center py-11'
      style={{
        backgroundImage: `url(${donateBg.src})`,
      }}
    >
      <Container>
        <div className='max-w-[679px] p-8 gap-5 rounded-[80px] column-center bg-white'>
          <GoDonatePanel />
        </div>
      </Container>
    </section>
  );
}

export default Donate;
