import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../data/portfolioData';

export default function WorkPage() {
  const containerRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  useGSAP(() => {
    gsap.fromTo(".case-study", 
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-[#111] pt-32 pb-32 px-4 md:px-8 lg:px-16 text-parchment" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <header className="mb-24 lg:mb-32 max-w-3xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] tracking-tight leading-none mb-8">
            Deep<br />Archives.
          </h1>
          <div className="h-[1px] w-24 bg-gold/50 mb-8"></div>
          <p className="font-sans text-xl md:text-2xl font-light text-parchment/70 leading-relaxed">
            A working archive of documentary campaigns, commercial work, and narrative films built to solve real communication problems.
          </p>
          <div className="mt-8">
            <Link
              to="/work-immersive"
              className="group inline-flex items-center gap-3 border-b border-gold/30 pb-2 text-xs font-medium uppercase tracking-[0.24em] text-gold transition-colors duration-300 hover:border-gold hover:text-parchment"
            >
              Explore the immersive version
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </header>

        {/* Case Studies List */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {portfolioData.map((project, index) => {
            // First item (South Africa) spans full width
            const isFullWidth = index === 0;
            const colSpanClass = isFullWidth ? "xl:col-span-2" : "xl:col-span-1";
            
            // Layout classes depending on if it's full width or not
            const layoutClass = isFullWidth 
              ? "flex-col lg:flex-row gap-8 lg:gap-16" 
              : "flex-col gap-8 lg:gap-10";

            // Width constraints
            const leftColWidth = isFullWidth ? "lg:w-[45%]" : "w-full";
            const rightColWidth = isFullWidth ? "lg:w-[55%]" : "w-full";

            const cardBg = index % 2 === 0 ? "bg-moss/10" : "bg-charcoal/40";
            
            return (
              <div 
                key={project.id} 
                className={`case-study group/card flex ${layoutClass} p-6 md:p-12 lg:p-12 xl:p-16 rounded-[2rem] md:rounded-[3rem] border border-parchment/10 ${cardBg} ${colSpanClass} hover:-translate-y-2 hover:shadow-2xl hover:shadow-moss/20 transition-all duration-500 cursor-default`}
              >
                
                {/* Left Column: Narrative (Title, problem, services offered) */}
                <div className={`w-full ${leftColWidth} flex flex-col justify-between`}>
                  <div>
                    {/* Eyebrow / Client */}
                    <div className="overflow-hidden mb-4">
                      <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-gold/70 font-medium transform translate-y-0 group-hover/card:text-gold transition-colors duration-500">
                        {project.client || "Verdant Oak Project"}
                      </p>
                    </div>
                    
                    {/* Title */}
                    <h2 className={`font-serif leading-[1.1] tracking-tight mb-6 md:mb-8 group-hover/card:text-white transition-colors duration-500 ${isFullWidth ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-3xl md:text-4xl'}`}>
                      {project.title}
                    </h2>
                    
                    {/* Description / problem framing */}
                    {project.description && (
                      <p className={`font-sans font-light text-parchment/70 group-hover/card:text-parchment/90 transition-colors duration-500 leading-relaxed mb-8 ${isFullWidth ? 'text-lg md:text-xl lg:mb-16' : 'text-base md:text-lg lg:mb-10'}`}>
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Services offered */}
                  {project.deliverables && project.deliverables.length > 0 && (
                    <div className={!isFullWidth ? "mb-8 lg:mb-0" : "mt-auto"}>
                      <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.25em] text-parchment/40 font-medium mb-4">
                        Services Offered
                      </p>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.deliverables.map((deliverable, i) => (
                          <span 
                            key={i} 
                            className="px-4 py-2 rounded-full border border-parchment/20 text-xs md:text-sm text-parchment/70 bg-black/20 hover:bg-parchment/10 hover:text-parchment hover:border-parchment/40 transition-all duration-300"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Column: Video + case study link */}
                <div className={`w-full ${rightColWidth} flex flex-col gap-8`}>
                  {/* Video Player Area */}
                  <div 
                    className={`relative w-full rounded-3xl overflow-hidden bg-black cursor-pointer group/video ${!isFullWidth ? 'mt-auto aspect-video' : 'mt-auto aspect-video lg:flex-1 lg:min-h-[300px]'}`}
                    onClick={() => setPlayingId(project.id)}
                  >
                    {playingId === project.id ? (
                      <iframe 
                        src={`${project.embedUrl}${project.provider === 'vimeo' ? '&' : '?'}autoplay=1&color=ffffff&title=0&byline=0&portrait=0`} 
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                        title={project.title}
                      ></iframe>
                    ) : (
                      <>
                        <img 
                          src={project.thumbnail} 
                          alt={project.title} 
                          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/video:scale-105 group-hover/card:opacity-100 transition-all duration-[1.5s] ease-out" 
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/video:bg-black/10 transition-colors duration-500">
                           <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-100 group-hover/video:scale-110 group-hover/video:bg-white/20 transition-all duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {project.caseStudyLink && (
                    <div className="flex">
                      <Link
                        to={project.caseStudyLink}
                        className="group inline-flex items-center gap-3 self-start border-b border-gold/30 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:border-gold hover:text-parchment"
                      >
                        View Full Case Study
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
