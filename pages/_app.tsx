import { useEffect } from 'react';
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'animate.css';

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
  const desktopMT = ` md:mt-[98px] `;
  const mobileMt = ` mt-[63px] `;

  return (
    <ParallaxProvider>
      <div className='h-full bg-background border-x-[5px] border-primary'>
        <Header />
        <main className={desktopMT + mobileMt}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default MyApp;
