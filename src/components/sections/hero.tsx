import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#FFFFFF] text-[#000000] overflow-hidden flex flex-col justify-center px-[4vw]">
      <div className="container mx-auto px-0 relative z-10 w-full max-w-full">
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
                A problem-solver who builds products with real impact—{"\n"}
                from AI-powered tools to fraud prevention systems to{"\n"}
                blockchain infrastructure. Currently raising for ventures{"\n"}
                that matter.
              </p>
            </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full px-[4vw]">
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
  );
}
