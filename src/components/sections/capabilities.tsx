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
    <section id="about" className="relative w-full bg-[#000000] text-[#FFFFFF] py-[15vh] px-[4vw]">
      <div className="w-full max-w-full">
        <h2 className="text-[8vw] md:text-[6vw] font-[900] leading-[0.9] tracking-[-0.02em] uppercase mb-20">
          WHAT I DO
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="flex flex-col gap-12">
              <div>
                <p className="text-[1.25rem] font-medium leading-[1.6] text-white/80 mb-8">
                  I identify market gaps, design optimal solutions, and ship products that solve real problems.
                </p>
                <p className="text-[1.25rem] font-medium leading-[1.6] text-white/60">
                  Currently exploring funding opportunities for projects in AI automation, fraud prevention, and geospatial intelligence.
                </p>
              </div>

              <div className="border-t border-[#333333] pt-12">
                <p className="text-[1.1rem] leading-relaxed text-white/80 mb-8">
                  I've won hackathons (IISc × IBM Qiskit Fall Fest), reached finals in blockchain competitions (Cardano), qualified for national innovation challenges (Smart India Hackathon Round 2), and earned recognition as an IBM Qiskit Advocate.
                </p>
                  <div className="mt-8 flex flex-col gap-4">
                    <p className="text-[1.1rem] leading-relaxed text-white/80">
                      Currently working on three projects:
                    </p>
                    <p className="text-[1.1rem] leading-relaxed text-white/60 pl-4">
                      - AutoCDA - Making circuit design 10x faster with AI<br/>
                      - MITHRIL - WhatsApp automation for commercial businesses<br/>
                      - ARGUS - Intelligence platform for smart cities
                    </p>
                  </div>
                  <p className="text-[1.1rem] leading-relaxed text-white/80 mt-8">
                    Looking for: Advisors and early investors who understand the value of solving hard problems.
                  </p>
              </div>
            </div>
          </div>

          {/* Right Column - Categorized Focus Areas */}
          <div className="lg:col-start-7 lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {categories.map((cat, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <h3 className="text-[0.8rem] font-black uppercase tracking-[0.2em] text-white/40">
                    {cat.title}
                  </h3>
                  {cat.items.map((item, i) => (
                    <p key={i} className="text-[1rem] leading-relaxed text-white/80 font-mono">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
