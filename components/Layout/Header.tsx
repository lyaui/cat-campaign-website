import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ROUTERS } from '@/constants/index';
import logoDark from '@/public/assets/logos/logo_dark.svg';
import logoLight from '@/public/assets/logos/logo_light.svg';
import Button, { type BaseProps } from '@/components/UI/Button';
import Container from '@/components/Layout/Container';
import coinIcon from '@/public/assets/icons/coin.svg';
import coinDarkIcon from '@/public/assets/icons/coin_dark.svg';
import menuIcon from '@/public/assets/icons/menu.svg';
import closeIcon from '@/public/assets/icons/close.svg';
import useIsDesktop from '@/hooks/useIsDesktop';

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
  const baseClasses = `${
    isMenuOpen ? 'border-none' : 'md:border-b-[3px] border-white'
  }  text-lg font-bold py-2 ${
    isMenuOpen ? 'text-white' : 'text-black'
  } hover:border-primary c-transition`;

  return (
    <li key={hash} className={baseClasses}>
      <Link href={{ pathname: '/', hash }} onClick={onClick}>
        {name}
      </Link>
    </li>
  );
}

function NavItems({
  onClick,
  isMenuOpen,
}: {
  onClick: () => void;
  isMenuOpen: boolean;
}) {
  const buttonProps: BaseProps & { src: string } = {
    ...(isMenuOpen
      ? { variant: 'outlined', size: 'small', src: coinDarkIcon }
      : { variant: 'solid', size: 'medium', src: coinIcon }),
    children: '小額捐款',
  };
  return (
    <>
      {NAV_ITEMS.map((_route) => (
        <NavItem
          onClick={onClick}
          isMenuOpen={isMenuOpen}
          key={_route.hash}
          name={_route.name}
          hash={_route.hash}
        />
      ))}
      <li>
        <Link
          href={{ pathname: '/', hash: ROUTERS.DONATE.hash }}
          onClick={onClick}
        >
          <Button
            variant={buttonProps.variant}
            size={buttonProps.size}
            className={`shake ${coinDarkIcon && '-mr-2'}`}
            icon={
              <Image src={buttonProps.src} alt='donate' draggable={false} />
            }
          >
            {buttonProps.children}
          </Button>
        </Link>
      </li>
    </>
  );
}

const headerClasses = `fixed w-full z-50 top-0 h-[65px] md:h-[100px] bg-white flex-center border-t-[5px] border-r-[10px] border-primary shadow-[0_0_4px_rgba(0,0,0,0.15)] c-transition`;

const mHeaderClasses = '!bg-primary h-full overflow-y-hidden items-start';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDesktop } = useIsDesktop();

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
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (isDesktop && isMenuOpen) {
      handleMenuToggle();
    }
  }, [isDesktop, isMenuOpen]);

  return (
    <header className={`${isMenuOpen && mHeaderClasses} ${headerClasses} `}>
      <Container
        className={`${
          isMenuOpen && 'flex-col !items-end'
        } md:flex md:items-center md:justify-between `}
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
            <Image
              src={isMenuOpen ? closeIcon : menuIcon}
              alt={isMenuOpen ? 'close' : 'menu'}
              draggable={false}
            />
          </Button>
        </div>

        {isMenuOpen ? (
          <nav className='w-full md:hidden'>
            <ul
              className={`flex flex-col items-end gap-x-2.5 lg:gap-x-12 ${
                isMenuOpen ? 'gap-y-7' : ''
              }`}
            >
              <NavItems isMenuOpen={isMenuOpen} onClick={handleMenuClose} />
            </ul>
          </nav>
        ) : (
          <nav className='hidden md:block'>
            <ul className='flex items-center gap-x-2.5 lg:gap-x-12'>
              <NavItems isMenuOpen={isMenuOpen} onClick={handleMenuClose} />
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Header;
