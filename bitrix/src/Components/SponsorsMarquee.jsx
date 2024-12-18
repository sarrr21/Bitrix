import React from 'react';

const sponsors = [
  "https://www.bitrix.co.in/logos/qbrainx.png",
  "https://www.bitrix.co.in/logos/p1.png",
  "https://www.bitrix.co.in/logos/dyooti.png",
  "https://www.bitrix.co.in/logos/inok.svg",
];

const SponsorsMarquee = () => {
  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div className="relative flex items-center justify-center">
        
        <div className="flex overflow-hidden w-full">
          <div
            className="flex animate-[scroll-marquee_linear_infinite] [animation-duration:_20s]"
            style={{
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationName: 'scroll-marquee',
            }}
          >
            {sponsors.concat(sponsors).map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 px-4 sm:px-8 lg:px-12">
                <img
                  src={logo}
                  alt={`Sponsor ${idx}`}
                  className="h-12 w-auto object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsMarquee;
