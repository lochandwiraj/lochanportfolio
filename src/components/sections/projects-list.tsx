"use client";

import React from 'react';

const projects = [
  { name: "AutoCDA - AI Circuit Designer", year: "2025", badge: "🚀 VENTURE" },
  { name: "MITHRIL - WhatsApp Commerce", year: "2025", badge: "🚀 VENTURE" },
  { name: "ARGUS - Smart City Platform", year: "2025", badge: "🚀 VENTURE" },
  { name: "Subscrybe - Blockchain Payments", year: "2024" },
  { name: "BB84 Quantum Network Simulator", year: "2024" },
  { name: "THEMIS - Banking Fraud Prevention", year: "2025", badge: "💡 CONCEPT" },
  { name: "LIMBO - Emotional Companion", year: "2024" },
  { name: "MORIA - Quantum ML for Finance", year: "2025" },
];

const ProjectsList: React.FC = () => {
  return (
    <section id="projects" className="bg-black py-[20vh] px-[4vw]">
      <div className="container mx-auto max-w-full">
        <div className="flex flex-col gap-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group flex justify-between items-baseline border-b border-[#333333] py-8 hover:border-white transition-colors duration-300 cursor-pointer"
            >
              <div className="flex items-baseline gap-4 group-hover:translate-x-4 transition-transform duration-500">
                <h3 className="text-[4vw] md:text-[3vw] font-black uppercase tracking-tighter">
                  {project.name}
                </h3>
                {project.badge && (
                  <span className="text-[1.2vw] md:text-[0.8vw] font-bold text-white bg-[#333333] px-2 py-1">
                    {project.badge}
                  </span>
                )}
              </div>
              <span className="text-[1.5vw] md:text-[1vw] font-medium text-[#808080] group-hover:text-white transition-colors">
                {project.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
