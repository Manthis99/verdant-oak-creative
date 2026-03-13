import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Diagnosis() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray('.diagnosis-line');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        }
      });

      // Animate noise texture
      gsap.to('.scene-1-noise', {
          y: '10%',
          x: '-5%',
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'none'
      });
      gsap.to('.diagnosis-glow', {
          opacity: 0.7,
          scale: 1.1,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
      });

      // 1. First line fades out
      tl.to(lines[0], 
        { y: -30, filter: 'blur(10px)', opacity: 0, scale: 0.95, duration: 1.5 }, 
        1.0
      );

      // 2. Line 2
      tl.fromTo(lines[1],
        { opacity: 0, scale: 1.05, filter: 'blur(15px)', y: 30 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power2.out' },
        1.8
      );
      tl.to(lines[1],
        { y: -30, opacity: 0, filter: 'blur(10px)', scale: 0.95, duration: 1.2 },
        3.5
      );

      // 3. Line 3
      tl.fromTo(lines[2],
        { opacity: 0, scale: 1.05, filter: 'blur(15px)', y: 30 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power2.out' },
        4.2
      );
      
      // Pad end for reading time
      tl.to({}, { duration: 2.5 }); 
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full bg-[#1A1A1A]">
      <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center px-6 text-parchment overflow-hidden">
        
        {/* Cinematic grain texture */}
        <div 
          className="scene-1-noise pointer-events-none absolute -inset-[100%] z-0 h-[300%] w-[300%] opacity-30 mix-blend-overlay"
          style={{ backgroundImage: 'url("/images/noise-texture.png")', backgroundSize: '200px 200px' }}
        ></div>
        
        {/* Slow pulsing center glow */}
        <div className="diagnosis-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-parchment/5 blur-[120px] pointer-events-none opacity-40"></div>

        {/* CSS GRID STACKING */}
        <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 grid-rows-1 place-items-center text-center px-4">
          
          {/* Line 1 — large, authoritative serif */}
          <h1 className="diagnosis-line col-start-1 row-start-1 w-full font-serif text-5xl leading-[1.1] text-[#F0EFEB] md:text-7xl lg:text-[6rem] tracking-tight">
            You probably do not need more creative.
          </h1>
          
          {/* Line 2 — same scale, serif, slightly lower contrast */}
          <p className="diagnosis-line opacity-0 col-start-1 row-start-1 w-full font-serif text-4xl leading-[1.2] text-[#F0EFEB]/85 md:text-6xl lg:text-[5rem] tracking-tight">
            You probably need clearer strategy and language.
          </p>
          
          {/* Line 3 — serif, gold tone for resolution */}
          <p className="diagnosis-line opacity-0 col-start-1 row-start-1 w-full font-serif text-4xl leading-[1.2] text-[#D4C3A3] md:text-6xl lg:text-[5rem] tracking-tight">
            Because a beautiful answer to the wrong problem<br className="hidden md:block" />
            {' '}is still the wrong answer.
          </p>

        </div>
      </div>
    </section>
  );
}
