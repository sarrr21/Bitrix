import React from 'react';

function Whatwedo() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 p-4">
      <div className="flex flex-col items-center gap-4 lg:items-start lg:flex-row lg:gap-16">
        <img src="https://www.dyooti.com/wp-content/uploads/2023/05/consult.svg" alt="Consult" className="w-8 h-8" />
        <p className="text-center lg:text-left">
          Consult
          <br />
          Aligning objectives and <br />
          approaches for process <br />
          optimization
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 lg:items-start lg:flex-row lg:gap-8">
        <img src="https://www.dyooti.com/wp-content/uploads/2023/05/Implement.svg" alt="Implement" className="w-8 h-8" />
        <p className="text-center lg:text-left">
          Implement
          <br />
          Implementing swift <br />
          resolutions of complex <br />
          customer issues
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 lg:items-start lg:flex-row lg:gap-8"  >
        <img src="https://www.dyooti.com/wp-content/uploads/2023/05/Implement.svg" alt="High-performance Standards" className="w-8 h-8" />
        <p className="text-center lg:text-left">
          High-performance Standards Guaranteed <br />
          Through The Support and <br />
          Stability of Robust IT Solutions
        </p>
      </div>
    </div>
  );
}

export default Whatwedo;
