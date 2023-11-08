import { useEffect } from 'react';
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';

import '../styles/globals.css';
import 'normalize.css/normalize.css';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';

import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

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
    <ParallaxProvider>
      <main className='h-full bg-background border-x-[5px] border-primary'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ParallaxProvider>
  );
}

export default MyApp;
