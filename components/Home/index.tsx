import Image from 'next/image';

import { ROUTERS } from '@/constants/index';
import electionImg from '@/public/assets/font-svg/2023-election.svg';
import arrowImg from '@/public/assets/font-svg/arrow.svg';
import sloganImg from '@/public/assets/font-svg/slogan.svg';
import sloganMobileImg from '@/public/assets/font-svg/slogan_m.svg';
import Container from '@/components/Layout/Container';
import candidateImg from '@/public/assets/images/candidate.png';
import enNameImg from '@/public/assets/font-svg/name_en_bg.svg';
import enNameMobileImg from '@/public/assets/font-svg/name_en_m_bg.svg';
import zhNameImg from '@/public/assets/font-svg/name_zh_bg.svg';

function Home() {
  const currentRouter = ROUTERS.HOME;
  return (
    <section
      id={currentRouter.hash}
      className='pt-2 sm:pt-5 md:pt-11'
      data-aos='fade-up'
    >
      <Container>
        <div className='relative w-full h-[410px] md:h-[650px]'>
          <div className='absolute top-1/2 -translate-y-1/2 flex flex-col md:gap-5'>
            {/* 2023 */}
            <div className='px-20 sm:px-0 mb-4'>
              <Image draggable={false} src={electionImg} alt='2023 election' />
            </div>
            {/* zh-slogan */}
            <>
              <div className='hidden md:block'>
                <Image
                  draggable={false}
                  src={sloganImg}
                  alt='Miao Li-Han'
                  width={700}
                  height={300}
                />
              </div>
              <div className='relative md:hidden w-full h-full'>
                <Image
                  draggable={false}
                  src={sloganMobileImg}
                  alt='Miao Li-Han'
                />
              </div>
            </>
            {/* arrow + en-name */}
            <div className='flex items-center'>
              <div className='mr-5 mt-5'>
                <Image draggable={false} src={arrowImg} alt='' height={200} />
              </div>
              <div className='animate__animated animate__fadeInLeft hidden md:block'>
                <Image draggable={false} src={enNameImg} alt='Miao Li-Han' />
              </div>
              <div className='animate__animated animate__fadeInLeft md:hidden'>
                <Image
                  draggable={false}
                  src={enNameMobileImg}
                  alt='Miao Li-Han'
                />
              </div>
            </div>
          </div>

          <div className='absolute top-1/2 -translate-y-[110px] sm:-translate-y-[184px] md:-translate-y-1/2 right-0 md:right-[72px]'>
            <div className='animate__animated animate__fadeInDown hidden lg:block z-10'>
              <Image
                draggable={false}
                src={zhNameImg}
                alt='喵立漢'
                style={{ position: 'absolute', zIndex: -1, top: -20, right: 0 }}
              />
            </div>
            {/* candidate */}
            <div className='relative w-[242px] sm:w-[300px] md:w-[500px] h-[315px] sm:h-[390px] md:h-[652px]'>
              <Image
                src={candidateImg}
                alt={currentRouter.name}
                style={{ objectFit: 'contain' }}
                fill
                draggable={false}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Home;
