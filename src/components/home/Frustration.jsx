import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frustrations = [
  "You hired someone to make the thing.",
  "A video, a campaign, a new site.",
  "The thing looked good, but it never quite had the results you hoped for."
];

export default function Frustration() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade in when it enters the viewport
      gsap.fromTo('.frustration-item',
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.frustration-list',
            start: 'top 85%'
          }
        }
      );

      gsap.fromTo(['.frustration-sub', '.frustration-main'],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.frustration-climax',
            start: 'top 85%'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="frustration-section" ref={containerRef} className="frustration-bg relative w-full bg-[#242B22] py-32 md:py-48 lg:py-56">
      <div className="w-full flex flex-col justify-start px-6 overflow-hidden">

        <div className="relative z-10 mx-auto max-w-4xl w-full">

          <p className="frustration-intro mb-12 short:mb-6 text-sm uppercase tracking-[0.25em] frustration-text-secondary text-[#D4C3A3] font-medium">
            You've probably felt this before:
          </p>

          <div className="frustration-list flex flex-col gap-14 short:gap-8 xshort:gap-6 border-l-[1.5px] border-smoke/20 pl-8 md:pl-16 lg:pl-20 py-4 short:py-2">
            {frustrations.map((str, i) => (
              <p key={i} className="frustration-item opacity-0 pb-2 font-serif text-3xl short:text-2xl md:text-5xl md:short:text-4xl lg:short:text-5xl frustration-text-primary text-parchment leading-[1.25]">
                {str}
              </p>
            ))}
          </div>

          <div className="frustration-climax mt-32 short:mt-12 flex flex-col items-center text-center border-t border-smoke/10 pt-20 short:pt-8 pb-12 short:pb-6">
              <p className="frustration-sub opacity-0 text-lg md:text-xl short:text-base frustration-text-secondary text-[#D4C3A3] leading-relaxed font-light mb-6 short:mb-4 tracking-wide">
                  The brief was clear.
              </p>
              <p className="frustration-main opacity-0 font-serif text-5xl md:text-7xl lg:text-[6rem] short:text-4xl md:short:text-5xl lg:short:text-[4rem] frustration-text-primary text-parchment leading-[1.1] tracking-tight">
                  The underlying problem<br/>
                  <span className="italic text-[#D4C3A3] opacity-90">was not.</span>
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}
