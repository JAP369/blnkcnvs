import React from 'react';

const Contact = () => {
  return (
    <section className='max-w-[1240px] m-auto p-[100px] h-screen border shadow-lg'>
      <h1 className='text-3xl font-bold text-center m-[12px]'>
        Want to work with us?
      </h1>
      <p className='leading-relaxed mt-1 mb-4 text-blueGray-500'>
        Complete this form and we will get back to you in 24 hours.
      </p>
      <br />
      <form className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2'>
          <input
            className='border shadow-lg p-3'
            type='text'
            placeholder='Name'
          />
          <input
            className='border shadow-lg p-3'
            type='email'
            placeholder='Email'
          />
        </div>
        <input
          className='border shadow-lg p-3 w-full my-2'
          type='text'
          placeholder='Subject'
        />
        <textarea
          className='border shadow-lg p-3 w-full'
          cols='30'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='border shadow-lg p-3 w-full mt-2 hover:bg-slate-600 hover:text-white'>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
