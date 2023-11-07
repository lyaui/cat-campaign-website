import '../styles/globals.css';
import 'normalize.css/normalize.css';
import type { AppProps } from 'next/app';

import Header from '@/components/Layout/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className='h-screen bg-background'>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
