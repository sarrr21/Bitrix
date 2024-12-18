import React from 'react';
import { Clock, Leaf, RotateCcw, Tag, TreePine } from 'lucide-react';

const services = [
  {
    title: "Assessment",
    description: "This stage involves understanding the client's business needs and IT infrastructure.",
    icon: Clock,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Implementation",
    description: "The IT consultant implements the plan, which may involve installing new hardware and software, configuring systems, and migrating data.",
    icon: TreePine,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "Planning",
    description: "Based on the assessment, a plan is developed to address the client's needs. This plan may include recommendations for new hardware, software, or cloud-based services.",
    icon: RotateCcw,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Support",
    description: "The IT consultant provides ongoing support to the client to ensure that their IT systems are running smoothly and meeting their business needs.",
    icon: Tag,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
];

function Roadmap() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <h1 className="text-center text-xl md:text-2xl font-bold mb-4">Process Roadmap</h1>
      <p className="text-center mb-8 text-sm md:text-base leading-relaxed">
        We assist you in evaluating your current Bitrix implementation through a
        prioritized roadmap that aligns with your evolving business requirements,
        offering a strategic approach to optimize your workflow efficiency and collaboration.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="https://www.dyooti.com/wp-content/uploads/2024/01/Screen_1_Image_3-1.png"
            alt="Roadmap"
            className=""
          />
        </div>

        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`border shadow-lg flex flex-col p-4 rounded-lg  ${
                  index % 2 === 0 ? 'md:translate-y-2' : 'md:-translate-y-2'
                }`}
              >
        
                <div className={`${service.color} text-lg font-bold mb-2`}>{service.title}</div>

                
                <p className="text-gray-600 text-sm flex-grow">{service.description}</p>

                
                <div className="flex justify-end mt-24">
                  <service.icon className={`w-24 h-24 ${service.color}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
