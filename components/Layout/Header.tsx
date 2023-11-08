import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTERS } from '@/constants/index';
import logoDark from '@/public/assets/logos/logo_dark.svg';
import Button from '@/components/UI/Button';
import Container from '@/components/Layout/Container';

const NAV_ITEMS = [
  ROUTERS.ABOUT,
  ROUTERS.CAMPAIGN,
  ROUTERS.POLICY,
  ROUTERS.SERVICE_MAIL,
];

// TODO constrain type ROUTERS
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
      <Link href={`/${hash ? '#' + hash : hash}`} scroll={false}>
        {name}
      </Link>
    </li>
  );
}

function Header() {
  const router = useRouter();

  function handleDonateClick() {
    router.push({ pathname: `/`, hash: ROUTERS.DONATE.hash });
  }

  return (
    <header className='sticky z-50 top-0 h-[100px] bg-white flex-center border-t-[5px] border-primary shadow-[0_0_4px_rgba(0,0,0,0.15)]'>
      <Container className='flex items-center justify-between'>
        <Link href={`/`}>
          <Image src={logoDark} alt='喵立翰' width={235} height={59} />
        </Link>

        <nav>
          <ul className='flex items-center gap-x-12'>
            {NAV_ITEMS.map((_route) => (
              <NavItem
                key={_route.hash}
                name={_route.name}
                hash={_route.hash}
              />
            ))}
            <li>
              <Button onClick={handleDonateClick}>小額捐款</Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
