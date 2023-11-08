import Image from 'next/image';

import { ROUTERS } from '@/constants/index';
import electionImg from '@/public/assets/font-svg/2023-election.svg';
import arrowImg from '@/public/assets/font-svg/arrow.svg';
import sloganImg from '@/public/assets/font-svg/slogan.svg';
import sloganEnImg from '@/public/assets/font-svg/slogan_en.svg';
import Container from '@/components/Layout/Container';
import candidateImg from '@/public/assets/images/candidate.png';
import enNameImg from '@/public/assets/font-svg/name_en_bg.svg';
import zhNameImg from '@/public/assets/font-svg/name_zh_bg.svg';

function About() {
  const currentRouter = ROUTERS.CAMPAIGN;
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
        <div className='flex justify-between gap-[64px]'>
          <Image draggable={false} src={sloganEnImg} alt='slogan en' />
          <div className='w-auto py-10 px-12 bg-white border-[5px] border-primary rounded-tl-[80px] rounded-br-[80px] shadow-[-15px_20px_0_0_rgba(69,39,160,1)]'>
            <h3 className='heading-1 text-center mb-8'>
              護航台灣幸福經濟 從照顧每一隻貓咪開始
            </h3>

            <p className='heading-4 whitespace-pre-line'>
              {`我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的GDP 經濟帶來巨大效益。\n\n因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。`}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
