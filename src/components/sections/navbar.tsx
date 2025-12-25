"use client";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { label: "PROJECTS", href: "#projects" },
    { label: "ABOUT", href: "#about" },
    { label: "VENTURES", href: "#ventures" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      {/* Currently Exploring Banner */}
      <div className="fixed top-0 left-0 w-full z-[1100] bg-white text-black py-2 overflow-hidden border-b border-black">
        <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap px-4">
          <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em]">
            ⚡ Currently exploring seed funding for AutoCDA, UrbanVisionAI, and Fraud Shield &nbsp; • &nbsp; ⚡ Currently exploring seed funding for AutoCDA, UrbanVisionAI, and Fraud Shield &nbsp; • &nbsp; ⚡ Currently exploring seed funding for AutoCDA, UrbanVisionAI, and Fraud Shield &nbsp; • &nbsp;
          </span>
        </div>
      </div>

      <header 
        className="fixed top-[32px] md:top-[40px] left-0 w-full h-[80px] z-[1000] flex items-center justify-between border-b border-[#333333] bg-black/80 backdrop-blur-nav px-[4vw]"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Logo Section */}
        <div className="flex items-center">
          <a 
            href="/" 
            className="relative block" 
            aria-label="Lochan Logo"
          >
            <span className="text-white font-black text-2xl tracking-tighter">LOCHAN.</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-[4vw]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative flex items-center gap-2 py-2"
            >
              <div className="flex flex-col overflow-hidden">
                 <span className="nav-link text-white transition-transform duration-500 ease-out group-hover:-translate-y-full">
                  {link.label}
                </span>
                <span className="nav-link absolute top-0 left-0 text-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                  {link.label}
                </span>
              </div>
              
              {/* Arrow Icon */}
              <div className="relative w-3 h-3 transition-transform duration-300 group-hover:rotate-45">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5d110e19-bac3-4098-848a-e0689272dab7-cappen-com/assets/svgs/d-arrow_7c087-2.svg"
                  alt=""
                  fill
                  className="brightness-0 invert object-contain"
                />
              </div>

              {/* Hover Underline effect */}
              <div className="absolute bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2">
          <span className="w-6 h-[1px] bg-white"></span>
          <span className="w-6 h-[1px] bg-white"></span>
          <span className="w-6 h-[1px] bg-white"></span>
        </div>
      </header>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
