import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides, header, para1, para2 }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Tailwind Styles
  const messageStyle = `text-md font-md mt-2 text-white justify-center text-center mx-9`;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section
      id='services'
      className='relative flex flex-col min-w-0 break-words bg-black  w-full mb-6 shadow-lg  bg-blueGray-700 py-12 mt-[-60px]  '
    >
      <div className='max-w-[1240px] mx-auto  shadow-md '>
        <h1 className='text-3xl font-bold text-center  m-[45px] shadow-md text-white'>
          {header}
        </h1>

        <p className={messageStyle}>{para1}</p>
        <p className={messageStyle}>{para2}</p>
        <div className='relative flex justify-center py-6'>
          {SliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? 'opacity-[1] ease-in duration-1000'
                    : 'opacity-0'
                }
              >
                <FaArrowCircleLeft
                  onClick={prevSlide}
                  className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                  size={50}
                />
                {index === current && (
                  <Image
                    src={slide.image}
                    alt='/'
                    width='1440'
                    height='600'
                    objectFit='cover'
                  />
                )}
                <FaArrowCircleRight
                  onClick={nextSlide}
                  className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                  size={50}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Slider;
