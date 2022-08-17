import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
} from '@fortawesome/free-solid-svg-icons';
import imgServices from '../public/services.png';
import { motion } from 'framer-motion';

function ServicesTemp() {
  return (
    <section className='mt-48 md:mt-40 pb-40 relative bg-blueGray-100'>
      {/* <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div> */}
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center'>
          <div className='w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700 py-12'>
              <Image
                alt='...'
                src={imgServices}
                className='w-full align-middle rounded-t-lg'
              />
              <blockquote className='relative p-8 mb-4'>
                {/* <svg
                  preserveAspectRatio='none'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 583 95'
                  className='absolute left-0 w-full block h-95-px -top-94-px'
                >
                  <polygon
                    points='-30,95 583,95 583,65'
                    className='text-blueGray-700 fill-current'
                  ></polygon>
                </svg> */}
                <h4 className='text-xl font-bold text-black'>SERVICES</h4>
                <p className='text-md font-light mt-2 text-black'>
                  Blank Canvas Projects provides a wide scope of strategic,
                  creative, and operational consulting services to establish
                  cohesive and timeless hospitality brands. <br />
                  <br />
                  Projects are engaged through a detailed analysis of each
                  client’s vision and financial goals, creating unique
                  deliverables that integrate core values, company culture,
                  operational guidelines, food and beverage development, focused
                  training, and the distinctive voice of each brand.
                </p>
              </blockquote>
            </div>
          </div>

          <div className='w-full md:w-6/12 px-4'>
            <div className='flex '>
              <div className='w-full md:w-6/12 px-4'>
                <div className='relative flex flex-col mt-4'>
                  <motion.div
                    initial={{ opacity: 0, y: -600 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                      delay: 1,
                    }}
                    className='px-4 py-5 flex-auto'
                  >
                    <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      {/* <i className="fa-solid fa-1"></i> */}
                      <FontAwesomeIcon icon={fa1} />
                    </div>
                    <h6 className='text-xl mb-1 font-semibold '>EXPLORATION</h6>
                    <p className='mb-4 text-blueGray-500'>
                      Concept Development | Market Analysis | Financial Modeling
                      | Property Master Planning
                    </p>
                  </motion.div>
                </div>
                <div className='relative flex flex-col min-w-0'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <FontAwesomeIcon icon={fa4} />
                    </div>

                    <h6 className='text-xl mb-1 font-semibold'>DEVELOPMENT</h6>
                    <p className='mb-4 text-blueGray-500'>
                      Branding | Bood | Program | Beverage Program | Uniforms |
                      OS&E | Music Marketing | Social Media
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 px-4'>
                <div className='relative flex flex-col min-w-0 mt-4'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <FontAwesomeIcon icon={fa2} />
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>
                      ADMINISTRATION{' '}
                    </h6>
                    <p className='mb-4 text-blueGray-500'>
                      Project Management | Legal Support | Accounting |
                      Expediting | LOI & Lease Negotiations | Management
                      Contract Underwriting
                    </p>
                  </div>
                </div>
                <div className='relative flex flex-col min-w-0'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <FontAwesomeIcon icon={fa5} />
                    </div>

                    <h6 className='text-xl mb-1 font-semibold'>EXECUTION</h6>
                    <p className='mb-4 text-blueGray-500'>
                      Recruitment | Training | SOPs and Soft/Grand Opening
                      Support
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 px-4'>
                <div className='relative flex flex-col min-w-0 mt-4'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <FontAwesomeIcon icon={fa3} />
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>BUILDING</h6>
                    <p className='mb-4 text-blueGray-500'>
                      Schematic Layout | Interior Design | Architect Selection
                      General Contractor Selections | IT Systems Integrations |
                      FF&E Selections
                    </p>
                  </div>
                </div>
                <div className='relative flex flex-col min-w-0'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white'>
                      <FontAwesomeIcon icon={fa6} />
                    </div>
                    <h6 className='text-xl mb-1 font-semibold'>MANAGMENT</h6>
                    <p className='mb-4 text-blueGray-500'>
                      Operations Management | Troubleshooting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesTemp;
