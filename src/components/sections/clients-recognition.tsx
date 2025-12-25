import React from 'react';

/**
 * ClientsRecognitionSection Component
 * Featuring scrolling horizontal lists of partners and award platforms.
 * 
 * Design characteristics:
 * - Dark theme: Pure black background (#000000)
 * - Typography: Inter/Helvetica style, high contrast white text
 * - Marquee effect: Smooth infinite horizontal scroll
 * - Brutalist/Minimalist aesthetics
 */

const ClientsRecognitionSection: React.FC = () => {
  // Partnership brands for the first marquee
  const partners = [
    "Royal Caribbean", "Caoa", "NeonDoor", "LeadEdu", "Ministry of Supply", 
    "Amanda Braga", "Credit Genie", "JCPM Malls", "Motorice", "Corona Partners",
    "247", "Arculus", "Sourcerers", "Blockchain Companies", "Omnium", "Cocay Branding"
  ];

  // Award platforms for the second marquee
  const awards = [
    "Awwwards", "CSS Design Awards", "Design Rush", "The FWA", "Orpetron", "GSAP"
  ];

  return (
    <section className="bg-black py-[120px] overflow-hidden select-none">
      <div className="container mb-20 px-[4vw]">
        <h2 className="text-[2.5rem] font-medium leading-[1.2] text-white max-w-[800px]">
          Handcrafted Experiences for Brands of All Sizes, Worldwide
        </h2>
        <p className="mt-8 text-[#808080] text-[1.25rem] font-normal leading-[1.6] max-w-[600px]">
          From Every Industry, For Every Scale. Explore the Brands We&apos;ve Partnered With.
        </p>
      </div>

      {/* Partners Marquee - Row 1 */}
      <div className="relative flex overflow-hidden border-t border-[#333] py-10">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...partners, ...partners].map((partner, idx) => (
            <span 
              key={`${partner}-${idx}`} 
              className="mx-12 text-[5vw] font-black uppercase tracking-tighter text-white opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>

      <div className="container mt-40 mb-20 px-[4vw]">
        <h2 className="text-[2.5rem] font-medium leading-[1.2] text-white max-w-[800px]">
          To truly stand out, you have to break away from the ordinary.
        </h2>
      </div>

      {/* Awards Marquee - Row 2 */}
      <div className="relative flex overflow-hidden border-t border-b border-[#333] py-12">
        <div className="flex animate-[marquee_30s_linear_infinite_reverse] whitespace-nowrap">
          {[...awards, ...awards, ...awards].map((award, idx) => (
            <div 
              key={`${award}-${idx}`} 
              className="flex items-center mx-16 group"
            >
              <span className="text-[6vw] font-black uppercase tracking-tighter text-white transition-all duration-500 group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_white]">
                {award}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Styles for the infinite marquee animation using Tailwind's arbitrary values or global.css keys */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 30s linear infinite reverse;
        }
      `}</style>
    </section>
  );
};

export default ClientsRecognitionSection;