import { useState } from 'react';

import { ROUTERS, DONATE_PANEL } from '@/constants/index';
import GoDonatePanel from '@/components/Donate/GoDonatePanel';
import Container from '@/components/Layout/Container';
import DonateForm from '@/components/Donate/DonateForm';
import donateBg from '@/public/assets/images/donate_bg.png';

const currentRouter = ROUTERS.DONATE;

type DonatePanel = keyof typeof DONATE_PANEL;

// TODO fix type
function Donate() {
  const [currentRender, setCurrentRender] = useState<DonatePanel>(
    DONATE_PANEL.GO_DONATE as DonatePanel,
  );

  const handleGoDonateForm = () => {
    setCurrentRender(DONATE_PANEL.FORM as DonatePanel);
  };

  const handleGoAccAmount = () => {
    setCurrentRender(DONATE_PANEL.GO_DONATE as DonatePanel);
  };

  return (
    <section id={currentRouter.hash} className='bg-primary'>
      <div
        style={{
          backgroundImage: `url(${donateBg.src})`,
        }}
        className='bg-no-repeat bg-cover bg-center py-11'
        data-aos='fade-up'
      >
        <Container className='flex-center md:justify-start'>
          <div className='shadow-[0_0_4px_0_rgba(0, 0, 0, .1)] max-w-[679px] w-full h-[398px] md:h-[437px] p-8 gap-5 rounded-[80px] column-center bg-white '>
            {currentRender === DONATE_PANEL.GO_DONATE && (
              <GoDonatePanel onClick={handleGoDonateForm} />
            )}
            {currentRender === DONATE_PANEL.FORM && (
              <DonateForm onClick={handleGoAccAmount} />
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Donate;
