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
      className='h-[520px] py-11'
      data-aos='fade-up'
    >
      <Container>
        <div className='grid grid-cols-12 gap-[30px]'>
          <div className='col-span-7 px-[100px]'>
            <h2 className='flex-center mb-8'>
              <Image
                src={contactUsTitle}
                alt={currentRouter.name}
                draggable={false}
              />
            </h2>
            <div className='column-center text-center gap-2.5'>
              <p className='heading-4'>您的聲音，我們的行動！</p>
              <p className='heading-4'>
                {`親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！`}
              </p>
            </div>
          </div>
          <div className='col-span-5 pr-[100px]'>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactUs;
