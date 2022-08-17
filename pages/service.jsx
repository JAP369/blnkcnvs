import React from 'react';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Services from '../components/Services';

const service = () => {
  return (
    <div>
      <Hero heading='Our Services' message='some paragraphs...' />
      <Services />
    </div>
  );
};

export default service;
