import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Strategy() {
  const cardStyles = `h-[500px] px-3 py-3 hover:-mt-4 relative flex flex-col min-w-0 break-words bg-slate-100 w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150`;
  return (
    // <section className='block relative z-1 bg-blueGray-600'>
    <div className='w-full min-h-screen bg-black py-[120px]'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-4/12 px-4'>
          <div className={cardStyles}>
            <h5 className='text-xl font-bold pb-4 text-center'>
              Business Strategy
            </h5>
            <Image
              alt='...'
              className='align-middle border-none max-w-full h-auto rounded-lg'
              src='/img/business-strategy.png'
              width='300px'
              height='200px'
            />
            <p className='px-2 py-2 text-base font-light leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis suscipit metus nec pretium. Aliquam lobortis, felis non
              egestas maximus, nisi nulla laoreet ipsum, ac mattis massa diam
              nec ante.
            </p>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
              Learn More
            </button>
          </div>
        </div>

        <div className='w-full lg:w-4/12 px-4'>
          <div className={cardStyles}>
            <h5 className='text-xl font-bold pb-4 text-center'>
              Local Marketing
            </h5>
            <img
              alt='...'
              className='align-middle border-none max-w-full h-auto rounded-lg'
              src='/img/local-marketing.jpeg'
            />
            <p className='px-2 py-2 text-base font-light leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis suscipit metus nec pretium. Aliquam lobortis, felis non
              egestas maximus, nisi nulla laoreet ipsum, ac mattis massa diam
              nec ante.
            </p>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
              Learn More
            </button>
          </div>
        </div>

        <div className='w-full lg:w-4/12 px-4'>
          <div className={cardStyles}>
            {' '}
            <h5 className='text-xl font-bold pb-4 text-center'>Social Media</h5>
            <img
              alt='...'
              className='align-middle border-none max-w-full h-auto rounded-lg'
              src='/img/social-media.png'
            />
            <p className='px-2 py-2 text-base font-light leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              convallis suscipit metus nec pretium. Aliquam lobortis, felis non
              egestas maximus, nisi nulla laoreet ipsum, ac mattis massa diam
              nec ante.
            </p>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Strategy;
