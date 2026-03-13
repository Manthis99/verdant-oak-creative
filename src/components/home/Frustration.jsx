import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const frustrations = [
  "You hired someone to make the thing.",
  "The thing looked good.",
  "But it never quite solved what you hoped it would."
];

export default function Frustration() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      // 1. Shift environment darker
      tl.to(containerRef.current, { backgroundColor: '#242B22', duration: 1.5 }, 0) 
        .to('.frustration-text-primary', { color: '#F0EFEB', duration: 1.5 }, 0) 
        .to('.frustration-text-secondary', { color: '#D4C3A3', duration: 1.5 }, 0); 

      // 2. Fade in intro label
      tl.fromTo('.frustration-intro',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.5
      );

      // 3. Wipe in frustration lines sequentially (clip-path reveal)
      const items = gsap.utils.toArray('.frustration-item');
      items.forEach((item, i) => {
        tl.fromTo(item,
          { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0.5, x: -10 },
          { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' },
          1.5 + (i * 0.8)
        );
      });

      // 3. Climax statements
      tl.fromTo('.frustration-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '+=0.3'
      );
      
      tl.fromTo('.frustration-main',
        { opacity: 0, scale: 0.95, y: 30, filter: 'blur(10px)' },
        { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' },
        '+=0.2'
      );

      tl.to({}, { duration: 0.6 });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="frustration-bg relative h-[300vh] w-full bg-[#EBE9E1]">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center px-6 overflow-hidden">

        <div className="relative z-10 mx-auto max-w-4xl w-full">

          <p className="frustration-intro mb-16 text-sm uppercase tracking-[0.25em] frustration-text-secondary text-charcoal/50 font-medium opacity-0">
            Maybe you have felt this before.
          </p>

          <div className="flex flex-col gap-14 border-l-[1.5px] border-smoke/20 pl-8 md:pl-16 lg:pl-20 py-4">
            {frustrations.map((str, i) => (
              <p key={i} className="frustration-item pb-2 font-serif text-3xl frustration-text-primary text-charcoal md:text-5xl leading-[1.25]">
                {str}
              </p>
            ))}
          </div>
          
          <div className="mt-32 flex flex-col items-center text-center border-t border-smoke/10 pt-20 pb-12">
              <p className="frustration-sub text-lg md:text-xl frustration-text-secondary text-charcoal/60 leading-relaxed font-light mb-6 opacity-0 tracking-wide">
                  The brief was clear.
              </p>
              <p className="frustration-main font-serif text-5xl md:text-7xl lg:text-[6rem] frustration-text-primary text-charcoal leading-[1.1] tracking-tight opacity-0">
                  The underlying problem<br/>
                  <span className="italic text-[#D4C3A3] opacity-90">was not.</span>
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}
