import React from 'react';
import Hero from '../components/Hero';
import Team from '../components/Team';
import About from '../components/About';

const about = () => {
  return (
    <div>
      <Hero heading='About Us' message='some paragraph here.' />
      <About />
      <Team />
    </div>
  );
};

export default about;
