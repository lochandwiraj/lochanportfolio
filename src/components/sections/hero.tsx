import React from 'react';
import GridMotion from '@/components/ui/GridMotion';

export default function HeroSection() {
  const gridItems = [
    'DESIGN',
    'INNOVATION',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=3000&auto=format&fit=crop',
    'QUANTUM',
    'BLOCKCHAIN',
    'CIRCUITS',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3000&auto=format&fit=crop',
    'AI/ML',
    'FINTECH',
    'AUTOMATION',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=3000&auto=format&fit=crop',
    'SECURITY',
    'SMART CITIES',
    'HARDWARE',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3000&auto=format&fit=crop',
    'PAYMENTS',
    'GEOSPATIAL',
    'RESEARCH',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=3000&auto=format&fit=crop',
    'STARTUPS',
    'PRODUCTS',
    'IMPACT',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3000&auto=format&fit=crop',
    'SCALE',
    'SOLUTIONS',
    'FUTURE',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=3000&auto=format&fit=crop',
    'TECH'
  ];

  return (
    <>
      <section className="relative w-full min-h-screen bg-white text-black overflow-hidden flex flex-col justify-center px-[4vw]">
        {/* GridMotion Background */}
        <div className="absolute inset-0 opacity-5">
          <GridMotion items={gridItems} gradientColor="rgba(0,0,0,0.1)" />
        </div>

        <div className="container mx-auto px-0 relative z-20 w-full max-w-full">
          <div className="flex flex-col md:flex-row justify-between items-start pt-[10vh] pb-[10vh]">
            
              <div className="flex-1">
                  <h1 
                    className="hero-heading tracking-[-0.04em] font-black leading-[0.85] indent-[-0.04em]"
                    style={{ fontSize: '11vw' }}
                  >
                    <div className="block">SOLVING PROBLEMS</div>
                    <div className="block translate-x-[6vw]">THAT ACTUALLY</div>
                    <div className="block translate-x-[12vw]">MATTER</div>
                  </h1>
              </div>

              <div className="mt-12 md:mt-0 md:max-w-[300px] lg:max-w-[400px] self-start md:pt-[2vw]">
                <p 
                  className="text-[1rem] font-medium leading-[1.6] tracking-tight whitespace-pre-line"
                  style={{ fontFamily: 'Inter, sans-serif', color: '#000000' }}
                >
                  A Problem Solver who builds products with real impact{"\n"}
                  from AI powered tools to Fraud Prevention Systems to{"\n"}
                  Blockchain Infrastructure. Currently raising for Projects{"\n"}
                  that matter.
                </p>
              </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full px-[4vw] z-20">
          <div className="border-t-[1px] border-[#000000] w-full flex flex-col gap-[2px] pt-[2px]">
            <div className="border-t-[1px] border-[#000000] w-full h-[4px]"></div>
            <div className="h-[12px] bg-[#000000] w-full"></div>
          </div>
        </div>

        <style jsx global>{`
          .hero-heading {
            font-family: "Helvetica Neue", Arial, sans-serif;
            font-weight: 900;
            text-transform: uppercase;
          }
            
            @media (max-width: 768px) {
            .hero-heading {
              font-size: 16vw !important;
              line-height: 0.9;
            }
            .hero-heading div {
               transform: none !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
