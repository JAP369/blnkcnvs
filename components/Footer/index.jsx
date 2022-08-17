import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import FooterButtons from './FooterSocialMedia';
import FooterLinks from './FooterLinks';

export default function Footer() {
  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-purple-500 via-pink-700 to-pink-900
  text-gray-100 rounded-md ring-2 ring-purple-400 px-6 py-2 
  hover:bg-white hover:text-white hover:ring-purple-300 mx-8 shadow-lg shadow-slate-800/100`;

  const buttonStylingFB = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900
  text-gray-100 rounded-md ring-2 ring-blue-400 px-6 py-2 
  hover:bg-white hover:text-white hover:ring-blue-300 mx-8 shadow-lg shadow-slate-800/100`;

  const buttonStylingTR = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-sky-500 via-sky-700 to-sky-900
  text-gray-100 rounded-md ring-2 ring-sky-400 px-6 py-2 
  hover:bg-white hover:text-white hover:ring-sky-300 mx-8 shadow-lg shadow-slate-800/100`;

  const footerButtonAnimation = {
    scale: 1.2,
    opacity: 0.9,
    duration: 1,
    delay: 3,
    ease: 'easeInOut',
  };

  return (
    <>
      <footer className='relative bg-blueGray-300 pt-[15px]'>
        {/* <div
          className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20'
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className='absolute bottom-0 overflow-hidden'
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='none'
            version='1.1'
            viewBox='0 0 2560 100'
            x='0'
            y='0'
          >
            <polygon
              className='text-blueGray-200 fill-current'
              points='2560 0 2560 100 0 100'
            ></polygon>
          </svg>
        </div> */}
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-center lg:text-left'>
            <FooterButtons />
            <FooterLinks />
          </div>
          <hr className='mb-3 border-blueGray-300' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center '>
              <Link href='/'>
                <motion.div
                  className='text-sm text-blueGray-500 font-semibold py-1 cursor-pointer mb-3'
                  whileHover={{
                    scale: 1.2,
                    opacity: 1,
                    duration: 3,
                    delay: 0,
                    ease: 'easeOut',
                    color: 'gray',
                  }}
                >
                  Copyright © {new Date().getFullYear()} Blank Canvas Projects{' '}
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
