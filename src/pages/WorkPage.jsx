import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../data/portfolioData';

export default function WorkPage() {
  const containerRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  useGSAP(() => {
    gsap.fromTo(".portfolio-item", 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-parchment pt-32 pb-24 px-4 md:px-8 lg:px-16 text-charcoal" ref={containerRef}>
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-20 max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Selected Archives</h1>
          <p className="font-sans text-lg md:text-xl text-charcoal/70 leading-relaxed">
            A comprehensive catalog of documentary campaigns, commercial spots, and narrative films built to solve complex communication problems.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {portfolioData.map((project) => (
            <div key={project.id} className="portfolio-item group flex flex-col cursor-pointer" onClick={() => setPlayingId(project.id)}>
              <div className="relative aspect-video bg-smoke/20 overflow-hidden mb-4">
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
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <h3 className="font-serif text-xl tracking-tight leading-snug group-hover:text-charcoal/70 transition-colors">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
