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
    <div className="min-h-screen bg-charcoal text-parchment pt-32 pb-24 px-4 md:px-8 lg:px-16" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        
        {/* Intro View */}
        {flowStage === 'intro' && (
          <div className="relative min-h-[75vh] flex flex-col items-center justify-center text-center p-8 md:p-16 contact-reveal rounded-2xl overflow-hidden mt-4 shadow-2xl">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0 bg-charcoal">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
                alt="Architectural structure" 
                className="w-full h-full object-cover grayscale opacity-30 hover:grayscale-0 transition-all duration-1000 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-transparent opacity-80"></div>
            </div>
            
            {/* Content Payload */}
            <div className="relative z-10 max-w-3xl space-y-10">
              <div className="text-sm tracking-[0.2em] text-gold uppercase font-medium">Inquiry</div>
              
              <h1 className="font-serif text-5xl md:text-7xl tracking-tighter text-[#F0EFEB] drop-shadow-lg">
                Let's Explore What's Possible.
              </h1>
              
              <div className="space-y-6 text-lg text-parchment/80 font-light leading-relaxed max-w-2xl mx-auto">
                <p>
                  Finding the right partner shouldn't feel like a gamble. Before we jump into a project, I want to understand exactly who you are, what you're trying to achieve, and what roadblocks are in the way.
                </p>
                <p>
                  Take a moment to answer <span className="text-white font-medium italic">four strategic questions</span>. These give me an idea of how I can actually help you, and formats our discussion to look beyond just "making a video" toward solving real business problems.
                </p>
                <div className="pt-6 mt-6 border-t border-parchment/10 text-sm tracking-wide text-parchment/50">
                  As a thank you for your time, I'll send you a copy of the <span className="text-white font-medium italic">Verdant Oak Project Framework</span> upon submission.
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row gap-8 items-center justify-center w-full">
                <button 
                  onClick={() => setFlowStage('blueprint')}
                  className="relative overflow-hidden rounded-md border border-gold bg-gold px-10 py-5 text-sm tracking-[0.2em] text-charcoal font-medium uppercase transition-all duration-500 hover:bg-transparent hover:text-gold w-full sm:w-auto shadow-xl shadow-gold/10 group"
                >
                  <span className="relative z-10 transition-colors duration-500">Explore A Partnership</span>
                  <div className="absolute inset-0 h-full w-full translate-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[101%]"></div>
                </button>
                
                <a 
                  href="mailto:hello@verdantoak.com" 
                  className="text-sm tracking-widest text-parchment/40 uppercase hover:text-parchment border-b border-parchment/20 hover:border-parchment/50 pb-1 transition-colors"
                >
                  Or simply email me directly
                </a>
              </div>
            </div>
          </div>
        )}

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
    </div>
  );
}
