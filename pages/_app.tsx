import { useEffect } from 'react';
import AOS from 'aos';

import '../styles/globals.css';
import 'normalize.css/normalize.css';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';

import Header from '@/components/Layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <main className='h-full bg-background border-x-[5px] border-primary'>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
