import React from 'react';
import logo from '../public/img/brand/logo.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Logo() {
  return (
    <div className='h-[300px] w-[300px] text-white'>
      <Image src={logo} alt='blank-canvas-projects' />
    </div>
  );
}

export default Logo;
