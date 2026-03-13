import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectBlueprint from '../components/contact/ProjectBlueprint';
import PriorityMatrix from '../components/contact/PriorityMatrix';
import LeadMagnet from '../components/contact/LeadMagnet';

export default function ContactPage() {
  const [flowStage, setFlowStage] = useState('intro'); // 'intro', 'blueprint', 'matrix', 'lead_capture', 'success'
  const [blueprintData, setBlueprintData] = useState(null);
  const [matrixData, setMatrixData] = useState(null);
  const [status, setStatus] = useState('');
  
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
  }, { scope: containerRef, dependencies: [flowStage] });

  const handleBlueprintComplete = (data) => {
    setBlueprintData(data);
    setFlowStage('matrix');
  };

  const handleMatrixComplete = (data) => {
    setMatrixData(data);
    setFlowStage('lead_capture');
  };

  const submitFinalLead = async (finalData) => {
    setStatus("Sending....");
    
    // Construct the payload for Web3Forms
    const payload = new FormData();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error("Web3Forms Access Key is missing. Please check your .env file.");
      setStatus("Configuration error. Please contact the administrator.");
      return;
    }
    
    payload.append("access_key", accessKey);
    payload.append("name", finalData.name);
    payload.append("email", finalData.email);
    payload.append("Inquiry Type", "Combined Blueprint & Priority Matrix");
    
    if (finalData.projectDetails) {
        payload.append("Additional Details", finalData.projectDetails);
    }

    if (blueprintData) {
        payload.append("Tension", blueprintData.tension);
        payload.append("Outcome", blueprintData.outcome);
        payload.append("Obstacle", blueprintData.obstacle);
    }
    if (matrixData) {
        payload.append("Ranked Priorities", matrixData.rankings.join(' > '));
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      });

      const data = await response.json();

      if (data.success) {
        setStatus("");
        setFlowStage('success');
      } else {
        console.error("Error", data);
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div ref={containerRef} className={`min-h-screen flex flex-col font-sans transition-colors duration-1000 ${flowStage === 'intro' ? 'bg-[#F0EFEB] text-charcoal' : 'bg-charcoal text-parchment'}`}>
      
      {/* Intro View (Full Screen Bleed) */}
      {flowStage === 'intro' ? (
        <div className="relative flex-grow w-full flex flex-col items-center justify-center pt-32 pb-24 contact-reveal overflow-hidden">
          {/* Stunning Full Screen Background Image, Overlays & Grain */}
          <div className="absolute inset-0 z-0 bg-[#F0EFEB]">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
              alt="Architectural structure" 
              className="w-full h-full object-cover opacity-20 hover:opacity-30 transition-all duration-1000 mix-blend-hard-light saturate-50"
            />
            {/* Grit / Grain Texture */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            {/* Gradients to ensure text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#F0EFEB]/95 via-[#F0EFEB]/60 to-[#F0EFEB]/95"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F0EFEB] via-transparent to-[#F0EFEB]/80"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Focused Copy & Scannable Steps */}
            <div className="text-left space-y-12">
              <div>
                <div className="text-sm tracking-[0.2em] text-gold uppercase font-medium mb-6">Inquiry & Partnership</div>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tighter text-charcoal drop-shadow-sm">
                  Let's get clear on <br/> 
                  <span className="italic text-charcoal/70">what is actually in the way.</span>
                </h1>
              </div>

              <div className="space-y-8 max-w-xl">
                {/* Scannable Point 1 */}
                <div className="border-l-[3px] border-charcoal/20 pl-6 hover:border-charcoal transition-colors duration-500">
                  <h3 className="font-serif text-2xl text-charcoal mb-3 tracking-wide">1. Name the real problem.</h3>
                  <p className="font-light text-charcoal/70 leading-relaxed text-lg">
                    Finding the right partner should not feel like a gamble. We start by unpacking your friction and identifying the real roadblocks.
                  </p>
                </div>
                
                {/* Scannable Point 2 */}
                <div className="border-l-[3px] border-charcoal/20 pl-6 hover:border-charcoal transition-colors duration-500">
                  <h3 className="font-serif text-2xl text-charcoal mb-3 tracking-wide">2. Run the diagnostic.</h3>
                  <p className="font-light text-charcoal/70 leading-relaxed text-lg">
                    Answer four strategic questions. We use that to move past "make a video" and toward the problem that needs solving.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                <button 
                  onClick={() => setFlowStage('blueprint')}
                  className="relative overflow-hidden rounded-md border border-charcoal bg-charcoal px-10 py-5 text-sm tracking-[0.2em] text-parchment font-medium uppercase transition-all duration-500 hover:bg-transparent hover:text-charcoal w-full sm:w-auto shadow-xl shadow-charcoal/5 group text-center"
                >
                  <span className="relative z-10 transition-colors duration-500">Start the Diagnostic</span>
                  <div className="absolute inset-0 h-full w-full translate-y-0 bg-charcoal transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[101%]"></div>
                </button>
                
                <a 
                  href="mailto:hello@verdantoak.com" 
                  className="text-sm tracking-widest text-charcoal/50 uppercase hover:text-charcoal border-b border-charcoal/20 hover:border-charcoal/50 pb-1 transition-colors mt-2 sm:mt-0"
                >
                  Or email me directly
                </a>
              </div>
            </div>
            
            {/* Right Column: Lead Magnet Visual & Photography Collage */}
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 items-center h-full group">
              
              {/* Background Ambient Photos for Visual Interest */}
              <div className="absolute -top-6 -left-8 w-36 lg:w-48 h-48 lg:h-64 z-0 hidden sm:block group-hover:-translate-y-6 group-hover:-translate-x-4 group-hover:rotate-[-12deg] transition-all duration-1000 pointer-events-none origin-bottom-right">
                <img 
                  src="/images/South Africa Images/SA-By_Michael_Proctor-3.jpg_compressed.JPEG" 
                  alt="Creative process"
                  className="w-full h-full object-cover rounded-sm shadow-xl border-[6px] lg:border-[8px] border-white transform rotate-[-6deg]"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-4 w-40 lg:w-56 h-32 lg:h-40 z-0 hidden sm:block group-hover:translate-y-6 group-hover:-translate-x-2 group-hover:rotate-[8deg] transition-all duration-1000 pointer-events-none origin-top-right">
                <img 
                  src="/images/misc photos/Nicaragua-laughing-friend-mentoring-workign-coffeeshop-2025-232.jpg" 
                  alt="Collaboration"
                  className="w-full h-full object-cover rounded-sm shadow-xl border-[6px] lg:border-[8px] border-white transform rotate-[4deg]"
                />
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 w-32 lg:w-40 h-44 lg:h-56 z-0 hidden xl:block group-hover:translate-x-8 group-hover:rotate-[15deg] transition-all duration-1000 pointer-events-none origin-left">
                <img 
                  src="/images/misc photos/Oxford-20203-guardening_shed_working-40.jpg" 
                  alt="Craft"
                  className="w-full h-full object-cover rounded-sm shadow-xl border-[6px] lg:border-[8px] border-white transform rotate-[8deg]"
                />
              </div>

              {/* The Visual Card */}
              <div className="relative w-full max-w-sm z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-charcoal/10 to-charcoal/5 blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 rounded-full"></div>
                
                {/* The Visual Card */}
                <div className="relative bg-white border border-charcoal/10 rounded-xl p-10 shadow-2xl overflow-hidden flex flex-col items-center text-center">
                  
                  {/* The "Field Guide" PDF Thumbnail Mockup */}
                  <div className="w-56 h-72 bg-[#F0EFEB] rounded shadow-sm flex flex-col items-center justify-center p-6 mb-10 transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] border border-charcoal/10">
                    <div className="w-full text-left mb-8">
                      <div className="w-12 h-[2px] bg-charcoal/80 mb-1.5"></div>
                      <div className="w-6 h-[2px] bg-gold"></div>
                    </div>
                    <h4 className="font-serif text-charcoal text-2xl leading-[1.1] mb-auto text-left w-full tracking-tight">The Four<br/>Failures of<br/>Creative<br/>Execution.</h4>
                    <div className="w-full mt-auto flex justify-between items-end border-t border-charcoal/10 pt-3">
                      <span className="text-[9px] text-charcoal/60 uppercase tracking-widest font-semibold flex flex-col text-left gap-1">
                        <span>Verdant Oak</span>
                        <span className="text-charcoal/40">Field Guide</span>
                      </span>
                      <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center bg-transparent"><div className="w-1 h-1 bg-charcoal rounded-full"></div></div>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl text-charcoal mb-4">The Framework</h3>
                  <p className="font-light text-charcoal/70 text-sm leading-relaxed mb-6">
                    Complete the diagnostic to receive your free, printable manual outlining how to bridge the gap between strategy and execution.
                  </p>
                  <span className="text-[10px] tracking-[0.2em] text-charcoal font-medium uppercase bg-charcoal/5 px-4 py-2 rounded-full border border-charcoal/10">
                    Free Resource Download
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        <div className="pt-32 pb-24 px-4 md:px-8 lg:px-16 w-full max-w-4xl mx-auto flex-grow flex flex-col">
          {/* Dynamic Flow Rendering */}
        {flowStage === 'blueprint' && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <button 
              onClick={() => setFlowStage('intro')} 
              className="text-xs tracking-widest text-parchment/40 uppercase hover:text-parchment inline-flex items-center gap-2 mb-4"
            >
              ← Back to Intro
            </button>
            <ProjectBlueprint onComplete={handleBlueprintComplete} />
          </div>
        )}

        {flowStage === 'matrix' && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <button 
              onClick={() => setFlowStage('blueprint')} 
              className="text-xs tracking-widest text-parchment/40 uppercase hover:text-parchment inline-flex items-center gap-2 mb-4"
            >
              ← Back to Blueprint
            </button>
            <PriorityMatrix onComplete={handleMatrixComplete} />
          </div>
        )}

        {flowStage === 'lead_capture' && (
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
            <button 
              onClick={() => setFlowStage('matrix')} 
              className="text-xs tracking-widest text-parchment/40 uppercase hover:text-parchment inline-flex items-center gap-2 mb-4"
            >
              ← Back to Priorities
            </button>
            <LeadMagnet 
              data={{ blueprint: blueprintData, matrix: matrixData }} 
              componentType="combined" 
              onSubmitLead={submitFinalLead} 
            />
            {status && (
              <p className="text-sm tracking-wide text-gold mt-4">{status}</p>
            )}
          </div>
        )}

        {/* Success State */}
        {flowStage === 'success' && (
          <div className="bg-parchment/5 border border-gold/30 p-12 md:p-20 rounded-lg contact-reveal text-center flex flex-col items-center justify-center min-h-[50vh]">
            <div className="w-20 h-20 rounded-full border border-gold flex items-center justify-center mb-8">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-parchment mb-6">Inquiry Received.</h3>
            <p className="text-parchment/70 font-light text-lg max-w-lg mb-12">
              Your project details have been sent directly to my desk. I will review them and be in touch shortly to schedule a clarity call.
            </p>
            
            <a 
              href="/Verdant_Oak_Field_Guide_Mock.pdf.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-md border border-gold px-10 py-4 text-sm tracking-[0.2em] text-gold uppercase transition-all duration-500 hover:text-charcoal cursor-pointer block"
            >
              <span className="relative z-10 transition-colors duration-500">View & Download Your Framework</span>
              <div className="absolute inset-0 h-full w-full translate-y-[101%] bg-gold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
            </a>
            <p className="text-xs text-parchment/40 mt-4 tracking-widest uppercase">HTML / Printable PDF</p>
          </div>
        )}

        </div>
      )}
    </div>
  );
}
