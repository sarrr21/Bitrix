import React from 'react';
import ExperienceAccordion from './Discription';

const Exprence = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-12 mt-8 md:mt-36 gap-8">
      {/* Text and Accordion Section */}
      <div className="w-full md:w-1/2">
        <h1 className="font-extrabold text-2xl md:text-4xl">
          <span className="text-green-500">BITRIX</span> INNOVATIONS
        </h1>
        <p className="mt-4 text-sm md:text-base leading-relaxed">
          Our service includes a comprehensive consult to help identify gaps and opportunities,
          a comprehensive report that includes a project plan with timelines and milestones, a cost analysis,
          and a schedule. We also offer a suite of quality products that will help you get there quickly and smoothly.
        </p>
        <div className="mt-6">
          <ExperienceAccordion />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.dyooti.com/wp-content/uploads/2024/01/Screen_1_Image_2-2.png"
          alt="BITRIX Innovations"
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Exprence;
