import { ROUTERS } from '@/constants/index';
import Container from '@/components/Layout/Container';
import donateBg from '@/public/assets/images/donate_bg.png';

function Donate() {
  const currentRouter = ROUTERS.DONATE;
  return (
    <section
      id={currentRouter.hash}
      className='bg-no-repeat bg-cover bg-center h-[527px] py-11'
      style={{
        backgroundImage: `url(${donateBg.src})`,
      }}
    ></section>
  );
}

export default Donate;
