import React from 'react';
import { motion } from 'framer-motion';

function CardButton() {
  return (
    <div>
      <button
        className='00 text-lg text-slate-900 rounded-lg transp-2 pl-5 pr-5 bg-transparent border-2 border-slate-600 text-indigo-5ition-colors duration-700 transform hover:bg-slate-600 hover:text-slate-100 focus:border-4 focus:border-slate-300'
        type='button'
        // whileHover={buttonAnimation}
      >
        More Info
      </button>
    </div>
  );
}

export default CardButton;
