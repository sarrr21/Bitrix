import React from 'react';

function Service() {
  return (
    <div className="px-4 lg:px-16">
      <p className="text-center my-10 lg:my-20 font-bold text-2xl lg:text-4xl">
        Our service includes a comprehensive consult to help identify<br className="hidden lg:block" /> 
        gaps and opportunities, a comprehensive report that includes a<br className="hidden lg:block" /> 
        project plan with timelines and milestones, a cost analysis, and a<br className="hidden lg:block" /> 
        schedule. We also offer a suite of quality products that will help<br className="hidden lg:block" /> 
        you get there quickly and smoothly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="shadow-md rounded-lg p-6 lg:p-8 space-y-4 ">
          <img 
            src="https://www.dyooti.com/wp-content/uploads/2023/10/consult-icon.svg" 
            alt="Consult Icon" 
            className="mx-auto"
          />
          <h1 className="text-xl lg:text-3xl font-bold">Consult</h1>
          <p className="text-sm lg:text-base">
            Aligning Objectives and Approaches for Process Optimization
          </p>
        </div>
        <div className="shadow-md rounded-lg p-6 lg:p-8 space-y-4 ">
          <img 
            src="https://www.dyooti.com/wp-content/uploads/2023/10/implement-icon.svg" 
            alt="Implement Icon" 
            className="mx-auto"
          />
          <h1 className="text-xl lg:text-3xl font-bold">Implement</h1>
          <p className="text-sm lg:text-base">
            Implementing Swift Resolutions of Complex Customer Issues
          </p>
        </div>
        <div className="shadow-md rounded-lg p-6 lg:p-8 space-y-4 ">
          <img 
            src="https://www.dyooti.com/wp-content/uploads/2023/10/optimise-icon.svg" 
            alt="Support Icon" 
            className="mx-auto"
          />
          <h1 className="text-xl lg:text-3xl font-bold">Support</h1>
          <p className="text-sm lg:text-base">
            High-performance Standards Guaranteed Through <br className="hidden lg:block" />
            The Support and Stability of Robust IT Solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
