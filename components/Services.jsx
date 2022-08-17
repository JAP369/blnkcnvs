import Image from 'next/image';
import React, { useState } from 'react';
import { data } from './data';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Card from './UI/atoms/Card';
import Carousel from './NextJsCarousel';
import { motion } from 'framer-motion';

const Services = ({ slides, header, para1, para2 }) => {
  // Tailwind Styles
  const messageStyle = `text-md font-md mt-2 text-black justify-center text-center mx-9 mb-[3]`;

  return (
    <section
      id='services'
      className='= flex flex-col min-w-0 bg-white h-screen w-full mb-6 shadow-lg  bg-blueGray-700 py-12 mt-[-60px] '
    >
      <div className='max-w-[1240px] mx-auto  '>
        <motion.h1
          className='text-3xl font-bold text-center  m-[45px]  text-black'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          {header}
        </motion.h1>
        <motion.p
          className={messageStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 3, delay: 1 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          {para1}
        </motion.p>
        <motion.p
          className={messageStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', duration: 3, delay: 2 }}
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          {para2}
        </motion.p>
      </div>

      <Carousel />
    </section>
  );
};

export default Services;
