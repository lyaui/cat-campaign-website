import Image from 'next/image';

import { ROUTERS } from '@/constants/index';
import policyTitle from '@/public/assets/font-svg/policy.svg';
import Container from '@/components/Layout/Container';
import PolicyCard from '@/components/Policy/PolicyCard';
import useIsDesktop from '@/hooks/useIsDesktop';

const policies = [
  {
    order: '一',
    title: '為毛孩子謀福利！推動寵物醫療保障方案',
    policies: [
      '設立寵物醫療基金：每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用',
      '提供醫療補助：每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力',
      '合作動物醫院：目前已有和超過 200 家動物醫院進行初步的合作討論',
    ],
  },
  {
    order: '二',
    title: '打造休閒天堂！推廣寵物休閒與娛樂場所',
    policies: [
      '建立寵物公園：每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園',
      '推廣寵物友善商家：鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫',
    ],
  },
  {
    order: '三',
    title: '推廣寵物飼養教育，讓愛更加專業',
    policies: [
      '建立寵物飼養教育中心：每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。',
      '推廣寵物飼養課程：與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。',
      '製作教育資料：出版寵物飼養手冊、影片和線',
    ],
  },
];

function Policy() {
  const currentRouter = ROUTERS.POLICY;

  const { isDesktop, scale } = useIsDesktop();
  const policyTitleSize = { width: 257, height: 72 };

  return (
    <section
      id={currentRouter.hash}
      className='bg-primary pt-11 pb-11 md:pb-20'
      data-aos='fade-up'
    >
      <Container>
        <h2 className='flex-center mb-8'>
          <Image
            src={policyTitle}
            alt={currentRouter.name}
            width={policyTitleSize.width * scale}
            height={policyTitleSize.height * scale}
            draggable={false}
          />
        </h2>
        <div className='flex flex-col md:flex-row gap-8'>
          {policies.map((_policy) => (
            <PolicyCard
              key={_policy.title}
              order={_policy.order}
              title={_policy.title}
              policies={_policy.policies}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Policy;
