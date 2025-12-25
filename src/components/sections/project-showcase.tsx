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
    id: "autocda",
    title: "AutoCDA - AI Circuit Designer",
    subtitle: "Designing circuits takes hours. AutoCDA does it in 5 seconds using AI.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
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
    tags: ["AI AUTOMATION", "HARDWARE", "SAAS", "SEED STAGE"],
    link: "https://github.com/lochandwiraj/AutoCDA",
    index: 1
  },
  {
    id: "subscrybe",
    title: "Subscrybe - Blockchain Payments",
    subtitle: "Privacy-first subscription management on Cardano with automated smart contracts and transparent revenue tracking.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2064",
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
    index: 2
  },
  {
    id: "bb84",
    title: "BB84 Quantum Network",
    subtitle: "Quantum key distribution protocol that detects eavesdroppers through the laws of physics—not just encryption algorithms.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2070",
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
    index: 3
  },
  {
    id: "urbanvisionai",
    title: "UrbanVisionAI - Smart City Platform",
    subtitle: "AI-powered geospatial intelligence that tells city planners exactly where infrastructure is needed—backed by real data.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2070",
    description: "UrbanVisionAI - Urban Planning Intelligence",
    details: [
      "The Problem: Cities waste billions building infrastructure in the wrong locations due to poor data analysis.",
      "The Solution: Process millions of geospatial data points (hospitals, schools, parks, lakes) to identify underserved areas and recommend optimal locations for new facilities.",
      "Bengaluru Demo: Analyzed 2.1M data points across 1,961 hospitals, 1,378 schools, 507 parks, 168 lakes— identified 194 critical infrastructure gaps with AI-powered recommendations.",
      "Market: $85B smart city market, 500+ cities globally.",
      "Status: Pilot-ready, seeking government partnerships.",
      "Seeking: Pre-seed funding, smart city partnerships.",
      "Tech: React, OpenStreetMap, Geospatial AI, Leaflet"
    ],
    tags: ["AI", "GOVTECH", "SMART CITIES", "SAAS", "PRE-SEED"],
    link: "https://github.com/dwiraj6/UrbanvisionAI",
    index: 4
  },
  {
    id: "fraudshield",
    title: "Multimodal Banking Fraud Prevention",
    subtitle: "Banks lose $32B annually to fraud. This system catches it before it happens—across every touchpoint.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070",
    description: "Fraud Shield - AI Fraud Prevention",
    details: [
      "The Problem: Traditional fraud detection has 70% false positive rates and misses sophisticated multi-channel attacks.",
      "The Solution: Multimodal AI analyzing transactions, biometrics, behavior patterns, documents, and device fingerprints simultaneously across payments, loans, KYC, and account activities.",
      "Detects: Account takeovers, synthetic identities, money laundering patterns, payment fraud in real-time.",
      "Market: $63B fraud detection market growing 25% YoY.",
      "Status: Early development, validating with fintech advisors.",
      "Seeking: Seed funding, banking partnerships, fraud experts.",
      "Tech: PyTorch, TensorFlow, Multi-modal Transformers, Real-time ML Pipelines"
    ],
    tags: ["FINTECH", "AI/ML", "ENTERPRISE", "SEED STAGE"],
    link: "#",
    index: 5
  },
  {
    id: "aidreams",
    title: "AI Dreams - Emotional Companion",
    subtitle: "AI companion with circadian rhythms that processes memories during sleep cycles—exploring human-AI emotional interfaces.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    description: "AI Dreams - Emotional AI Research",
    details: [
      "Built AI system with 4 states: awake → drowsy → dreaming → waking. Processes conversations during sleep cycles, evolves personality based on interactions, and visualizes memory networks in 3D.",
      "Features real-time emotion detection (7 states), therapeutic audio system, and bounded personality evolution (±0.15 parameter shifts).",
      "Built for: Understanding human-AI emotional dynamics.",
      "Tech: React, TypeScript, LangGraph, OpenRouter API, Three.js, Framer Motion"
    ],
    tags: ["AI RESEARCH", "EXPERIMENTAL", "3D", "EMOTIONAL AI"],
    link: "https://github.com/lochandwiraj/ai-dreams-emotional-companion",
    index: 6
  },
  {
    id: "quantumml",
    title: "Quantum ML for Finance",
    subtitle: "Exploring quantum algorithms for portfolio optimization—where quantum advantage might actually matter.",
    image: "https://images.unsplash.com/photo-1611974714658-66d2df974fd8?auto=format&fit=crop&q=80&w=2070",
    description: "Quantum ML for Finance",
    details: [
      "Active research project testing quantum algorithms (QAOA, VQE) against classical baselines for portfolio optimization and financial feature extraction.",
      "Building hybrid quantum-classical pipelines and benchmarking real-world performance on stock data.",
      "Learning: Where quantum helps, where it doesn't, and what problems actually benefit from quantum speedup.",
      "Tech: IBM Qiskit, PennyLane, scikit-learn, yfinance"
    ],
    tags: ["QUANTUM", "FINANCE", "RESEARCH", "ML"],
    link: "https://github.com/LochanPS/Quantum-Computing-for-Finance---Learning-Journey",
    index: 7
  }
];

const ProjectShowcase: React.FC = () => {
  return (
    <section className="bg-black py-20">
      {projects.map((project, idx) => (
        <div 
          key={project.id} 
          className="min-h-screen flex flex-col justify-center border-t border-[#333333] py-24 px-[4vw]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Side - Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video overflow-hidden group">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-8 left-8">
                  <span className="text-[12vw] font-black leading-none text-white/10 select-none">
                    0{project.index}
                  </span>
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
