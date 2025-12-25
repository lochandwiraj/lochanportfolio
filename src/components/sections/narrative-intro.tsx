import React from 'react';

const NarrativeIntro: React.FC = () => {
  return (
    <section 
      id="about"
      className="relative flex flex-col justify-center bg-[#000000] text-[#FFFFFF]"
      style={{
        padding: '20vh 4vw',
        minHeight: '100vh',
      }}
    >
      <div className="container max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
              <h2 
                className="font-black leading-[0.85] tracking-[-0.04em] uppercase"
                style={{
                  fontSize: 'clamp(3rem, 10vw, 8rem)',
                }}
              >
                <div className="block">PRODUCT THINKER</div>
                <div className="block translate-x-[8vw]">STARTUP BUILDER</div>
              </h2>

          </div>
          
          <div className="md:col-span-4 self-end pb-[2vw]">
            <p className="text-[1.25rem] md:text-[1.5rem] font-medium leading-[1.4] tracking-tight max-w-[400px]">
              I don&apos;t build for the sake of technology. I build because I see problems worth solving—whether it&apos;s democratizing hardware design, preventing billion-dollar fraud, or making cities smarter.
            </p>
            <p className="mt-6 text-[1.25rem] md:text-[1.5rem] font-medium leading-[1.4] tracking-tight text-[#808080]">
              The goal isn&apos;t complexity. It&apos;s impact and scale.
            </p>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 w-full h-[1px] bg-[#333333]" 
        aria-hidden="true" 
      />
    </section>
  );
};

export default NarrativeIntro;
