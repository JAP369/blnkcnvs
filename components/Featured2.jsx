import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Featured2() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const line1 = 'Today is a blank canvas.';
  const line2 = 'Create a masterpiece.';
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className='relative flex items-center justify-center h-screen mb-12 mt-[-48px] overflow-hidden'>
      <div className='absolute z-10 p-5  text-white rounded-xl'>
        <motion.h3
          // ref={ref}
          // variants={boxVariant}
          // initial='hidden'
          // animate={control}
          // className='text-7xl text-bold'
          className='text-7xl text-bold'
          // ref={ref}
          animate='visible'
          initial='hidden'
          variants={sentence}
          transition={{ duration: 1.5 }}
        >
          {line1.split('').map((char, index) => {
            return;
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>;
          })}
          <br />
          {line2.split('').map((char, index) => {
            return;
            <motion.span key={char + '-' + index} variants={letter}>
              {char}
            </motion.span>;
          })}
        </motion.h3>
      </div>

      <video
        autoPlay
        loop
        muted
        className='absolute z-8 w-auto min-w-full min-h-full max-w-none'
      >
        <source src='./videoBG.mp4' type='video/mp4' />
      </video>
    </section>
  );
}

export default Featured2;
