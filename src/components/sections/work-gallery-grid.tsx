import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 'amanda-braga',
    title: 'Amanda Braga',
    description: 'Designing a bold scrolling experience that became a global design reference.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5d110e19-bac3-4098-848a-e0689272dab7-cappen-com/assets/images/Amanda_Braga_1_webp-1024x500-1.webp',
    video: 'https://cappen.com/wp-content/uploads/2025/10/amandabraga1.mp4',
    alignment: 'left',
    width: '45vw',
    marginTop: '0'
  },
  {
    id: 'credit-genie',
    title: 'Credit Genie',
    description: 'Translating design vision into a living platform with fluid animation and scalable code.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5d110e19-bac3-4098-848a-e0689272dab7-cappen-com/assets/images/credit_genie_1-1024x500-11.webp',
    video: 'https://cappen.com/wp-content/uploads/2025/10/CG1.mp4',
    alignment: 'right',
    width: '35vw',
    marginTop: '25vh'
  },
  {
    id: 'jcpm-malls',
    title: 'JCPM Malls',
    description: 'Building a scalable digital ecosystem for one of Brazil’s leading mall groups.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5d110e19-bac3-4098-848a-e0689272dab7-cappen-com/assets/images/JCPM_Malls_1-1024x500-18.webp',
    alignment: 'left',
    width: '35vw',
    marginTop: '15vh'
  },
  {
    id: 'ministry-of-supply',
    title: 'Ministry of Supply',
    description: 'Bringing wearable tech to life through seamless mobile and voice integration.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5d110e19-bac3-4098-848a-e0689272dab7-cappen-com/assets/images/ms1-1024x500-28.webp',
    alignment: 'right',
    width: '45vw',
    marginTop: '10vh'
  }
];

const WorkGalleryGrid = () => {
  return (
    <section className="relative w-full bg-black py-[20vh] px-[4vw] overflow-hidden">
      <div className="container mx-auto max-w-[1440px]">
        {/* Gallery Header (Optional space/anchor) */}
        <div className="mb-[10vh]">
          <h2 className="section-subheading text-white max-w-4xl">
            Handcrafted Experiences for Brands of All Sizes, Worldwide
          </h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="relative flex flex-col gap-[30vh]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex w-full group cursor-none ${
                project.alignment === 'right' ? 'justify-end' : 'justify-start'
              }`}
              style={{ marginTop: project.marginTop }}
            >
              <div 
                className="relative flex flex-col space-y-6"
                style={{ width: project.width }}
              >
                {/* Media Container */}
                <div className="relative aspect-[1024/700] overflow-hidden bg-[#1a1a1a]">
                  {/* Image Background */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out grayscale hover:grayscale-0 hover:scale-110"
                    sizes={project.width}
                    priority={index === 0}
                  />
                  
                  {/* Optional Video Overlay (if available and hovered) */}
                  {project.video && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex flex-col space-y-4 max-w-lg">
                  <div className="flex items-start gap-4">
                    <span className="text-[0.65rem] font-medium text-white/40 mt-1 uppercase tracking-widest">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium text-white mb-2 leading-tight">
                        {project.description}
                      </h3>
                      <p className="text-[0.65rem] font-bold uppercase tracking-widest text-[#808080]">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Lines Overlay (Subtle) */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-12 px-[4vw] gap-5 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="border-r border-[#333333] h-full last:border-r-0" />
        ))}
      </div>
    </section>
  );
};

export default WorkGalleryGrid;