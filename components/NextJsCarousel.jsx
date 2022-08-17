import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className='flex justify-center mt-6'>
        <h2 className='text-white'></h2>
        <Carousel>
          <div>
            <Image
              className='rounded-lg shadow-lg '
              src='https://images.unsplash.com/photo-1584967918940-a7d51b064268?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              alt='image1'
              width='1200px'
              height='530px'
            />

            <p className='legend'>
              EXPLORATION <br />
              Concept Development | Market Analysis | Financial Modeling |
              Property Master Planning
            </p>
          </div>
          <div>
            <Image
              className='rounded-lg shadow-lg '
              src='https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              alt='image2'
              width='1200px'
              height='530px'
            />

            <p className='legend'>
              ADMINISTRATION
              <br />
              Project Management | Legal Support | Accounting | Expediting | LOI
              & Lease Negotiations | Management Contract Underwriting
            </p>
          </div>
          <div>
            <Image
              className='rounded-lg shadow-lg '
              src='https://images.unsplash.com/photo-1495508348712-216a17cfbbc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
              alt='image3'
              width='1200px'
              height='530px'
            />

            <p className='legend'>
              BUILDING <br />
              Schematic Layout | Interior Design | Architect Selection General
              Contractor Selections | IT Systems Integrations | FF&E Selections
            </p>
          </div>
          <div>
            <Image
              className='rounded-lg shadow-lg '
              src='https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              alt='image4'
              width='1200px'
              height='530px'
            />

            <p className='legend'>
              DEVELOPMENT <br />
              Branding | Bood | Program | Beverage Program | Uniforms | OS&E |
              Music Marketing | Social Media
            </p>
          </div>
          <div>
            <Image
              className='rounded-lg shadow-lg '
              src='https://images.unsplash.com/photo-1616596871445-bb8290a7a2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1707&q=80'
              alt='image5'
              width='1200px'
              height='530px'
            />

            <p className='legend'>
              EXECUTION <br />
              Recruitment | Training | SOPs and Soft/Grand Opening Support
            </p>
          </div>
          <div>
            <Image
              className='rounded-lg shadow-lg '
              src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
              alt='image6'
              width='1200px'
              height='530px'
            />

            <p className='legend'>
              MANAGMENT
              <br />
              Operations Management | Troubleshooting
            </p>
          </div>
        </Carousel>
      </div>
    );
  }
}
