import Image from 'next/image';

import { ROUTERS } from '@/constants/index';
import electionImg from '@/public/assets/font-svg/2023-election.svg';
import arrowImg from '@/public/assets/font-svg/arrow.svg';
import sloganImg from '@/public/assets/font-svg/slogan.svg';
import Container from '@/components/Layout/Container';
import candidateImg from '@/public/assets/images/candidate.png';
import enNameImg from '@/public/assets/font-svg/name_en_bg.svg';
import zhNameImg from '@/public/assets/font-svg/name_zh_bg.svg';

function Home() {
  const currentRouter = ROUTERS.HOME;
  return (
    <section id={currentRouter.hash} className='py-11' data-aos='fade-up'>
      <Container>
        <div className='relative w-full h-[650px]'>
          <div className='absolute top-1/2 -translate-y-1/2 flex flex-col gap-5'>
            <Image draggable={false} src={electionImg} alt='2023 election' />
            <Image
              draggable={false}
              src={sloganImg}
              alt='Miao Li-Han'
              width={700}
              height={300}
            />
            <div className='flex items-center'>
              <Image draggable={false} src={arrowImg} alt='' height={200} />
              <Image
                draggable={false}
                src={enNameImg}
                alt='Miao Li-Han'
                style={{ position: 'absolute', left: 25 }}
              />
            </div>
          </div>

          <div className='absolute top-1/2 -translate-y-1/2 right-[72px]'>
            <Image
              draggable={false}
              src={zhNameImg}
              alt='喵立漢'
              style={{ position: 'absolute', zIndex: -1, top: -20, right: 0 }}
            />
            <Image
              draggable={false}
              src={candidateImg}
              alt='slogan zh'
              width={500}
              height={652}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
