import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const navTextStyling = `p-4 text-[15px]`;
  const navTextAnimation = { scale: 1.5, opacity: 0.9 };
  // initial={{ x: 10 }}
  // animate={{ y: 10 }}
  // transition={{ ease: 'easeInOut', duration: 2, delay: 3 }}

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <motion.h1
            style={{ color: `${textColor}` }}
            className='font-bold text-2xl cursor-pointer'
            whileHover={navTextAnimation}
          >
            Blank Canvas Projects™
          </motion.h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <motion.li className={navTextStyling} whileHover={navTextAnimation}>
            <Link href='/'>HOME</Link>
          </motion.li>
          {/* <motion.li className={navTextStyling} whileHover={navTextAnimation}>
            <Link href='/#services'>SERVICES</Link>
          </motion.li> */}
          <motion.li className={navTextStyling} whileHover={navTextAnimation}>
            <Link href='/service'>SERVICE</Link>
          </motion.li>
          <motion.li className={navTextStyling} whileHover={navTextAnimation}>
            <Link href='/about'>ABOUT</Link>
          </motion.li>{' '}
          <motion.li className={navTextStyling} whileHover={navTextAnimation}>
            <Link href='/faq'>FAQ</Link>
          </motion.li>
          <motion.li className={navTextStyling} whileHover={navTextAnimation}>
            <Link href='/contact'>CONTACT</Link>
          </motion.li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/'>HOME</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/#services'>SERVICES</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/about'>ABOUT</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
