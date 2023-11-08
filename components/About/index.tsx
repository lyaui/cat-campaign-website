import Image from 'next/image';

import { ROUTERS } from '@/constants/index';
import sloganEnImg from '@/public/assets/font-svg/slogan_en.svg';
import Container from '@/components/Layout/Container';

function About() {
  const currentRouter = ROUTERS.ABOUT;
  return (
    <section id={currentRouter.hash} className='py-11' data-aos='fade-up'>
      <Container>
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
