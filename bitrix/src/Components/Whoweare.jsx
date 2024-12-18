import React from 'react';

const Whoweare = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 p-4">
      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-16">
        <img
          src="https://www.dyooti.com/wp-content/uploads/2023/10/Group-287.svg"
          alt="About Bitrix"
          className="w-24 h-24"
        />
        <p className="text-center lg:text-left">
          About Bitrix
          <br />
          Bitrix is a leading IT
          <br /> Consulting & <br />
          Implementation partner,
          <br />
          helping you leverage tailored
          <br />
          solutions to optimize your
          <br />
          business operations and
          <br />
          deliver exceptional user
          <br />
          experiences.
        </p>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
        <img
          src="https://www.dyooti.com/wp-content/uploads/2023/10/vuesax-outline-eye.svg"
          alt="Vision"
          className="w-8 h-8"
        />
        <p className="text-center lg:text-left">
          Vision, Mission, And
          <br />
          Inspiration
          <br />
          To empower businesses
          <br />
          through transformative IT
          <br />
          solutions.
        </p>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
        <img
          src="https://www.dyooti.com/wp-content/uploads/2023/10/vuesax-outline-shapes.svg"
          alt="Culture"
          className="w-8 h-8"
        />
        <p className="text-center lg:text-left">
          Culture
          <br />
          Our value system
        </p>
      </div>
    </div>
  );
};

export default Whoweare;
