import Image from 'next/image';
import Link from 'next/link';
import { ROUTERS } from '@/constants/index';
import logoLight from '@/public/assets/logos/logo_light.svg';
import catImg from '@/public/assets/images/cat.png';
import Container from '@/components/Layout/Container';
import { handleSectionScroll } from '@/utils/index';

const NAV_LEFT_ITEMS = [ROUTERS.HOME, ROUTERS.CAMPAIGN, ROUTERS.CONTACT_US];
const NAV_RIGHT_ITEMS = [ROUTERS.ABOUT, ROUTERS.POLICY, ROUTERS.DONATE];

function Footer() {
  const email = 'meowoffice@linmeow.tw';
  const officialInfo = [
    { label: '地址', value: '台北市喵星區毛茸茸大道 88 號喵喵大樓 3 樓' },
    { label: '電話', value: '(02) 888-5678 ' },
    {
      label: '郵件',
      value: (
        <a className='underline' href={`mailto:${email}`}>
          {email}
        </a>
      ),
    },
  ];

  const copyright = '版權聲明：© 2023 喵立翰（Miao Li-Han） 版權所有。';
  return (
    <footer className='bg-primary py-4'>
      <Container className='relative'>
        <div className='absolute -top-[181px] left-[80px]'>
          <Image src={catImg} alt='' width={530} height={267} />
        </div>
        <div className='flex items-center mb-5'>
          <Link href={`/`} onClick={handleSectionScroll}>
            <Image src={logoLight} alt='喵立翰' width={235} height={59} />
          </Link>
          <div className='flex ml-auto gap-[60px]'>
            <div className='w-[230px] '>
              <p className='text-warning body-small text-center mb-2.5'>Menu</p>

              <div className='flex justify-between text-gray-50'>
                <ul>
                  {NAV_LEFT_ITEMS.map(({ name, hash }) => (
                    <li key={name} className='text-center mb-2.5'>
                      <Link
                        href={`/${hash ? '#' + hash : hash}`}
                        onClick={handleSectionScroll}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {NAV_RIGHT_ITEMS.map(({ name, hash }) => (
                    <li key={name} className='text-center mb-2.5'>
                      <Link
                        href={`/${hash ? '#' + hash : hash}`}
                        onClick={handleSectionScroll}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className='text-warning body-small text-center mb-2.5'>
                Office information
              </p>
              <ul className='text-gray-50'>
                {officialInfo.map((_info) => (
                  <li key={_info.label} className='mb-2.5'>
                    {`${_info.label}：`} {_info.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className='text-center body-small text-gray-100'>{copyright}</p>
      </Container>
    </footer>
  );
}

export default Footer;
