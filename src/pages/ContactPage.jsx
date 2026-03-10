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
    payload.append("access_key", "YOUR_ACCESS_KEY_HERE");
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
    <div ref={containerRef} className="bg-charcoal text-parchment min-h-screen flex flex-col font-sans">
      
      {/* Intro View (Full Screen Bleed) */}
      {flowStage === 'intro' ? (
        <div className="relative flex-grow w-full flex flex-col items-center justify-center pt-32 pb-24 contact-reveal overflow-hidden">
          {/* Stunning Full Screen Background Image & Overlays */}
          <div className="absolute inset-0 z-0 bg-charcoal">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
              alt="Architectural structure" 
              className="w-full h-full object-cover grayscale opacity-20 hover:opacity-30 transition-all duration-1000 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/70 to-charcoal/95"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal/90"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column: Focused Copy & Scannable Steps */}
            <div className="text-left space-y-12">
              <div>
                <div className="text-sm tracking-[0.2em] text-gold uppercase font-medium mb-6">Inquiry & Partnership</div>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tighter text-[#F0EFEB] drop-shadow-2xl">
                  Let's explore <br/> 
                  <span className="italic text-parchment/70">what's possible.</span>
                </h1>
              </div>

              <div className="space-y-8 max-w-xl">
                {/* Scannable Point 1 */}
                <div className="border-l-[3px] border-gold/40 pl-6 hover:border-gold transition-colors duration-500">
                  <h3 className="font-serif text-2xl text-parchment mb-3 tracking-wide">1. Stop Guessing.</h3>
                  <p className="font-light text-parchment/60 leading-relaxed text-lg">
                    Finding the right partner shouldn't feel like a gamble. We start by unpacking your exact frustrations and identifying the true roadblocks in your way.
                  </p>
                </div>
                
                {/* Scannable Point 2 */}
                <div className="border-l-[3px] border-gold/40 pl-6 hover:border-gold transition-colors duration-500">
                  <h3 className="font-serif text-2xl text-parchment mb-3 tracking-wide">2. The Diagnostic.</h3>
                  <p className="font-light text-parchment/60 leading-relaxed text-lg">
                    Answer four strategic questions. This process forces us to look beyond just "making a video" toward solving real business problems.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                <button 
                  onClick={() => setFlowStage('blueprint')}
                  className="relative overflow-hidden rounded-md border border-gold bg-gold px-10 py-5 text-sm tracking-[0.2em] text-charcoal font-medium uppercase transition-all duration-500 hover:bg-transparent hover:text-gold w-full sm:w-auto shadow-xl shadow-gold/5 group text-center"
                >
                  <span className="relative z-10 transition-colors duration-500">Explore A Partnership</span>
                  <div className="absolute inset-0 h-full w-full translate-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[101%]"></div>
                </button>
                
                <a 
                  href="mailto:hello@verdantoak.com" 
                  className="text-sm tracking-widest text-parchment/40 uppercase hover:text-parchment border-b border-parchment/20 hover:border-parchment/50 pb-1 transition-colors mt-2 sm:mt-0"
                >
                  Or email me directly
                </a>
              </div>
            </div>
            
            {/* Right Column: Lead Magnet Visual Representation */}
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative w-full max-w-sm group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-parchment/5 blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 rounded-full"></div>
                
                {/* The Visual Card */}
                <div className="relative bg-[#111] border border-parchment/10 rounded-xl p-10 shadow-2xl overflow-hidden flex flex-col items-center text-center">
                  
                  {/* The "Field Guide" PDF Thumbnail Mockup */}
                  <div className="w-56 h-72 bg-[#F0EFEB] rounded shadow-2xl flex flex-col items-center justify-center p-6 mb-10 transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] border border-charcoal/20">
                    <div className="w-full text-left mb-8">
                      <div className="w-12 h-[2px] bg-charcoal/80 mb-1.5"></div>
                      <div className="w-6 h-[2px] bg-gold"></div>
                    </div>
                    <h4 className="font-serif text-charcoal text-2xl leading-[1.1] mb-auto text-left w-full tracking-tight">The Four<br/>Failures of<br/>Creative<br/>Execution.</h4>
                    <div className="w-full mt-auto flex justify-between items-end border-t border-charcoal/20 pt-3">
                      <span className="text-[9px] text-charcoal/60 uppercase tracking-widest font-semibold flex flex-col text-left gap-1">
                        <span>Verdant Oak</span>
                        <span className="text-charcoal/40">Field Guide</span>
                      </span>
                      <div className="w-5 h-5 rounded-full border border-gold flex items-center justify-center bg-transparent"><div className="w-1 h-1 bg-charcoal rounded-full"></div></div>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl text-parchment mb-4">The Framework</h3>
                  <p className="font-light text-parchment/50 text-sm leading-relaxed mb-6">
                    Complete the diagnostic to receive your free, printable manual outlining how to bridge the gap between strategy and execution.
                  </p>
                  <span className="text-[10px] tracking-[0.2em] text-gold font-medium uppercase bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
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
