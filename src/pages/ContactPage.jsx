import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ProjectBlueprint from '../components/contact/ProjectBlueprint';
import PriorityMatrix from '../components/contact/PriorityMatrix';
import LeadMagnet from '../components/contact/LeadMagnet';

export default function ContactPage() {
  const [activeFlow, setActiveFlow] = useState('blueprint'); // 'standard', 'blueprint', 'matrix'
  const [flowStage, setFlowStage] = useState('input'); // 'input', 'lead_capture', 'success'
  const [flowData, setFlowData] = useState(null);
  const [status, setStatus] = useState('');
  
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.contact-reveal', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
    );
  }, { scope: containerRef, dependencies: [activeFlow, flowStage] });

  const handleFlowComplete = (data, type) => {
    setFlowData(data);
    setFlowStage('lead_capture');
  };

  const submitFinalLead = async (finalData) => {
    setStatus("Sending....");
    
    // Construct the payload for Web3Forms
    const payload = new FormData();
    payload.append("access_key", "YOUR_ACCESS_KEY_HERE");
    payload.append("name", finalData.name);
    payload.append("email", finalData.email);
    payload.append("Inquiry Type", finalData.flowType);
    
    if (finalData.projectDetails) {
        payload.append("Additional Details", finalData.projectDetails);
    }

    if (finalData.flowType === 'blueprint') {
        payload.append("Tension", finalData.flowData.tension);
        payload.append("Outcome", finalData.flowData.outcome);
        payload.append("Obstacle", finalData.flowData.obstacle);
    } else if (finalData.flowType === 'matrix') {
        payload.append("Ranked Priorities", finalData.flowData.rankings.join(' > '));
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
      <div className="max-w-3xl mx-auto">
        
        {/* Header & Flow Toggles */}
        {flowStage !== 'success' && (
          <header className="mb-16 contact-reveal">
            <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tighter">Start The Process.</h1>
            <p className="font-sans text-lg md:text-xl text-parchment/70 leading-relaxed font-light mb-12">
              Every effective project starts with a diagnosis. Choose how you want to frame your project below.
            </p>

            <div className="flex flex-wrap gap-4 border-b border-parchment/10 pb-6">
              <button 
                onClick={() => { setActiveFlow('blueprint'); setFlowStage('input'); }}
                className={`text-sm tracking-[0.2em] uppercase transition-colors px-6 py-3 rounded ${activeFlow === 'blueprint' ? 'bg-parchment/10 text-gold' : 'text-parchment/40 hover:text-parchment/80'}`}
              >
                Project Blueprint
              </button>
              <button 
                onClick={() => { setActiveFlow('matrix'); setFlowStage('input'); }}
                className={`text-sm tracking-[0.2em] uppercase transition-colors px-6 py-3 rounded ${activeFlow === 'matrix' ? 'bg-parchment/10 text-gold' : 'text-parchment/40 hover:text-parchment/80'}`}
              >
                Priority Matrix
              </button>
            </div>
          </header>
        )}

        {/* Dynamic Flow Rendering */}
        {flowStage === 'input' && activeFlow === 'blueprint' && (
          <ProjectBlueprint onComplete={handleFlowComplete} />
        )}

        {flowStage === 'input' && activeFlow === 'matrix' && (
          <PriorityMatrix onComplete={handleFlowComplete} />
        )}

        {flowStage === 'lead_capture' && (
          <div className="space-y-8">
            <button 
              onClick={() => setFlowStage('input')} 
              className="text-xs tracking-widest text-parchment/40 uppercase hover:text-parchment contact-reveal inline-flex items-center gap-2"
            >
              ← Edit Previous Steps
            </button>
            <LeadMagnet 
              data={flowData} 
              componentType={activeFlow} 
              onSubmitLead={submitFinalLead} 
            />
            {status && (
              <p className="text-sm tracking-wide text-gold contact-reveal mt-4">{status}</p>
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
              href="/Verdant_Oak_Field_Guide_Mock.pdf" 
              download
              className="group relative overflow-hidden rounded-md border border-gold px-10 py-4 text-sm tracking-[0.2em] text-gold uppercase transition-all duration-500 hover:text-charcoal cursor-pointer block"
            >
              <span className="relative z-10 transition-colors duration-500">Download Your Field Guide</span>
              <div className="absolute inset-0 h-full w-full translate-y-[101%] bg-gold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
            </a>
            <p className="text-xs text-parchment/40 mt-4 tracking-widest uppercase">PDF • 2.4 MB</p>
          </div>
        )}

      </div>
    </div>
  );
}
