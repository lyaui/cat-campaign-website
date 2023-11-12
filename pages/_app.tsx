import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'animate.css';
import 'normalize.css/normalize.css';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';

const header = {
  title: '喵立翰 Miao Li-Han | 2023 從喵的眼中看見台灣',
  content: '2023 THE F2E 立委競選，護航台灣幸福經濟 從照顧每一隻貓咪開始',
  image: 'https://i.imgur.com/wYtejfg.png',
};

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
      <Head>
        <title>{header.title}</title>
        <meta name='description' content={header.content} />
        <meta property='og:title' content={header.title} />
        <meta property='og:image' content={header.image} />
        <meta property='og:description' content={header.content} />
      </Head>
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
