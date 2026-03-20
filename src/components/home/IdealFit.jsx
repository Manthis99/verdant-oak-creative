import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IdealFit() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro fade
      gsap.fromTo(
        '.ideal-fit-intro',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%'
          }
        }
      );

      // Manifesto Scroll Highlight Effect
      const lines = gsap.utils.toArray('.manifesto-line');
      
      gsap.to(lines, {
        opacity: 1,
        stagger: 0.5,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.ideal-fit-manifesto',
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment px-6 py-28 md:py-48 border-t border-charcoal/10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="ideal-fit-intro mb-16 md:mb-24 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-charcoal/35 font-sans font-medium">
            Ideal Fit
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] text-charcoal leading-[1.05] tracking-tight">
            Who is this for?
          </h2>
          <p className="mt-8 font-sans text-xl md:text-2xl font-light leading-relaxed text-charcoal/70 max-w-xl">
            This works best for people who are open to getting underneath the obvious ask and finding the real problem.
          </p>
        </div>

        {/* Pure Typographic Manifesto block */}
        <div className="ideal-fit-manifesto max-w-5xl mx-auto pl-6 md:pl-16 lg:pl-24 border-l border-charcoal/20 space-y-12 md:space-y-20">
          <p className="manifesto-line opacity-20 font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-[1.25] tracking-tight">
            You have tried a few things, but <span className="italic text-clay opacity-90 delay-150 transition-opacity">nothing really is clicking.</span>
          </p>
          <p className="manifesto-line opacity-20 font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-[1.25] tracking-tight">
            You want a <span className="italic text-clay opacity-90 delay-150 transition-opacity">second perspective</span>, not just an executor.
          </p>
          <p className="manifesto-line opacity-20 font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-[1.25] tracking-tight">
            You care more about <span className="italic text-clay opacity-90 delay-150 transition-opacity">what's true</span> than what looks impressive.
          </p>
          <p className="manifesto-line opacity-20 font-serif text-3xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-[1.25] tracking-tight">
            You are willing to dig layer after layer to find <span className="italic text-clay opacity-90 delay-150 transition-opacity">the actual problem.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
