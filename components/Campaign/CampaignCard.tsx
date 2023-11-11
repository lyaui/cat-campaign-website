import Image, { type StaticImageData } from 'next/image';
import dayjs from 'dayjs';

import Badge from '@/components/UI/Badge';

interface CampaignCardProps {
  direction?: 'column' | 'row';
  date: string;
  title: string;
  desc: string;
  img: StaticImageData;
}

function CampaignCard({
  direction = 'column',
  date = '',
  title = '',
  desc = '',
  img,
}: CampaignCardProps) {
  const dateNum = dayjs(date).format('D');
  const engMonth = dayjs(date).format('MMM') + '.';
  const formattedDate = dayjs(date).format('YYYY.M.D');

  const imageComp = (
    <Image
      src={img}
      alt={title}
      fill={true}
      draggable={false}
      style={{ position: 'absolute', objectFit: 'cover' }}
    />
  );

  const contentComp = (
    <>
      <h4 className='heading-5 md:heading-4 mb-1 md:mb-2.5'>{title}</h4>
      <p className='line-clamp-3'>{desc}</p>
    </>
  );

  if (direction === 'row') {
    return (
      <div className='rounded-lg h-full flex overflow-hidden'>
        <div className='relative shrink-0 w-[276px] h-auto [&>img]:hover:scale-105 [&>img]:c-transition'>
          {imageComp}
        </div>
        <div className='p-4 bg-white'>
          <Badge className='mb-2.5'>{formattedDate}</Badge>
          {contentComp}
        </div>
      </div>
    );
  }
  return (
    <div className='rounded-lg overflow-hidden w-fit md:w-auto'>
      <div className='relative w-full h-[200px] md:h-[325px] overflow-hidden [&>img]:hover:scale-105 [&>img]:c-transition'>
        <div className='absolute z-10 right-0 w-[65px] md:w-[74px] h-[65px] md:h-[74px] bg-secondary text-title-light font-bold	column-center'>
          <span className='text-3xl md:text-4xl'>{dateNum}</span>
          <span className='text-base'>{engMonth}</span>
        </div>
        {imageComp}
        <div
          className='absolute z-10 w-0 h-0 bottom-0 left-1/2 -translate-x-1/2'
          style={{
            borderStyle: 'solid',
            borderWidth: '0 20px 20px 20px',
            borderColor: 'transparent transparent #ffffff transparent',
          }}
        />
      </div>
      <div className='h-[168px] md:h-max py-2.5 px-4 md:p-4 md:pb-10 bg-white'>
        {contentComp}
      </div>
    </div>
  );
}

export default CampaignCard;
