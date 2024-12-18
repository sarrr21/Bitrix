import React from 'react';

const ProcessRoadmap = () => {
  return (
    <div className="w-full bg-white py-12 px-4 lg:px-16 relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Process Roadmap</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We assist you in evaluating your current Bitrix implementation through a prioritized roadmap 
          that aligns with your evolving business requirements, offering a strategic approach to 
          optimize your workflow efficiency and collaboration.
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center space-y-8 lg:space-y-0 lg:space-x-8 relative">
       
        <div className="flex-shrink-0">
          <img 
            src="/path/to/chess-piece.png" 
            alt="Chess Piece" 
            className="max-w-[200px] md:max-w-[300px] lg:max-w-[350px] mx-auto"
          />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          
          <div className="bg-white rounded-lg shadow p-6 relative">
            <h3 className="text-green-600 font-semibold mb-2">Assessment</h3>
            <p className="text-gray-700 text-sm mb-4">
              This stage involves understanding the client's business needs and IT infrastructure.
            </p>
           
            <div className="absolute bottom-4 right-4 text-green-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>

        
          <div className="bg-white rounded-lg shadow p-6 relative">
            <h3 className="text-orange-600 font-semibold mb-2">Implementation</h3>
            <p className="text-gray-700 text-sm mb-4">
              The IT consultant implements the plan, which may involve installing new hardware and 
              software, configuring systems, and migrating data.
            </p>
           
            <div className="absolute bottom-4 right-4 text-orange-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="h-8 w-8"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 2a10 10 0 00-7.071 17.071c.292.293.677.445 1.071.445a1.5 1.5 0 001.06-.44c.377-.376.585-.884.585-1.416C7.645 16.641 9.5 12 12 12s4.355 4.641 4.355 4.66c0 .531.208 1.04.585 1.416.294.294.679.44 1.06.44.394 0 .78-.152 1.071-.445A10 10 0 0012 2z" 
                />
              </svg>
            </div>
          </div>


         
          <div className="bg-white rounded-lg shadow p-6 relative">
            <h3 className="text-yellow-600 font-semibold mb-2">Planning</h3>
            <p className="text-gray-700 text-sm mb-4">
              Based on the assessment, a plan is developed to address the client’s needs. 
              This plan may include recommendations for new hardware, software, or cloud-based services.
            </p>
           
            <div className="absolute bottom-4 right-4 text-yellow-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 4v6h6M20 20v-6h-6m0 0A9 9 0 015.64 5.64M15 14a9 9 0 01-9 9" 
                />
              </svg>
            </div>
          </div>

         
          <div className="bg-white rounded-lg shadow p-6 relative">
            <h3 className="text-blue-600 font-semibold mb-2">Support</h3>
            <p className="text-gray-700 text-sm mb-4">
              The IT consultant provides ongoing support to the client to ensure that their 
              IT systems are running smoothly and meeting their business needs.
            </p>
          
            <div className="absolute bottom-4 right-4 text-blue-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M7 7h.01M2.458 12C3.732 7.943 7.524 5 12 5c4.478 0 8.271 2.944 9.543 7-.098.309-.216.617-.352.924l-8.28 8.28a2.121 2.121 0 01-3 0L2.81 12.924A9.069 9.069 0 012.458 12z" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute hidden lg:block top-1/3 left-[20%] transform -translate-y-1/2">
        <svg width="200" height="2" viewBox="0 0 200 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="1" x2="200" y2="1" stroke="green" strokeDasharray="4 4"/>
        </svg>
      </div>
    </div>
  );
};

export default ProcessRoadmap;
