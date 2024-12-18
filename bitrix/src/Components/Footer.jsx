import React from 'react';

const FooterComponent = () => {
  return (
    <div className="font-sans text-black">
      {/* Top Green Section */}
      <div className="bg-green-600 py-10 px-4 sm:px-8">
        <h1 className="text-white text-2xl sm:text-3xl font-normal m-0">
          Bitrix: Simplifying your success.
        </h1>
      </div>

      {/* Bottom White Section */}
      <div className="bg-white py-10 px-4 sm:px-8">
        {/* On small screens, 1 column; on md and up, 3 columns */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div>
            <div className="flex items-center mb-5">
              {/* Replace with an actual logo if available */}
              <span className="text-lg mr-2">◆</span>
              <span className="text-xl font-bold">bitrix</span>
            </div>
            <p className="leading-relaxed text-base m-0">
              We listen closely to your needs and tailor IT solutions designed to
              improve your efficiency, operations, and bottom line. Bitrix isn’t just
              about technology – we’re your partner, focused on long-term results
              and helping you achieve your business goals.
            </p>
          </div>

          {/* Middle Column: Services */}
          <div>
            <h3 className="text-lg font-bold mb-2">Services</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">Consult</li>
              <li className="mb-2">Implement</li>
              <li className="mb-2">Support</li>
              <li className="mb-2">Optimize</li>
            </ul>
          </div>

          {/* Right Column: Company */}
          <div>
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">About Bitrix</li>
              <li className="mb-2">Vision, Mission And Inspiration</li>
              <li className="mb-2">Meet The Team</li>
              <li className="mb-2">Culture</li>
              <li className="mb-2">Terms of Service</li>
              <li className="mb-2">Privacy Policy</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
