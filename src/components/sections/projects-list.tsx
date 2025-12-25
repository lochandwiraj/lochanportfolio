"use client";

import React from 'react';

const projects = [
  { name: "Subscrybe - Blockchain Payments", year: "2024" },
  { name: "BB84 - Quantum Network Simulator", year: "2024" },
  { name: "LIMBO - Emotional Companion", year: "2024" },
  { name: "AutoCDA - AI Circuit Designer", year: "2025" },
  { name: "MITHRIL - WhatsApp Commerce", year: "2025" },
  { name: "ARGUS - Smart City Platform", year: "2025" },
  { name: "THEMIS - Banking Fraud Prevention", year: "2025" },
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
