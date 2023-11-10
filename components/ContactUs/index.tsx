import Image from 'next/image';

import { ROUTERS } from '@/constants/index';
import contactUsTitle from '@/public/assets/font-svg/contact-us.svg';
import Container from '@/components/Layout/Container';
import ContactForm from '@/components/ContactUs/ContactForm';

function ContactUs() {
  const currentRouter = ROUTERS.CONTACT_US;
  return (
    <section
      id={currentRouter.hash}
      className='md:h-[520px] py-11 pb-[130px] md:pb-11'
      data-aos='fade-up'
    >
      <Container>
        <div className='column-center md:flex-row md:items-start gap-5'>
          <div className='w-full column-center md:w-1/2'>
            <h2 className='relative w-[300px] md:w-[500px] h-[56px] md:h-[57px] mb-5'>
              <Image
                src={contactUsTitle}
                alt={currentRouter.name}
                style={{ objectFit: 'contain' }}
                fill
                draggable={false}
              />
            </h2>
            <div className='column-center text-center gap-2.5'>
              <p className='heading-5 md:heading-4'>您的聲音，我們的行動！</p>
              <p className='body-normal md:heading-4 lg:px-14'>
                {`親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！`}
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/2 px-2.5 lg:px-[100px]'>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactUs;
