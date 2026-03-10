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
          end: 'bottom bottom', // Scroll through the entire 400vh container
          scrub: 1, // Smooth scrub
        }
      });

      // 1. First line
      tl.to(lines[0], 
        { y: -30, filter: 'blur(10px)', opacity: 0, scale: 0.95, duration: 2 }, 
        1.5 // Wait 1.5 units before fading out first line
      );

      // 2. Animate the subtle background noise natively and pulse the glow
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

      // 3. Line 2
      // Using CSS Grid stacking, we just animate opacity and position normally
      tl.fromTo(lines[1],
        { opacity: 0, scale: 1.05, filter: 'blur(15px)', y: 30 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1.5, ease: 'power2.out' },
        2.5 // Start fading in as line 1 begins to fade out
      );
      tl.to(lines[1],
        { y: -30, opacity: 0, filter: 'blur(10px)', scale: 0.95, duration: 1.5 },
        5.0 // Hold, then fade out
      );

      // 4. Line 3
      tl.fromTo(lines[2],
        { opacity: 0, scale: 1.05, filter: 'blur(15px)', y: 30 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1.5, ease: 'power2.out' },
        6.0 // Start fading in as line 2 begins to fade out
      );
      // We explicitly leave line 3 fully visible at the end of the timeline
      // so it hangs on screen until they scroll down into the next component natively.
      
      // Pad out the end of the scrub timeline significantly so they have a lot of physics 
      // scroll space to keep reading the final sentence while it sits still.
      tl.to({}, { duration: 4.0 }); 
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[400vh] w-full bg-[#1A1A1A]">
      <div className="sticky top-0 z-10 flex h-screen w-full items-center justify-center px-6 text-parchment overflow-hidden">
        
        {/* Cinematic animated grain/texture layer - now contained within the sticky hidden div */}
        <div 
          className="scene-1-noise pointer-events-none absolute -inset-[100%] z-0 h-[300%] w-[300%] opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url("/images/noise-texture.png")', backgroundSize: '200px 200px' }}
        ></div>
        
        {/* Slow pulsing center glow */}
        <div className="diagnosis-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-parchment/5 blur-[120px] pointer-events-none opacity-40"></div>

        {/* CSS GRID STACKING: Forces all children to occupy the exact same 1x1 cell */}
        <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 grid-rows-1 place-items-center text-center px-4">
          
          <h1 className="diagnosis-line col-start-1 row-start-1 w-full text-4xl leading-[1.15] font-serif text-[#F0EFEB] md:text-6xl tracking-tight">
            You probably do not need more creative.
          </h1>
          
          <p className="diagnosis-line opacity-0 col-start-1 row-start-1 w-full text-3xl leading-relaxed font-sans font-light text-[#F0EFEB]/80 md:text-5xl">
            You need more clarity in your messaging and strategy.
          </p>
          
          <p className="diagnosis-line opacity-0 col-start-1 row-start-1 w-full text-3xl leading-tight font-sans font-light text-[#D4C3A3] md:text-5xl">
            Because a beautiful answer <br className="hidden md:block" />
            to the wrong problem <br className="hidden md:block" />
            is still the wrong answer.
          </p>

        </div>
      </div>
    </section>
  );
}
