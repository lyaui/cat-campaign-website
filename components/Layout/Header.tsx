import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTERS } from '@/constants/index';
import logoDark from '@/public/assets/logos/logo_dark.svg';
import Container from '@/components/Layout/Container';

function Header() {
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
    <header className='h-[100px] bg-white flex-center'>
      <Container className='flex items-center justify-between'>
        <Link href={`/`}>
          <Image src={logoDark} alt='喵立翰' width={235} height={59} />
        </Link>

        <nav>
          <ul className='flex gap-x-12'>
            {Object.values(ROUTERS).map((_route) => (
              <li key={_route.hash} className={isActiveStyle(_route.hash)}>
                <Link
                  href={`/${_route.hash ? '#' + _route.hash : _route.hash}`}
                  scroll={false}
                >
                  {_route.name}
                </Link>
              </li>
            ))}
            <li>BUTTON</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
