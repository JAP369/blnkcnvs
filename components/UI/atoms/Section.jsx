import React from 'react';
import ProfileCard from './ProfileCard';
// import logo from '../../../public/pfp3.png';
// import icon2 from '../../../public/pfp4.png';
// import icon3 from '../../../public/pfp5.png';

function Section({ title, message }) {
  return (
    <div className='w-full min-h-screen bg-black p-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-center text-center mb-24'>
          {/* <div className='w-full lg:w-6/12 px-4'> */}
          <h1 className='text-white font-bold text-xl text-center md:text-3xl md:mt-12 mb-4'>
            {title}
          </h1>
          <p className='text-lg leading-relaxed m-4 text-white'>{message}</p>
          <ProfileCard
            name='Dominic Fei'
            title='Founder & Marketing Specialist'
          />
          <ProfileCard
            name='Melvin Reyes'
            title='Co-Founder, Solution Specialist & Business Developer'
          />
          <ProfileCard
            name='Jonathan Paita'
            title='Purchasing & Beverage Specialist'
          />
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Section;
