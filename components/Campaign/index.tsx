import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// const { Swiper, SwiperSlide } = dynamic(() => import('swiper/react'), {
//   loading: () => <p>Loading...</p>,
// });

import { ROUTERS } from '@/constants/index';
import campaignTitle from '@/public/assets/font-svg/campaign.svg';
import Container from '@/components/Layout/Container';
import CampaignCard from '@/components/Campaign/CampaignCard';
import campaignImg1 from '@/public/assets/images/campaign_1.png';
import campaignImg2 from '@/public/assets/images/campaign_2.png';
import campaignImg3 from '@/public/assets/images/campaign_3.png';

const campaigns = [
  {
    date: '2023-12-26',
    title: '參與台北寵物論壇 爭取貓咪友善環境',
    desc: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
    img: campaignImg1,
  },
  {
    date: '2023-12-26',
    title: '戴著你的貓耳，來和我一起走！',
    desc: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
    img: campaignImg2,
  },
  {
    date: '2023-12-20',
    title: '收容所模特兒大比拼！',
    desc: '活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
    img: campaignImg3,
  },
];

// TODO SECTION TITLE COMPONENT
function Campaign() {
  const currentRouter = ROUTERS.CAMPAIGN;

  return (
    <section id={currentRouter.hash} className='py-11' data-aos='fade-up'>
      <Container className='!px-0 md:!px-5'>
        <h2 className='flex-center mb-8'>
          <Image
            src={campaignTitle}
            alt={currentRouter.name}
            width={257}
            height={72}
            draggable={false}
          />
        </h2>
        <div className='md:hidden'>
          <Swiper
            centeredSlides={true}
            initialSlide={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1.3 },
              480: { slidesPerView: 1.8 },
              640: { slidesPerView: 2.5 },
            }}
          >
            {campaigns.map((_campaign) => (
              <SwiperSlide key={_campaign.title}>
                <CampaignCard {..._campaign} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='hidden md:grid md:grid-cols-12 md:grid-rows-2 gap-[30px]'>
          <div className='md:col-span-5 md:row-span-2'>
            <CampaignCard direction='column' {...campaigns[0]} />
          </div>
          <div className='md:col-span-7 md:row-span-1'>
            <CampaignCard direction='row' {...campaigns[1]} />
          </div>
          <div className='md:col-span-7 md:row-span-1'>
            <CampaignCard direction='row' {...campaigns[2]} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Campaign;
