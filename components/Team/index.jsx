import React from 'react';
import ProfileCard from '../UI/atoms/ProfileCard';
import Section from '../UI/atoms/Section';

function Team() {
  return (
    <Section
      title='Meet the Team'
      message=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    rutrum, nulla a tincidunt tincidunt, elit nulla facilisis erat, id
    lobortis purus massa sit amet turpis. Maecenas sit amet tortor
    lacinia, euismod nisl non, dapibus metus. Integer dictum metus
    eget leo gravida volutpat. In pretium ut mauris vitae imperdiet.'
    >
      <h1 className='text-xl text-white'>test</h1>{' '}
      {/* <ProfileCard name='Dominic Fei' /> */}
      <div className='container mx-auto px-4'>
        <div className='flex justify-around sm:space-x-4 '></div>
      </div>
    </Section>
  );
}

export default Team;
