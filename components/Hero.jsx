import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = ({ heading, message }) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <motion.h2
          className='text-5xl font-bold cursor-pointer'
          initial={{ x: -600 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          drag
          dragConstraints={{
            top: -100,
            left: -300,
            right: 300,
            bottom: 300,
          }}
        >
          {heading}{' '}
        </motion.h2>
        <motion.p
          initial={{ x: 600 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className='py-5 text-xl cursor-pointer'
          drag
          dragConstraints={{
            top: -100,
            left: -300,
            right: 900,
            bottom: 300,
          }}
        >
          {message}
        </motion.p>
        <motion.button
          className='px-8 py-2 border hover:text-black hover:bg-white'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          drag
          dragConstraints={{
            top: -300,
            left: -300,
            right: 300,
            bottom: 300,
          }}
        >
          <Link href='/'> Learn More</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
