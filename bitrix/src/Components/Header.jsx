import React from 'react';

const Header = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.dyooti.com/wp-content/uploads/2024/01/Home_Banner.jpg')", // Replace with your image URL
      }}
    >
      <div className="pt-28 px-4">
        <p className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
          We provide
          <br />
          the best solutions
          <br />
          with out of the box{' '}
          <span className="text-green-600">Capabilities</span>
        </p>
        <p className="text-center text-xl sm:text-xl lg:text-2xl text-white pt-10">
          Over 5+ years of service in the information technology field, and our
          experienced counselors are ready to help you!
        </p>
      </div>
    </div>
  );
};

export default Header;
