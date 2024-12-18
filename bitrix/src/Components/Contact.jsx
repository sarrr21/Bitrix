import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between text-black gap-8 p-4">
      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
        <img
          src="https://www.bitrix.co.in/logos/instagram.png"
          alt="Instagram"
          className="w-8 h-8"
        />
        <div>
          <h1 className="text-center lg:text-left">Instagram</h1>
          <p className="text-center lg:text-left">Contact us through Instagram</p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
        <img
          src="https://www.bitrix.co.in/logos/linkedin.png"
          alt="Linkedin"
          className="w-8 h-8"
        />
        <div>
          <h1 className="text-center lg:text-left">Linkedin</h1>
          <p className="text-center lg:text-left">Contact us through Linkedin</p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
        <img
          src="https://www.bitrix.co.in/logos/email.png"
          alt="Email"
          className="w-8 h-8"
        />
        <div>
          <h1 className="text-center lg:text-left">Email</h1>
          <p className="text-center lg:text-left">Contact us through Email</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
