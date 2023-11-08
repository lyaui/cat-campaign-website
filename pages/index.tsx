import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Campaign from '@/components/Campaign';
import Policy from '@/components/Policy';
import Donate from '@/components/Donate';

const Home: NextPage = () => {
  return (
    <div className='text-[72px]'>
      <Campaign />
      <Policy />
      <Donate />
    </div>
  );
};

export default Home;
