import React from 'react';

export default function CapabilitiesSection() {
  const categories = [
    {
      title: "AUTOMATION & PRODUCTIVITY",
      items: [
        "├ AI-powered circuit design automation",
        "├ Natural language hardware generation",
        "└ Design tool democratization"
      ]
    },
    {
      title: "SECURITY & TRUST",
      items: [
        "├ Multi-channel fraud detection systems",
        "├ Quantum cryptography protocols",
        "└ Blockchain payment infrastructure"
      ]
    },
    {
      title: "INFRASTRUCTURE & INTELLIGENCE",
      items: [
        "├ AI-driven urban planning platforms",
        "├ Geospatial gap analysis at scale",
        "└ Smart city optimization engines"
      ]
    },
    {
      title: "EMERGING TECHNOLOGIES",
      items: [
        "├ Quantum-classical hybrid computing",
        "├ Financial prediction models",
        "└ Decentralized finance systems"
      ]
    }
  ];

  return (
    <section id="ventures" className="relative w-full bg-[#000000] text-[#FFFFFF] py-[15vh] px-[4vw]">
      <div className="w-full max-w-full">
        <h2 className="text-[10vw] font-black leading-[0.85] tracking-[-0.04em] uppercase mb-20">
          WHAT<br />I DO
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-12">
              <div>
                <p className="text-[1.5rem] md:text-[2rem] font-medium leading-[1.3] tracking-tight">
                  I identify market gaps, design optimal solutions, and ship products that solve real problems.
                </p>
                <p className="mt-8 text-[1.25rem] md:text-[1.5rem] font-medium leading-[1.3] tracking-tight text-[#808080]">
                  Currently exploring funding opportunities for ventures in AI automation, fraud prevention, and geospatial intelligence.
                </p>
              </div>

              <div className="border-t border-[#333333] pt-12">
                <p className="text-[1.1rem] leading-[1.6] text-[#FFFFFF]">
                  I&apos;ve won hackathons (IISc × IBM Qiskit Fall Fest), reached finals in blockchain competitions (Cardano), qualified for national innovation challenges (Smart India Hackathon Round 2), and earned recognition as an IBM Qiskit Advocate.
                </p>
                <div className="mt-8 flex flex-col gap-4">
                  <p className="text-[1.1rem] font-bold uppercase tracking-widest text-[#808080]">Currently working on three ventures:</p>
                  <ul className="flex flex-col gap-2 text-[1.1rem]">
                    <li>• AutoCDA - Making circuit design 10x faster with AI</li>
                    <li>• UrbanVisionAI - Intelligence platform for smart cities</li>
                    <li>• Fraud Shield - Banking fraud prevention at scale</li>
                  </ul>
                </div>
                <p className="mt-8 text-[1.1rem] font-medium italic text-white">
                  Looking for: Co-founders, advisors, and early investors who understand the value of solving hard problems.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Categorized Focus Areas */}
          <div className="lg:col-start-7 lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {categories.map((cat, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <h5 className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-[#808080]">
                    {cat.title}
                  </h5>
                  <ul className="flex flex-col gap-2">
                    {cat.items.map((item, i) => (
                      <li key={i} className="text-[1.1rem] font-mono leading-[1.4] text-white/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
