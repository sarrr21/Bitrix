import React, { useState } from "react";
import Whatwedo from "./Whatwedo";
import Whoweare from "./Whoweare";
import Contact from "./Contact";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const dataComponents = {
    whatWeDo: (
      <div>
        <Whatwedo />
      </div>
    ),
    whoWeAre: (
      <div>
        <Whoweare />
      </div>
    ),
    contact: (
      <div>
        <Contact />
      </div>
    ),
  };

  const handleItemClick = (item) => {
    setHoveredItem(item); 
    setMenuOpen(false); 
  };

  return (
    <div className="relative">
      <nav className="flex items-center gap-80 p-6 bg-white shadow">
        <img src="https://www.bitrix.co.in/logo/svg/logo-no-background.svg" className="w-28 h-12" />
        
        <ul className="hidden md:flex space-x-24 text-purple-950 text-md">
          {["whatWeDo", "whoWeAre", "contact"].map((item) => (
            <li
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative group cursor-pointer"
            >
              <span className="capitalize hover:underline">
                {item.replace(/([A-Z])/g, " $1")}
              </span>
            </li>
          ))}
        </ul>

        
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <button className="text-purple-950">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

     
      {hoveredItem && (
        <div className="absolute left-0 top-full w-screen bg-white p-4 shadow-lg z-10">
          <div className="max-w-7xl mx-auto">{dataComponents[hoveredItem]}</div>
        </div>
      )}

      
      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-white p-4 shadow-lg z-10 md:hidden">
          <ul className="space-y-4 text-purple-950 text-md">
            {["whatWeDo", "whoWeAre", "contact"].map((item) => (
              <li
                key={item}
                onClick={() => handleItemClick(item)} 
                className="cursor-pointer"
                onMouseEnter={() => setHoveredItem(item)} 
                onMouseLeave={() => setHoveredItem(null)} 
              >
                <span className="capitalize hover:underline">
                  {item.replace(/([A-Z])/g, " $1")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
