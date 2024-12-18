import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-4 sm:px-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-base sm:text-lg md:text-xl font-semibold">
          {title}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-4">
          <div className="bg-[#0c1c2c] text-white rounded-lg p-4 sm:p-6">
            <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-2">
              {title}
            </h3>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ExperienceAccordion() {
  const [openItem, setOpenItem] = useState(0);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const items = [
    {
      title: 'Our Experience',
      content:
        'After 5+ years in the IT industry, we decided to alter direction. Now, we use our experience to help others. Our ramp up process is designed to empower your technical team and outfit them with the tools they need to succeed.',
    },
    {
      title: 'ServiceNow',
      content:
        'Our ServiceNow expertise helps organizations streamline their workflows and improve service delivery through comprehensive platform implementation and optimization.',
    },
    {
      title: 'Our Approach',
      content:
        'We take a collaborative, client-centric approach to ensure solutions are tailored to your specific needs and organizational goals.',
    },
    {
      title: 'WHY US?',
      content:
        'Our proven track record, experienced team, and commitment to delivering innovative solutions make us the ideal partner for your IT transformation journey.',
    },
  ];

  return (
    <div className="max-w-full md:max-w-2xl mx-auto p-4 sm:p-6 mt-6 sm:mt-12 shadow-md rounded-lg">
      <div className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openItem === index}
            onClick={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
}
