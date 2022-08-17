import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

function Hero2() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <section className='header relative pt-16 items-center flex h-screen max-h-860-px'>
      <div className='container mx-auto items-center flex flex-wrap'>
        <div className='w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4'>
          <div className='pt-32 sm:pt-0'>
            <motion.h2
              className='font-semibold text-4xl text-blueGray-600'
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              We facilitate the creation of strategy and design
            </motion.h2>
            <motion.p
              className='mt-4 text-lg leading-relaxed text-blueGray-500'
              ref={ref}
              animate={controls}
              initial='hidden'
              transition={{ duration: 1.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
            >
              Interactively transform magnetic growth strategies whereas
              prospective <strong>outside the box</strong> thinking.
            </motion.p>
            <div className='mt-12'>
              <a
                href='/'
                target='_blank'
                className='get-started text-slate-600  font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150'
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          className='absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px w-0'
          src='/img/logo.png'
          alt='BLNK CNVS'
        />
      </div>
    </section>
  );
}

export default Hero2;
