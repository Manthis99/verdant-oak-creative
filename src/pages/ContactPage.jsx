import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import DiagnosticChat from '../components/contact/DiagnosticChat';

export default function ContactPage() {
  const containerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    gsap.fromTo('.contact-reveal',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
    );
  }, { scope: containerRef, dependencies: [] });

  const scrollToDiagnostic = () => {
    const diagnosticSection = document.getElementById('diagnostic-form');
    diagnosticSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div ref={containerRef} className="font-sans">

      {/* Intro View (Full Screen Bleed) */}
      <section className="contact-reveal relative flex min-h-0 w-full flex-col items-center justify-center overflow-hidden bg-[#F0EFEB] pb-16 pt-28 text-charcoal sm:min-h-screen sm:pb-24 sm:pt-32">
        {/* Stunning Full Screen Background Image, Overlays & Grain */}
        <div className="absolute inset-0 z-0 bg-[#F0EFEB]">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=76&w=1400&auto=format&fit=crop"
            alt="Architectural structure"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-20 hover:opacity-30 transition-all duration-1000 mix-blend-hard-light saturate-50"
          />
          {/* Grit / Grain Texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          {/* Gradients to ensure text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0EFEB]/95 via-[#F0EFEB]/60 to-[#F0EFEB]/95"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F0EFEB] via-transparent to-[#F0EFEB]/80"></div>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">

          {/* Left Column: Focused Copy & Scannable Steps */}
          <div className="space-y-8 text-left sm:space-y-12">
            <div>
              <div className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-gold sm:mb-6 sm:text-sm">Inquiry & Partnership</div>
              <h1 className="font-serif text-[3.2rem] leading-[0.98] tracking-tighter text-charcoal drop-shadow-sm sm:text-6xl md:text-7xl lg:text-[5rem] lg:leading-[1.05]">
                Let's get clear on <br/>
                <span className="italic text-charcoal/70">what is actually in the way.</span>
              </h1>
            </div>

            <div className="max-w-xl space-y-6 sm:space-y-8">
              {/* Scannable Point 1 */}
              <div className="border-l-[3px] border-charcoal/20 pl-5 transition-colors duration-500 hover:border-charcoal sm:pl-6">
                <h3 className="mb-2 font-serif text-[1.35rem] tracking-wide text-charcoal sm:mb-3 sm:text-2xl">1. Name the real problem.</h3>
                <p className="text-base font-light leading-relaxed text-charcoal/70 sm:text-lg">
                  Finding the right partner should not feel like a gamble. We start by unpacking your friction and identifying the real roadblocks.
                </p>
              </div>

              {/* Scannable Point 2 */}
              <div className="border-l-[3px] border-charcoal/20 pl-5 transition-colors duration-500 hover:border-charcoal sm:pl-6">
                <h3 className="mb-2 font-serif text-[1.35rem] tracking-wide text-charcoal sm:mb-3 sm:text-2xl">2. Run the diagnostic.</h3>
                <p className="text-base font-light leading-relaxed text-charcoal/70 sm:text-lg">
                  Chat with the automated assistant to frame your tension. We use that to move past "make a video" and toward the real problem.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-5 pt-2 sm:flex-row sm:items-center sm:gap-8 sm:pt-4">
              <button
                type="button"
                onClick={scrollToDiagnostic}
                className="group relative min-h-12 w-full overflow-hidden rounded-md border border-charcoal bg-charcoal px-7 py-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-parchment shadow-xl shadow-charcoal/5 transition-colors duration-500 hover:bg-transparent hover:text-charcoal sm:w-auto sm:px-10 sm:py-5 sm:text-sm"
              >
                <span className="relative z-10 transition-colors duration-500">Start the Diagnostic</span>
                <div className="absolute inset-0 h-full w-full translate-y-0 bg-charcoal transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[101%]"></div>
              </button>

              <Link
                to="/book"
                className="inline-flex min-h-11 items-center justify-center border-b border-charcoal/20 text-xs uppercase tracking-widest text-charcoal/50 transition-colors hover:border-charcoal/50 hover:text-charcoal sm:text-sm"
              >
                Schedule a call
              </Link>
            </div>
          </div>

          {/* Right Column: Lead Magnet Visual & Photography Collage */}
          <div className="group relative hidden h-full items-center justify-center lg:flex lg:justify-end">

            {/* Background Ambient Photos for Visual Interest */}
            <div className="absolute -top-6 -left-8 w-36 lg:w-48 h-48 lg:h-64 z-0 hidden sm:block group-hover:-translate-y-6 group-hover:-translate-x-4 group-hover:rotate-[-12deg] transition-all duration-1000 pointer-events-none origin-bottom-right">
              <img
                src="/images/optimized/south-africa-field-640.webp"
                alt="Creative process"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-sm shadow-xl border-[6px] lg:border-[8px] border-white transform rotate-[-6deg]"
              />
            </div>

            <div className="absolute -bottom-8 -left-4 w-40 lg:w-56 h-32 lg:h-40 z-0 hidden sm:block group-hover:translate-y-6 group-hover:-translate-x-2 group-hover:rotate-[8deg] transition-all duration-1000 pointer-events-none origin-top-right">
              <img
                src="/images/optimized/work-nicaragua-800.webp"
                alt="Collaboration"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-sm shadow-xl border-[6px] lg:border-[8px] border-white transform rotate-[4deg]"
              />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-32 lg:w-40 h-44 lg:h-56 z-0 hidden xl:block group-hover:translate-x-8 group-hover:rotate-[15deg] transition-all duration-1000 pointer-events-none origin-left">
              <img
                src="/images/optimized/contact-craft-640.webp"
                alt="Craft"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-sm shadow-xl border-[6px] lg:border-[8px] border-white transform rotate-[8deg]"
              />
            </div>

            {/* The Visual Card */}
            <div className="relative w-full max-w-sm z-10 transition-transform duration-700 group-hover:scale-[1.02]">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-charcoal/10 to-charcoal/5 blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 rounded-full"></div>

              {/* The Visual Card */}
              <div className="relative bg-white border border-charcoal/10 rounded-xl p-10 shadow-2xl overflow-hidden flex flex-col items-center text-center">

                {/* The field guide PDF thumbnail mockup */}
                <div className="w-56 h-72 bg-[#F0EFEB] rounded shadow-sm flex flex-col items-center justify-center p-6 mb-10 transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] border border-charcoal/10">
                  <div className="w-full text-left mb-8">
                     <div className="w-12 h-[2px] bg-charcoal/80 mb-1.5"></div>
                     <div className="w-6 h-[2px] bg-gold"></div>
                  </div>
                  <h4 className="font-serif text-charcoal text-[1.55rem] leading-[1.02] mb-auto text-left w-full tracking-tight">
                    Why a Great<br/>Video Is a<br/>Waste of<br/>Money
                  </h4>
                  <div className="w-full mt-auto flex justify-between items-end border-t border-charcoal/10 pt-3">
                    <span className="text-[9px] text-charcoal/60 uppercase tracking-widest font-semibold flex flex-col text-left gap-1">
                      <span>Verdant Oak</span>
                      <span className="text-charcoal/40">Field Guide</span>
                    </span>
                    <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center bg-transparent"><div className="w-1 h-1 bg-charcoal rounded-full"></div></div>
                  </div>
                </div>

                <h3 className="font-serif text-3xl text-charcoal mb-4">The Field Guide</h3>
                <p className="font-light text-charcoal/70 text-sm leading-relaxed mb-6">
                  Chat with the diagnostic agent to get a free printable guide on the four places creative work usually breaks before it ever has a chance to help.
                </p>
                <span className="text-[10px] tracking-[0.2em] text-charcoal font-medium uppercase bg-charcoal/5 px-4 py-2 rounded-full border border-charcoal/10">
                  Free Resource Download
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded AI Chatbot Diagnostic Section */}
      <section id="diagnostic-form" className="relative z-20 w-full scroll-mt-20 border-t border-white/5 bg-[#111111] px-3 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-24 sm:px-4 md:px-8 md:pb-32 lg:px-16">
        <div className="mx-auto mb-8 max-w-4xl space-y-4 text-center sm:mb-12 sm:space-y-6">
            <h2 className="font-serif text-3xl text-parchment sm:text-4xl md:text-5xl lg:text-6xl">Diagnostic AI</h2>
            <p className="text-base font-light text-parchment/60 sm:text-lg">Use the chat interface below to frame the problem.</p>
        </div>
        <DiagnosticChat />
      </section>

    </div>
  );
}
