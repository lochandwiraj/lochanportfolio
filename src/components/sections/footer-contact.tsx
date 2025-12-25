import React from 'react';
import Image from 'next/image';

const FooterContact = () => {
  return (
    <footer id="contact" className="relative bg-black text-white py-[20vh] px-[4vw] overflow-hidden">
      <div className="container mx-auto max-w-full">
        <div className="mb-[10vh]">
          <h2 className="text-[12vw] font-[900] leading-[0.85] tracking-[-0.04em] uppercase break-words">
            LET&apos;S BUILD<br />
            <span className="translate-x-[4vw] inline-block">SOMETHING</span><br />
            <span className="translate-x-[8vw] inline-block">REAL</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-12 border-t border-[#333333]">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <p className="text-[1.25rem] font-medium leading-[1.6] text-white/80 max-w-[500px]">
                Currently exploring: Circuit design automation, fraud prevention systems, and geospatial intelligence.
              </p>
              <p className="mt-8 text-[1.25rem] font-medium leading-[1.6] text-white/60 max-w-[500px]">
                Open to: Co-founder conversations, early-stage investments, and partnerships with teams solving hard problems.
              </p>
            </div>
            
            <a 
              href="mailto:pokkalilochan@gmail.com"
              className="group flex items-center gap-6 w-fit"
            >
              <div className="flex flex-col">
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#808080]">Email me</span>
                <span className="text-[2rem] md:text-[3rem] font-black tracking-tighter group-hover:text-[#808080] transition-colors">
                  pokkalilochan@gmail.com
                </span>
              </div>
            </a>
          </div>

          <div className="lg:col-start-8 lg:col-span-5 flex flex-col justify-between items-end gap-12">
            <nav className="flex flex-col gap-6 items-end w-full">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/lochan-pokkali-458866268/" },
                { label: "GitHub", href: "https://github.com/LochanPS" },
                { label: "Kaggle", href: "https://kaggle.com/lochan-pokkali" }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-[1.5rem] font-black uppercase tracking-tight hover:text-[#808080] transition-colors"
                >
                  {link.label}
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5d110e19-bac3-4098-848a-e0689272dab7-cappen-com/assets/svgs/d-arrow_7c087-2.svg" 
                    alt="" 
                    width={20} 
                    height={20}
                    className="brightness-0 invert -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              ))}
            </nav>

            <a 
              href="https://form.typeform.com/to/Z9NeSfhP"
              target="_blank"
              rel="noopener noreferrer"
              className="Btn"
            >
              START A CONVERSATION 
              <svg className="svgIcon" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

              <div className="text-[0.65rem] text-[#808080] uppercase tracking-widest font-medium">
                © {new Date().getFullYear()} LOCHAN P S ALL RIGHTS RESERVED.
              </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .Btn {
          width: 400px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgb(15, 15, 15);
          border: none;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.1em;
          gap: 12px;
          cursor: pointer;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
          position: relative;
          overflow: hidden;
          transition-duration: .3s;
          text-transform: uppercase;
          text-decoration: none;
        }

        .svgIcon {
          width: 20px;
          height: 20px;
        }

        .Btn::before {
          width: 400px;
          height: 400px;
          position: absolute;
          content: "";
          background-color: white;
          border-radius: 50%;
          left: -100%;
          top: 0;
          transition-duration: .3s;
          mix-blend-mode: difference;
        }

        .Btn:hover::before {
          transition-duration: .3s;
          transform: translate(100%, -50%);
          border-radius: 0;
        }

        .Btn:active {
          transform: translate(5px, 5px);
          transition-duration: .3s;
        }
      `}</style>
    </footer>
  );
};

export default FooterContact;
