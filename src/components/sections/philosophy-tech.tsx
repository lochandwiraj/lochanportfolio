"use client";

import React from 'react';

const techStack = [
  { name: "IBM Qiskit", detail: "Quantum Computing Platform" },
  { name: "Cardano", detail: "Blockchain L1 Infrastructure" },
  { name: "Claude AI", detail: "Advanced Language Models" },
  { name: "PyTorch", detail: "Deep Learning Framework" },
  { name: "Plutus", detail: "Smart Contract Development" },
  { name: "LangGraph", detail: "AI Agent Orchestration" },
  { name: "SKiDL", detail: "Circuit Description Language" },
  { name: "TensorFlow", detail: "Neural Network Training" },
  { name: "OpenStreetMap", detail: "Geospatial Intelligence" },
];

const PhilosophyTech: React.FC = () => {
  return (
    <section className="bg-white py-[20vh] px-[4vw] overflow-hidden">
      <div className="container mx-auto max-w-full">
        <div className="mb-20">
          <h2 className="text-[3vw] md:text-[2.5vw] font-medium leading-[1.2] text-black max-w-[1000px] italic">
            &quot;I build products that solve real problems at scale— from helping engineers design circuits in seconds, to preventing fraud before it costs millions, to making urban planning data-driven and intelligent.&quot;
          </h2>
        </div>

        {/* Tech Carousel */}
        <div className="relative flex overflow-hidden border-t border-b border-black py-16">
          <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div key={idx} className="flex flex-col mx-16 group">
                <span className="text-[5vw] font-black uppercase tracking-tighter text-black">
                  {tech.name}
                </span>
                <span className="text-[0.75rem] font-bold uppercase tracking-widest text-[#808080]">
                  {tech.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default PhilosophyTech;
