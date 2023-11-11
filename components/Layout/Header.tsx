import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTERS, HEADER_HEIGHT } from '@/constants/index';
import logoDark from '@/public/assets/logos/logo_dark.svg';
import logoLight from '@/public/assets/logos/logo_light.svg';
import Button from '@/components/UI/Button';
import Container from '@/components/Layout/Container';
import coinIcon from '@/public/assets/icons/coin.svg';
import coinDarkIcon from '@/public/assets/icons/coin_dark.svg';
import menuIcon from '@/public/assets/icons/menu.svg';
import closeIcon from '@/public/assets/icons/close.svg';

const NAV_ITEMS = [
  ROUTERS.ABOUT,
  ROUTERS.CAMPAIGN,
  ROUTERS.POLICY,
  ROUTERS.CONTACT_US,
];

interface NavItem {
  name: string;
  hash: string;
  isMenuOpen: boolean;
  onClick: () => void;
}

function NavItem({ name, hash, isMenuOpen, onClick }: NavItem) {
  const router = useRouter();
  const { asPath } = router;

  const isActiveStyle = (hash: string) => {
    const baseClasses = `text-lg font-bold py-2 ${
      isMenuOpen ? 'text-white' : 'text-black'
    }`;
    const activeClasses = 'border-b-[3px] border-primary';
    return hash === asPath.replace('/', '').replace('#', '')
      ? baseClasses + ' ' + activeClasses
      : baseClasses;
  };

  return (
    <li key={hash} className={isActiveStyle(hash)}>
      <Link href={{ pathname: '/', hash }} onClick={onClick}>
        {name}
      </Link>
    </li>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoStyle = {
    backgroundImage: `url(${isMenuOpen ? logoLight.src : logoDark.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: '100%',
    height: '100%',
    display: 'block',
    textIndent: '101%',
    overflow: 'hidden',
    'white-space': 'nowrap',
  };

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuClose() {
    setIsMenuOpen(!isMenuOpen);
  }

  const baseClasses = `fixed w-full z-50 top-0 h-[${HEADER_HEIGHT.DESKTOP}px] md:h-[${HEADER_HEIGHT.MOBILE}px] bg-white flex-center border-t-[5px] border-r-[10px] border-primary shadow-[0_0_4px_rgba(0,0,0,0.15)] c-transition`;

  const mobileClasses = isMenuOpen
    ? '!bg-primary h-full overflow-y-hidden items-start'
    : '';
  return (
    <header className={`${baseClasses} ${mobileClasses}`}>
      <Container
        className={`flex items-center justify-between ${
          isMenuOpen ? 'flex-col !items-end' : ''
        }`}
      >
        <div className='flex justify-between w-full md:w-fit'>
          <h1 className='w-[150px] md:w-[235px] h-[38px] md:h-[50px]'>
            <Link href={`/`} style={logoStyle} onClick={handleMenuClose}>
              喵立翰 Miao Li-Han
            </Link>
          </h1>
          <Button
            variant='ghost'
            className='md:hidden !p-0 min-w-fit'
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <Image src={closeIcon} alt='close' draggable={false} />
            ) : (
              <Image src={menuIcon} alt='menu' draggable={false} />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className='w-full md:hidden'>
            <ul
              className={`flex flex-col items-end gap-x-2.5 lg:gap-x-12 ${
                isMenuOpen ? 'gap-y-7' : ''
              }`}
            >
              {NAV_ITEMS.map((_route) => (
                <NavItem
                  onClick={handleMenuClose}
                  isMenuOpen={isMenuOpen}
                  key={_route.hash}
                  name={_route.name}
                  hash={_route.hash}
                />
              ))}
              <li>
                <Link
                  href={{ pathname: '/', hash: ROUTERS.DONATE.hash }}
                  onClick={handleMenuClose}
                >
                  <Button
                    variant='outlined'
                    size='small'
                    className='-mr-2'
                    icon={
                      <Image
                        src={coinDarkIcon}
                        alt='donate'
                        draggable={false}
                      />
                    }
                  >
                    小額捐款
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-x-2.5 lg:gap-x-12'>
            {NAV_ITEMS.map((_route) => (
              <NavItem
                onClick={handleMenuToggle}
                isMenuOpen={isMenuOpen}
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
