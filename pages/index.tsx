import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import dynamic from 'next/dynamic';
const Campaign = dynamic(() => import('@/components/Campaign'), {
  ssr: false,
});

import Jumbotron from '@/components/Home';
import About from '@/components/About';
// import Campaign from '@/components/Campaign';
import Policy from '@/components/Policy';
import Donate from '@/components/Donate';
import ContactUs from '@/components/ContactUs';

const Home: NextPage = () => {
  return (
    <div className='text-[72px]'>
      <Jumbotron />
      <About />
      <Campaign />
      <Policy />
      <Donate />
      <ContactUs />
    </div>
  );
};

export default Home;
