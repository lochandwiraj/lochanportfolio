"use client";

import React from "react";

export function SeekingMarquee() {
  const sentence = "Currently Exploring Seed Funding for AutoCDA.";
  const instances = Array(12).fill(sentence);

  return (
    <section className="bg-black py-12 border-y border-[#1a1a1a] overflow-hidden select-none">
      <div className="relative flex">
        <div className="flex animate-marquee-seamless whitespace-nowrap">
          {instances.map((text, idx) => (
            <span 
              key={`set1-${idx}`} 
              className="inline-block mx-8 text-[3rem] md:text-[5rem] font-black uppercase tracking-tighter text-white opacity-90 hover:opacity-100 transition-opacity"
            >
              {text}
              <span className="mx-8 text-white/20">•</span>
            </span>
          ))}
          {instances.map((text, idx) => (
            <span 
              key={`set2-${idx}`} 
              className="inline-block mx-8 text-[3rem] md:text-[5rem] font-black uppercase tracking-tighter text-white opacity-90 hover:opacity-100 transition-opacity"
            >
              {text}
              <span className="mx-8 text-white/20">•</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-seamless {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-seamless {
          animation: marquee-seamless 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
