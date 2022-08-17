import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaSitemap,
} from 'react-icons/fa';

import imgServices from '../public/services.png';

function Planning() {
  return (
    <section className='w-full min-h-screen px-4 bg-slate-300 flex flex-wrap items-center'>
      <div className='md:w-4/12 px-12 md:px-4 ml-auto mr-auto'>
        <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-6 shadow-lg rounded-full bg-white'>
          <FaSitemap width={0} height={30} color='black' />
        </div>
        <h1 className='text-xl mb-2 font-bold leading-normal'>PLANNING</h1>
        <p className='text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          convallis suscipit metus nec pretium. Aliquam lobortis, felis non
          egestas maximus, nisi nulla laoreet ipsum, ac mattis massa diam nec
          ante.
        </p>
        <div className='block pb-6'>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Concept Development
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Market Analysis
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Financial Modeling
          </span>
          <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2'>
            Property Master Planning
          </span>
        </div>
        <Link
          href='/'
          className='font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150'
        >
          <button
            type='button'
            className='px-8 py-2 border hover:text-black hover:bg-white'
          >
            Learn More
          </button>
        </Link>
      </div>
      <div className='w-full md:w-5/12 px-4 mr-auto ml-auto mt-32'>
        <div className='flex min-w-0 w-full mb-6 mt-48 md:mt-0'>
          <Image alt='...' src='/img/planning2.png' width={120} height={120} />
          <Image alt='...' src='/img/planning3.png' width={120} height={120} />
          <Image alt='...' src='/img/planning4.png' width={120} height={120} />
          <Image alt='...' src='/img/planning.png' width={120} height={120} />
        </div>
      </div>
    </section>
  );
}

export default Planning;
