import React, { useState } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import ModalSubscribers from '../components/ModalSubscribers';

const Home = () => {
  const [isExpired, setIsExpired] = useState(true);
  return (
    <div
      style={{
        background: `url("/bg_vwanu.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        opacity: '1',
      }}
      className='mx-auto flex min-h-screen items-center justify-center'
    >
      <main className='w-full max-w-screen-2xl text-center'>
        <div className='flex w-full flex-wrap-reverse justify-around px-10 lg:flex-nowrap'>
          <div className='ml-auto pt-5 xl:pt-0'>
            <div className='xl:ml-14'>
              <div className=' mb-16'>
                <img
                  className='z-10 mx-auto w-1/2 items-center justify-center rounded-xl object-center lg:w-64'
                  alt='hero'
                  src='/Asset_3.png'
                />
              </div>
              {isExpired ? (
                <p className='text-center text-3xl font-bold text-v-yellow md:text-5xl lg:text-4xl xl:text-right xl:text-5xl'>
                  Welcome to Vwanu
                </p>
              ) : (
                <p className='text-center text-3xl font-bold text-v-yellow md:text-5xl lg:text-4xl xl:text-right xl:text-5xl'>
                  We are Launching Soon
                </p>
              )}
              <CountdownTimer fn={setIsExpired} />
              <p className='pb-6 text-3xl  text-v-yellow md:text-5xl lg:text-4xl xl:text-4xl'>
                join the waiting list
              </p>
              <ModalSubscribers />
            </div>
          </div>
          <div className='my-auto ml-auto mt-8 hidden basis-1/3 py-4 md:w-full lg:block'>
            <img
              className='z-10 w-full items-center justify-center rounded-xl object-center lg:w-64'
              alt='hero'
              src='/mockup.png'
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
