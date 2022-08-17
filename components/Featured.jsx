import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Featured() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className='relative flex items-center justify-center h-screen mb-12 mt-[-48px] overflow-hidden'>
      <div className='absolute z-10 p-5  text-white rounded-xl'>
        <motion.h1
          // ref={ref}
          // variants={boxVariant}
          // initial='hidden'
          // animate={control}
          className='text-7xl text-bold'
          ref={ref}
          animate={controls}
          initial='hidden'
          transition={{ duration: 1.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Today is a blank canvas.
        </motion.h1>
        <motion.h1
          // ref={ref}
          // variants={boxVariant}
          // initial='hidden'
          // animate={control}
          className='text-7xl text-bold'
          ref={ref}
          animate={controls}
          initial='hidden'
          transition={{ duration: 3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <br />
          Create a masterpiece.
        </motion.h1>
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

export default Featured;

//   return (
//     <section className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>

//       <video
//         autoPlay
//         loop
//         muted
//         className='absolute z-30 w-auto min-w-full min-h-full max-w-none'
//       >
//         <source src={require('/public/videoBG.mp4')} type='video/mp4' />
//       </video>
//     </section>
//   );
// }
