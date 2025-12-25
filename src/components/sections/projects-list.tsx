"use client";

import React from 'react';

const projects = [
  { name: "AutoCDA - AI Circuit Designer", year: "2025" },
  { name: "Subscrybe - Blockchain Payments", year: "2024" },
  { name: "BB84 Quantum Network Simulator", year: "2024" },
  { name: "UrbanVisionAI - Smart City Platform", year: "2025" },
  { name: "Multimodal Banking Fraud Prevention", year: "2025" },
  { name: "AI Dreams - Emotional Companion", year: "2024" },
  { name: "Quantum ML for Finance", year: "2025" },
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
              <h3 className="text-[4vw] md:text-[3vw] font-black uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                {project.name}
              </h3>
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
