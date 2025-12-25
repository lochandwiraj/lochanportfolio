"use client";

import React from 'react';
import Image from 'next/image';

interface ProjectProps {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  details: string[];
  tags: string[];
  link: string;
  index: number;
}

const projects: ProjectProps[] = [
  {
    id: "subscrybe",
    title: "Subscrybe - Blockchain Payments",
    subtitle: "Privacy-first subscription management on Cardano with automated smart contracts and transparent revenue tracking.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-25-at-2.32.16-PM-1766655579382.jpeg",
    description: "Subscrybe - Web3 Payments Platform",
    details: [
      "Finalist - Cardano Blockchain Hackathon",
      "The Problem: Subscription businesses lose 9% revenue to payment failures and lack transparent analytics.",
      "The Solution: Cardano-based subscription vaults with automated payment routing, 2.5% PSP commission model, and real-time merchant analytics.",
      "Market: $650B global subscription economy.",
      "Status: Hackathon finalist, exploring pilot partnerships.",
      "Tech: Cardano L1, Plutus Smart Contracts, Next.js 14"
    ],
    tags: ["BLOCKCHAIN", "FINTECH", "WEB3", "DEFI"],
    link: "https://github.com/potatorangersfr-netizen/Subscrybe",
    index: 1
  },
  {
    id: "bb84",
    title: "BB84 - Quantum Network Simulator",
    subtitle: "Quantum key distribution protocol that detects eavesdroppers through the laws of physics—not just encryption algorithms.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-25-at-2.41.55-PM-1766655590497.jpeg",
    description: "BB84 Quantum Network Simulator",
    details: [
      "Winner - IISc × IBM Qiskit Fall Fest 2024",
      "Built complete web implementation of BB84 protocol with 5 attack scenarios, statistical eavesdropping detection (QBER threshold: 11%), and real-time network visualizations.",
      "The Value: As quantum computers threaten traditional encryption, quantum cryptography offers provable security.",
      "Recognition: IBM Qiskit Advocate (ID: 116901)",
      "Tech: IBM Qiskit, Flask REST API, React, NumPy"
    ],
    tags: ["QUANTUM COMPUTING", "SECURITY", "RESEARCH"],
    link: "https://github.com/LochanPS/bb84_quantum_network",
    index: 2
  },
  {
    id: "limbo",
    title: "LIMBO - Emotional Companion",
    subtitle: "AI companion with circadian rhythms that processes memories during sleep cycles—exploring human-AI emotional interfaces.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-25-at-2.53.30-PM-1766655988401.jpeg",
    description: "LIMBO - Emotional AI Research",
    details: [
      "Built AI system with 4 states: awake → drowsy → dreaming → waking. Processes conversations during sleep cycles, evolves personality based on interactions, and visualizes memory networks in 3D.",
      "Features real-time emotion detection (7 states), therapeutic audio system, and bounded personality evolution (±0.15 parameter shifts).",
      "Built for: Understanding human-AI emotional dynamics.",
      "Tech: React, TypeScript, LangGraph, OpenRouter API, Three.js, Framer Motion"
    ],
    tags: ["AI RESEARCH", "3D", "EMOTIONAL AI"],
    link: "https://github.com/lochandwiraj/ai-dreams-emotional-companion",
    index: 3
  },
  {
    id: "autocda",
    title: "AutoCDA - AI Circuit Designer",
    subtitle: "Designing circuits takes hours. AutoCDA does it in 5 seconds using AI.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-25-at-2.21.11-PM-1766655554236.jpeg",
    description: "AutoCDA - AI Circuit Design Automation",
    details: [
      "Say 'Design a 1kHz low-pass filter' → Get a complete KiCad schematic with calculated component values, detailed explanations, and production-ready files.",
      "The Problem: Hardware engineers waste 60% of their time on repetitive circuit design tasks.",
      "The Solution: Natural language → Working circuits. AI-powered automation that makes hardware design as fast as writing code.",
      "Market: $12B EDA market, 1M+ KiCad users globally.",
      "Status: Beta testing with engineering teams.",
      "Seeking: Seed funding, design tool partnerships.",
      "Tech: Claude 3.5 Sonnet, SKiDL, KiCad API, React"
    ],
    tags: ["AI AUTOMATION", "HARDWARE", "SAAS"],
    link: "https://github.com/lochandwiraj/AutoCDA",
    index: 4
  },
  {
    id: "mithril",
    title: "MITHRIL - WhatsApp Business Automation",
    subtitle: "Businesses lose customers to complicated ordering. MITHRIL makes it simple—no chatbots, just buttons that work.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-25-at-2.26.38-PM-1766655571411.jpeg",
    description: "MITHRIL - WhatsApp Commerce Platform",
    details: [
      "The Problem: Small businesses struggle with expensive, unreliable AI chatbots that confuse customers. They need simple automation that just works.",
      "The Solution: WhatsApp-native platform using button-driven workflows for bookings, orders, payments, and loyalty. Reliable, low-cost, easy to deploy. AI optional, not required.",
      "Use Cases: Restaurants (menu ordering), salons (appointment booking), retail (product catalog + payments), services (booking + reminders).",
      "Market: 200M+ businesses use WhatsApp globally, $3.2B conversational commerce market.",
      "Status: MVP development, validating with local businesses.",
      "Seeking: Pre-seed funding, WhatsApp Business API partnerships.",
      "Tech: WhatsApp Business API, Webhook Automation, Payment Gateway Integration, Simple UI Builder"
    ],
    tags: ["SAAS", "COMMERCE", "WHATSAPP"],
    link: "#",
    index: 5
  },
  {
    id: "argus",
    title: "ARGUS - Smart City Platform",
    subtitle: "AI-powered geospatial intelligence that tells city planners exactly where infrastructure is needed—backed by real data.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-25-at-2.49.50-PM-1766655608129.jpeg",
    description: "ARGUS - Urban Planning Intelligence",
    details: [
      "The Problem: Cities waste billions building infrastructure in the wrong locations due to poor data analysis.",
      "The Solution: Process millions of geospatial data points (hospitals, schools, parks, lakes) to identify underserved areas and recommend optimal locations for new facilities.",
      "Bengaluru Demo: Analyzed 2.1M data points across 1,961 hospitals, 1,378 schools, 507 parks, 168 lakes— identified 194 critical infrastructure gaps with AI-powered recommendations.",
      "Market: $85B smart city market, 500+ cities globally.",
      "Status: Pilot-ready, seeking government partnerships.",
      "Seeking: Pre-seed funding, smart city partnerships.",
      "Tech: React, OpenStreetMap, Geospatial AI, Leaflet"
    ],
    tags: ["AI", "GOVTECH", "SMART CITIES", "SAAS"],
    link: "https://github.com/dwiraj6/UrbanvisionAI",
    index: 6
  },
  {
    id: "themis",
    title: "THEMIS - Multimodal Banking Fraud Prevention",
    subtitle: "Banks lose $32B annually to fraud. THEMIS catches it before it happens—across every touchpoint.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766656855510.png",
    description: "THEMIS - AI Fraud Prevention",
    details: [
      "The Problem: Traditional fraud detection has 70% false positive rates and misses sophisticated multi-channel attacks.",
      "The Solution: Multimodal AI analyzing transactions, biometrics, behavior patterns, documents, and device fingerprints simultaneously across payments, loans, KYC, and account activities.",
      "Detects: Account takeovers, synthetic identities, money laundering patterns, payment fraud in real-time.",
      "Market: $63B fraud detection market growing 25% YoY.",
      "Status: Early development, validating with fintech advisors.",
      "Seeking: Seed funding, banking partnerships, fraud experts.",
      "Tech: PyTorch, TensorFlow, Multi-modal Transformers, Real-time ML Pipelines"
    ],
    tags: ["FINTECH", "AI/ML", "ENTERPRISE"],
    link: "#",
    index: 7
  },
  {
    id: "moria",
    title: "MORIA - Quantum ML for Finance",
    subtitle: "Exploring quantum algorithms for portfolio optimization—where quantum advantage might actually matter.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-25-at-2.52.35-PM-1766655617250.jpeg",
    description: "MORIA - Quantum ML for Finance",
    details: [
      "Active research project testing quantum algorithms (QAOA, VQE) against classical baselines for portfolio optimization and financial feature extraction.",
      "Building hybrid quantum-classical pipelines and benchmarking real-world performance on stock data.",
      "Learning: Where quantum helps, where it doesn't, and what problems actually benefit from quantum speedup.",
      "Tech: IBM Qiskit, PennyLane, scikit-learn, yfinance"
    ],
    tags: ["QUANTUM", "FINANCE", "RESEARCH", "ML"],
    link: "https://github.com/LochanPS/Quantum-Computing-for-Finance---Learning-Journey",
    index: 8
  }
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="bg-black py-20">
      {projects.map((project) => (
        <div 
          key={project.id} 
          id={`project-${project.id}`}
          className="project-section min-h-[80vh] flex flex-col justify-center border-t border-[#333333] py-24 px-[4vw]"
        >
          <div className="project-split grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Side - Image */}
            <div className="lg:col-span-7">
              <div className="project-image relative aspect-video overflow-hidden bg-black flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-contain"
                    priority={project.index <= 2}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h3 className="text-[3vw] md:text-[2.5vw] font-black uppercase leading-tight tracking-tighter mb-4">
                  {project.subtitle}
                </h3>
                <p className="text-[1rem] font-bold uppercase tracking-widest text-[#808080]">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {project.details.map((detail, i) => (
                  <p key={i} className="text-[1.1rem] leading-relaxed text-white/80">
                    {detail}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 border border-white/20 text-[0.7rem] font-bold tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              {project.link !== "#" && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="group flex items-center gap-4 text-[0.8rem] font-black uppercase tracking-widest hover:text-[#808080] transition-colors"
                >
                  View Project
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectShowcase;
