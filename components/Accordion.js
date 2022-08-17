import React, { useState } from 'react';
import AccordionUI from '../components/AccordionUI';

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = [
    {
      id: 1,
      question: 'Question #1?',
      answer: 'Answer #1',
    },
    {
      id: 2,
      question: 'Question #2?',
      answer: 'Answer #2',
    },
    {
      id: 3,
      question: 'Question #3?',
      answer: 'Answer #3',
    },
    {
      id: 4,
      question: 'Question #4?',
      answer: 'Answer #4',
    },
    {
      id: 5,
      question: 'Question #5?',
      answer: 'Answer #5',
    },
    {
      id: 6,
      question: 'Question #6?',
      answer: 'Answer #6',
    },
  ];

  return (
    <div className='flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50 mb-[50px]'>
      {data.map((index, data) => {
        return (
          <AccordionUI
            key={index}
            title={data.question}
            Id={data.id}
            // children={data.answer}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;
