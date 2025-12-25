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
            <h1 className="text-[8vw] md:text-[6vw] font-[900] leading-[0.9] tracking-[-0.02em] uppercase">
              <div className="block">PRODUCT</div>
              <div className="block translate-x-[2vw]">THINKER</div>
              <div className="block translate-x-[8vw]">STARTUP</div>
              <div className="block translate-x-[8vw]">BUILDER</div>
            </h1>
          </div>
          
          <div className="md:col-span-4 self-end pb-[2vw]">
            <p className="text-[1.1rem] font-medium leading-[1.6] text-white/80 mb-6">
              I don't build for the sake of technology. I build because I see problems worth solving—whether it's democratizing hardware design, preventing billion-dollar fraud, or making cities smarter.
            </p>
            <p className="text-[1.1rem] font-medium leading-[1.6] text-white/60">
              The goal isn't complexity. It's impact and scale.
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
