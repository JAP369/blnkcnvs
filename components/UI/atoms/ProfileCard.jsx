import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import CardButton from './CardButton';
import logo from '../../../public/pfp3.png';

export default function ProfileCard({ name, title }) {
  const buttonAnimation = { scale: 1.5, opacity: 0.9 };
  return (
    <div className='flex flex-wrap justify-center'>
      {/* <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'> */}
      <div className='px-6 py-6 mx-3 rounded bg-white'>
        <Image
          src={logo}
          alt='...'
          className='shadow-lg rounded-full mx-auto max-w-120-px'
          width={120}
          height={120}
        />
        <div className='pt-6 text-center'>
          <h5 className='text-xl font-bold text-black tetx-center'>{name}</h5>
          <p className='pb-6 mt-1 text-sm text-black uppercase font-semibold'>
            {title}
          </p>
          <div className='mt-6`'>
            <motion.button
              className=' text-blue-600  font-normal items-center justify-center align-center  bg-white mr-2'
              type='button'
              whileHover={buttonAnimation}
            >
              <FaLinkedin size={30} />
            </motion.button>

            <motion.button
              className=' text-blue-400  font-normal items-center justify-center align-center  bg-white mr-2'
              type='button'
              whileHover={buttonAnimation}
            >
              <FaTwitter size={30} />
            </motion.button>
            <motion.button
              className=' text-blue-600  font-normal items-center justify-center align-center  bg-white mr-2'
              type='button'
              whileHover={buttonAnimation}
            >
              <FaFacebook size={30} />
            </motion.button>
            <Link href='/profile'>
              <div className='py-3 px-3 mt-16 sm:mt-0 '>
                <CardButton />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* 
      <div className='flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
        <Image src='images/terminal-icon.svg' alt='' className='h-20 m-6' />

        <h2 className='text-center px-2 pb-5'>Terminal Commands</h2>

        <a
          href='#'
          className='bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500'
        >
          Know More
        </a>
      </div> */}
    </div>
  );
}
