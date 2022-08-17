import React from 'react';
import Link from 'next/link';

function FooterLinks() {
  const linkStyling = `text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm`;

  return (
    <div id='links' className='w-full lg:w-6/12 px-4'>
      <div className='flex flex-wrap items-top mb-6'>
        <div className='w-full lg:w-4/12 px-4 py-4 ml-auto'>
          <span className='block uppercase text-blueGray-500 text-sm font-bold mb-2 underline'>
            Useful Links
          </span>
          <ul className='list-unstyled'>
            <li>
              <a className={linkStyling} href='/#services'>
                Our Services
              </a>
            </li>
            <li>
              <a className={linkStyling} href='/about'>
                About Us
              </a>
            </li>
            <li>
              <a className={linkStyling} href='/contact'>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full lg:w-4/12 px-4 py-4'>
          <span className='block uppercase text-blueGray-500 text-sm font-bold mb-2 underline'>
            Other Resources
          </span>
          <ul className='list-unstyled'>
            <li>
              <a className={linkStyling} href='/'>
                License
              </a>
            </li>
            <li>
              <a className={linkStyling} href='/'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className={linkStyling} href='/'>
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
