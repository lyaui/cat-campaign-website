import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTERS } from '@/constants/index';
import logoDark from '@/public/assets/logos/logo_dark.svg';
import Button from '@/components/UI/Button';
import Container from '@/components/Layout/Container';

function Header() {
  const router = useRouter();
  const { asPath } = router;

  const navItems = [
    ROUTERS.STANCE,
    ROUTERS.CAMPAIGN,
    ROUTERS.POLICY,
    ROUTERS.SERVICE_MAIL,
  ];

  const isActiveStyle = (hash: string) => {
    const baseClasses = 'font-bold py-2';
    const activeClasses = 'border-b-[3px] border-primary';
    return hash === asPath.replace('/', '').replace('#', '')
      ? baseClasses + ' ' + activeClasses
      : baseClasses;
  };

  function handleDonateClick() {
    router.push({ pathname: `/`, hash: ROUTERS.DONATE.hash });
  }

  return (
    <header className='h-[100px] bg-white flex-center'>
      <Container className='flex items-center justify-between'>
        <Link href={`/`}>
          <Image src={logoDark} alt='喵立翰' width={235} height={59} />
        </Link>

        <nav>
          <ul className='flex items-center gap-x-12'>
            {navItems.map((_route) => (
              <li key={_route.hash} className={isActiveStyle(_route.hash)}>
                <Link
                  href={`/${_route.hash ? '#' + _route.hash : _route.hash}`}
                  scroll={false}
                >
                  {_route.name}
                </Link>
              </li>
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
