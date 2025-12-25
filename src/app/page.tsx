"use client";

import React from "react";
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import ProjectsList from "@/components/sections/projects-list";
import NarrativeIntro from "@/components/sections/narrative-intro";
import CapabilitiesSection from "@/components/sections/capabilities";
import PhilosophyTech from "@/components/sections/philosophy-tech";
import ProjectShowcase from "@/components/sections/project-showcase";
import FooterContact from "@/components/sections/footer-contact";
import CookieConsent from "@/components/sections/cookie-consent";

export default function Home() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProjectsList />
        <NarrativeIntro />
        <CapabilitiesSection />
        <PhilosophyTech />
        <ProjectShowcase />
      </main>

      <FooterContact />
      <CookieConsent />
    </div>
  );
}
