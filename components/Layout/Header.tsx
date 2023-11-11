import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTERS } from '@/constants/index';
import logoDark from '@/public/assets/logos/logo_dark.svg';
import Button from '@/components/UI/Button';
import Container from '@/components/Layout/Container';
import coinIcon from '@/public/assets/icons/coin.svg';

const NAV_ITEMS = [
  ROUTERS.ABOUT,
  ROUTERS.CAMPAIGN,
  ROUTERS.POLICY,
  ROUTERS.CONTACT_US,
];

interface NavItem {
  name: string;
  hash: string;
}

function NavItem({ name, hash }: NavItem) {
  const router = useRouter();
  const { asPath } = router;

  const isActiveStyle = (hash: string) => {
    const baseClasses = 'font-bold py-2';
    const activeClasses = 'border-b-[3px] border-primary';
    return hash === asPath.replace('/', '').replace('#', '')
      ? baseClasses + ' ' + activeClasses
      : baseClasses;
  };
  return (
    <li key={hash} className={isActiveStyle(hash)}>
      <Link href={{ pathname: '/', hash }}>{name}</Link>
    </li>
  );
}

const logoStyle = {
  backgroundImage: `url(${logoDark.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  width: '100%',
  height: '100%',
  display: 'block',
  textIndent: '101%',
  overflow: 'hidden',
  'white-space': 'nowrap',
};

function Header() {
  const router = useRouter();

  return (
    <header className='sticky z-50 top-0 h-[65px] md:h-[100px] bg-white flex-center border-t-[5px] border-primary shadow-[0_0_4px_rgba(0,0,0,0.15)]'>
      <Container className='flex items-center justify-between'>
        <h1 className='w-[150px] md:w-[235px] h-[38px] md:h-[50px]'>
          <Link href={`/`} style={logoStyle}>
            喵立翰 Miao Li-Han
          </Link>
        </h1>

        <nav className='hidden md:block'>
          <ul className='flex items-center gap-x-2.5 lg:gap-x-12'>
            {NAV_ITEMS.map((_route) => (
              <NavItem
                key={_route.hash}
                name={_route.name}
                hash={_route.hash}
              />
            ))}
            <li>
              <Link href={{ pathname: '/', hash: ROUTERS.DONATE.hash }}>
                <Button
                  icon={<Image src={coinIcon} alt='donate' draggable={false} />}
                >
                  小額捐款
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
