import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CaseStudyLayout({ 
  title, 
  subtitle, 
  client, 
  role, 
  year, 
  heroImage, 
  children 
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Elegant fade up reveal for content
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.cs-reveal', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, [title]); // re-run if route changes but layout stays mounted

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-32 pb-24">
      {/* Hero Header */}
      <header className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-32">
        <h1 className="cs-reveal font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter text-charcoal leading-[1.05] mb-6">
          {title}
        </h1>
        {subtitle && (
           <p className="cs-reveal text-2xl md:text-3xl font-light font-sans text-charcoal/70 max-w-3xl mb-16">
             {subtitle}
           </p>
        )}
        
        {/* Metadata Grid */}
        <div className="cs-reveal grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-charcoal/10 uppercase tracking-widest text-xs font-semibold text-charcoal/80">
          <div>
            <span className="block text-smoke mb-2">Client</span>
            {client}
          </div>
          <div>
            <span className="block text-smoke mb-2">Role</span>
            {role}
          </div>
          <div>
            <span className="block text-smoke mb-2">Year</span>
            {year}
          </div>
        </div>
      </header>

      {/* Hero Image Full Bleed */}
      <div className="cs-reveal w-full h-[60vh] md:h-[80vh] overflow-hidden mb-24 md:mb-40">
        <img 
          src={heroImage} 
          alt={title} 
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center scale-105" 
        />
      </div>

      {/* Main Content Narrative */}
      <article className="px-6 md:px-12 mx-auto max-w-4xl font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/80 space-y-12 md:space-y-20">
        {children}
      </article>

    </div>
  );
}
