"use client";

import React, { useState, useEffect } from "react";

/**
 * CookieConsent Component
 * 
 * A minimalist cookie consent banner with a black background, 
 * strictly adhering to the "dark" theme requirement.
 * Features a "We use cookies" message and an "OK" button with hover animations.
 */
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem("cookie-consent-accepted");
    if (!consent) {
      // Small delay to ensure smooth entry
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section 
      className="fixed bottom-5 left-5 z-[9999] flex flex-col pointer-events-auto"
      data-nosnippet=""
      data-component="cookie-consent"
    >
      <div 
        className="bg-black border border-[#333333] p-5 md:p-6 w-[calc(100vw-40px)] max-w-[320px] shadow-2xl transition-all duration-500 ease-out translate-y-0 opacity-100"
        style={{ borderRadius: "0px" }}
      >
        <div className="flex flex-col gap-5">
          <header>
            <h3 className="text-white font-display font-black text-lg uppercase leading-tight tracking-tight">
              We use cookies — the digital kind 🍪
            </h3>
          </header>

          <section className="flex items-center">
            <button 
              onClick={handleAccept}
              className="group relative overflow-hidden bg-white text-black px-6 py-2.5 font-sans font-medium text-xs uppercase tracking-widest transition-colors duration-300 hover:bg-black hover:text-white border border-white"
              style={{ borderRadius: "0px" }}
            >
              <span className="relative z-10">OK</span>
              {/* Subtle hover background slide effect if desired, but minimalist primary hover is cleaner */}
              <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0" />
            </button>
          </section>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        [data-component="cookie-consent"] {
          animation: slideInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        /* Hover animation specific for the "OK" button text and background */
        button.accept-all-bt span {
          transition: transform 0.3s ease;
          display: inline-block;
        }
        button.accept-all-bt:hover span {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default CookieConsent;