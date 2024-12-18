import React, { useState, useEffect } from "react";

const testimonials = [
  {
    title: "Customers Love Bitrix.",
    description:
      "Bitrix has been instrumental in enhancing our operational efficiency. They assessed our workflows, identified bottlenecks, and recommended process improvements that have boosted our productivity and reduced costs.",
    author: "Senior Director IT Delivery",
  },
  {
    title: "Our Teams Trust Bitrix.",
    description:
      "The Bitrix team helped streamline our team collaboration and improved our communication channels across departments. It’s been a game-changer for us.",
    author: "Project Manager Operations",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col  p-16 bg-gray-100 rounded-lg  w-full ">
      {/* Title */}
      <h1 className="">Testimoinal</h1>
      <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 space-y-6 ">
        {testimonials[currentIndex].title.split(" ")[0]}{" "}
        <span className="text-red-500">
          {testimonials[currentIndex].title.split(" ")[1]}
        </span>{" "}
        <span className="text-blue-500">
          {testimonials[currentIndex].title.split(" ")[2]}
        </span>
      </p>

      {/* Description */}
      <p className="italic mt-4 text-sm sm:text-base md:text-lg  text-gray-600 leading-relaxed">
        {testimonials[currentIndex].description}
      </p>

      {/* Author */}
      <p className="mt-6 font-semibold text-sm sm:text-base md:text-lg text-gray-800">
        {testimonials[currentIndex].author}
      </p>

      {/* Navigation Indicators */}
      <div className="flex justify-end space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`block h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-gray-800 scale-110" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
