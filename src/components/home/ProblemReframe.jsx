import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const symptoms = [
  { num: '01', text: "We lack clarity on our core product." },
  { num: '02', text: "Our messaging is confusing our audience." },
  { num: '03', text: "We are struggling to build genuine trust." },
  { num: '04', text: "We're trying to solve a strategic issue with a creative asset." }
];

export default function ProblemReframe() {
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

      // 1. Headline starts huge in the center and moves up to make room
      tl.fromTo('.reframe-headline', 
        { opacity: 1, y: '30vh', scale: 1.1 }, 
        { y: 0, scale: 1, duration: 1.5, ease: 'power2.inOut' }
      );

      // 2. Spine draws down slowly from the top
      tl.fromTo('.reframe-spine',
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 4, ease: 'none' },
        '-=0.5' // start drawing while headline finishes moving up
      );

      // 3. Intro badge fades in
      tl.fromTo('.reframe-intro',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8 },
        1.0 // shortly after spine starts
      );

      // 4. Reveal cards sequentially, alternating sides
      const cards = gsap.utils.toArray('.reframe-card');
      cards.forEach((card, i) => {
        // even indices slide from left, odd slide from right
        const xOffset = i % 2 === 0 ? -40 : 40;
        tl.fromTo(card,
          { opacity: 0, x: xOffset, y: 10 },
          { opacity: 1, x: 0, y: 0, duration: 1.2, ease: 'power2.out' },
          1.5 + (i * 0.7)
        );
      });

      // 5. Reveal the core insight at the bottom
      tl.fromTo('.reframe-insight',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.5 },
        '+=0.5'
      );

      // 6. Subtle highlight sweep under the final sentence
      tl.fromTo('.reframe-insight',
        { scale: 0.985, y: 8, boxShadow: '0 0 0 rgba(0,0,0,0)' },
        { scale: 1, y: 0, boxShadow: '0 10px 40px rgba(25,25,25,0.08)', duration: 1.0, ease: 'power2.out' },
        '>-0.1'
      );

      tl.fromTo('.reframe-insight-sheen',
        { xPercent: -130, opacity: 0 },
        { xPercent: 140, opacity: 0.55, duration: 1.2, ease: 'power2.inOut' },
        '<+0.05'
      ).to('.reframe-insight-sheen', {
        opacity: 0,
        duration: 0.35,
        ease: 'sine.out'
      }, '>-0.2');

      tl.fromTo('.reframe-insight-accent',
        { color: '#9D5B49' },
        { color: '#B26A55', duration: 0.7, ease: 'sine.out' },
        '<'
      );

      // Shorter hold so the next section arrives sooner
      tl.to({}, { duration: 0.7 });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-[500vh] w-full bg-[#EBE9E1]">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-start px-6 pt-28 md:pt-36 short:pt-16 xshort:pt-10 overflow-hidden">
        
        {/* The Headline starts centered via JS animation */}
        <h2 className="reframe-headline z-20 text-center font-serif text-4xl leading-tight text-charcoal md:text-[3.5rem] lg:text-[4rem] max-w-4xl tracking-tight">
          The request is not always the real problem.
        </h2>

        <div className="reframe-intro mt-4 z-20 px-6 py-2 border-[1.5px] border-moss/30 rounded-full bg-[#EBE9E1] text-moss text-xs md:text-sm uppercase tracking-widest font-medium shadow-sm">
            Sometimes "We need a video" actually means:
        </div>

        {/* Central Architectural Area */}
        <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center pt-10 md:pt-12 short:pt-6 pb-36 md:pb-48 short:pb-20 xshort:pb-12">
            
            {/* The Spine */}
            <div className="reframe-spine absolute top-0 bottom-24 md:bottom-32 short:bottom-12 w-[1.5px] bg-charcoal/30 z-0"></div>

            {/* Cards Grid */}
            <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-2 md:items-center gap-y-6 md:gap-y-0 short:gap-y-2 xshort:gap-y-1">
                {symptoms.map((item, i) => (
                    <div 
                      key={i} 
                      className={`reframe-card relative flex flex-col justify-center p-8 lg:p-10 short:p-4 xshort:p-3 bg-[#FAF9F5]/80 shadow-sm border border-charcoal/10 backdrop-blur-md rounded-sm ${i % 2 === 0 ? 'md:mr-12 lg:mr-20 md:text-right' : 'md:ml-12 lg:ml-20 md:mt-24 lg:mt-32 short:md:mt-6 xshort:md:mt-0'}`}
                    >
                        {/* Connecting line to spine (desktop only) */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 lg:w-20 h-[1.5px] bg-charcoal/30 ${i % 2 === 0 ? '-right-12 lg:-right-20' : '-left-12 lg:-left-20'}`}></div>
                        {/* Node dot (desktop only) */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-charcoal ${i % 2 === 0 ? '-right-[51px] lg:-right-[83px]' : '-left-[51px] lg:-left-[83px]'}`}></div>
                        
                        <span className={`font-serif text-moss/20 text-5xl lg:text-6xl short:text-4xl absolute top-4 ${i % 2 === 0 ? 'md:right-8' : 'md:left-8'} select-none pointer-events-none md:-top-4`}>{item.num}</span>
                        <p className="font-sans text-xl lg:text-2xl short:text-lg font-light text-charcoal leading-relaxed relative z-10 pt-4 md:pt-6 short:pt-2">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Core Insight */}
            <div className="reframe-insight absolute bottom-6 md:bottom-10 short:bottom-2 xshort:bottom-1 left-1/2 -translate-x-1/2 w-full max-w-4xl text-center px-4 z-20 bg-[#EBE9E1]/80 backdrop-blur-md py-6 short:py-4 rounded-lg overflow-hidden">
                <div className="reframe-insight-sheen pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0"></div>
                <p className="font-serif text-3xl leading-relaxed text-charcoal md:text-4xl lg:text-[2.5rem] lg:leading-[1.3] short:text-2xl xshort:text-xl">
                    Creative is often where the pain shows up.<br/>
                    <span className="reframe-insight-accent italic text-clay relative z-10">not where it starts.</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
