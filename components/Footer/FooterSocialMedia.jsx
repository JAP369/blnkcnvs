import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function FooterButtons() {
  const buttonStyling = `flex space-x-1 mr-2 font-semibold bg-gradient-to-r from-purple-500 via-pink-700 to-pink-900
  text-gray-100 rounded-md ring-2 ring-purple-400 px-2 py-2 
  hover:bg-white hover:text-white hover:ring-purple-300 mx-8 shadow-lg shadow-slate-800/100 my-[12px]`;

  const footerButtonAnimation = {
    scale: 1.2,
    opacity: 0.9,
    duration: 1,
    delay: 3,
    ease: 'easeInOut',
  };
  return (
    <div className='w-full lg:w-6/12 '>
      <div className='flex flex-col items-center pb-3'>
        <h4 className='text-3xl font-semibold '>Stay in touch with us!</h4>
        <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
      </div>

      {/* BUTTON CONTAINER */}
      <div className='lg:flex justify-center '>
        {/* LINKEDIN BUTTON */}
        <Link href='https://linkedin.com'>
          <motion.button
            whileHover={footerButtonAnimation}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            type='button'
            className='justify-center w-40 flex space-x-1 mx-2  text-white bg-gradient-to-br from-blue-400 to-blue-900 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-slate-200 dark:focus:ring-slate-800 font-medium rounded-lg text-md px-3 py-3 text-center mb-1'
          >
            <p>LinkedIn</p>
            <FaLinkedin size={25} />
          </motion.button>
        </Link>
        {/* TWITTER BUTTON */}{' '}
        <Link href='https://twitter.com'>
          <motion.button
            whileHover={footerButtonAnimation}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            type='button'
            className=' justify-center w-40 flex space-x-1 mx-2   text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-slate-200 dark:focus:ring-slate-800 font-medium rounded-lg text-md px-3 py-3 text-center mb-1'
          >
            <p>Twitter</p>
            <FaTwitter size={25} />
          </motion.button>
        </Link>
        {/* FACEBOOK BUTTON */}
        <Link href='https://facebook.com'>
          <motion.button
            whileHover={footerButtonAnimation}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            type='button'
            className='justify-center w-40 flex mx-2 space-x-1  text-white bg-gradient-to-br from-blue-700 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-slate-200 dark:focus:ring-slate-800 font-medium rounded-lg text-md px-3 py-3 text-center mb-1'
          >
            <p>Facebook</p>
            <FaFacebook size={25} />
          </motion.button>
        </Link>
        {/* INSTAGRAM BUTTON */}
        <Link href='https://instagram.com'>
          <motion.button
            whileHover={footerButtonAnimation}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: 'easeInOut', duration: 2, delay: 1 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50,
            }}
            type='button'
            className='justify-center w-40 flex space-x-1 mx-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-slate-200 dark:focus:ring-slate-800 font-medium rounded-lg text-md px-3 py-3 text-center mb-1'
          >
            <p>Instagram</p>
            <FaInstagram size={25} />
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default FooterButtons;
