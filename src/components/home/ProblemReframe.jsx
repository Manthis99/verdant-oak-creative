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
      // 1. Headline fades in natively when entering view
      gsap.fromTo('.reframe-headline',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out', scrollTrigger: { trigger: '.reframe-headline', start: 'top 85%' } }
      );

      // 3. Intro badge fades in
      gsap.fromTo('.reframe-intro',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: '.reframe-intro', start: 'top 85%' } }
      );

      // 2. Spine draws down slowly from the top
      gsap.fromTo('.reframe-spine',
        { scaleY: 0, transformOrigin: 'top center' },
        { scaleY: 1, duration: 2, ease: 'power2.inOut', scrollTrigger: { trigger: '.reframe-spine-container', start: 'top 80%' } }
      );

      // 4. Reveal cards sequentially
      const cards = gsap.utils.toArray('.reframe-card');
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      cards.forEach((card, i) => {
        const xOffset = isMobile ? 0 : (i % 2 === 0 ? -40 : 40);
        gsap.fromTo(card,
          { opacity: 0, x: xOffset, y: 10 },
          { opacity: 1, x: 0, y: 0, duration: 1.0, ease: 'power2.out', scrollTrigger: { trigger: card, start: 'top 85%' } }
        );
      });

      // 5. Core insight fades in
      gsap.fromTo('.reframe-insight',
        { opacity: 0, filter: 'blur(10px)', y: 30 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, scrollTrigger: { trigger: '.reframe-insight', start: 'top 85%' } }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full overflow-hidden bg-[#EBE9E1] py-24 md:py-48 lg:py-56">
      <div className="flex w-full flex-col items-center justify-start px-5 md:px-6">

        {/* The Headline */}
        <h2 className="reframe-headline z-20 max-w-4xl text-center font-serif text-[2.6rem] leading-[1.02] tracking-tight text-charcoal sm:text-5xl md:text-[3.5rem] lg:text-[4rem] short:max-w-3xl short:text-[3rem] short:leading-[1.05] xshort:max-w-[13ch] xshort:text-[2.5rem] xshort:leading-[1.02]">
          The request is not always the real problem.
        </h2>

        <div className="reframe-intro z-20 mt-6 max-w-full rounded-full border-[1.5px] border-moss/30 bg-[#EBE9E1] px-5 py-2 text-center text-[0.68rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-moss shadow-sm md:text-sm short:mt-3 short:px-5 short:text-[11px] xshort:max-w-[92vw]">
            Sometimes "We need a video" actually means:
        </div>

        {/* Central Architectural Area */}
        <div className="reframe-spine-container relative flex w-full max-w-5xl flex-1 items-center justify-center py-16 md:py-32">

            {/* The Spine - explicitly centered now */}
            <div className="reframe-spine absolute left-1/2 -translate-x-1/2 top-0 bottom-0 z-0 w-[1.5px] bg-charcoal/30"></div>

            {/* Cards Grid */}
            <div className="relative z-10 grid min-w-0 w-full grid-cols-1 gap-y-6 md:grid-cols-2 md:items-center md:gap-y-0">
                {symptoms.map((item, i) => (
                    <div
                      key={i}
                      className={`reframe-card relative grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-3 rounded-sm border border-charcoal/10 bg-[#FAF9F5]/90 p-6 shadow-sm backdrop-blur-md md:flex md:flex-col md:justify-center md:gap-0 lg:p-10 short:p-5 xshort:p-4 ${i % 2 === 0 ? 'md:mr-12 md:text-right lg:mr-20' : 'md:ml-12 md:mt-32 lg:ml-20 lg:mt-48'}`}
                    >
                        {/* Connecting line to spine (desktop only) */}
                        <div className={`absolute top-1/2 hidden h-[1.5px] w-12 -translate-y-1/2 bg-charcoal/30 lg:w-20 md:block ${i % 2 === 0 ? '-right-12 lg:-right-20' : '-left-12 lg:-left-20'}`}></div>
                        {/* Node dot (desktop only) */}
                        <div className={`absolute top-1/2 hidden h-[6px] w-[6px] -translate-y-1/2 rounded-full bg-charcoal md:block ${i % 2 === 0 ? '-right-[51px] lg:-right-[83px]' : '-left-[51px] lg:-left-[83px]'}`}></div>

                        <span className={`pointer-events-none relative select-none pt-0.5 font-serif text-[2.15rem] leading-none text-moss/35 md:absolute md:-top-4 md:pt-0 md:text-5xl md:text-moss/20 short:md:-top-2 short:md:text-4xl xshort:md:text-[2.75rem] lg:text-6xl ${i % 2 === 0 ? 'md:right-8 short:md:right-6' : 'md:left-8 short:md:left-6'}`}>{item.num}</span>
                        <p className="relative z-10 min-w-0 font-sans text-lg font-light leading-relaxed text-charcoal md:pt-6 md:text-xl short:md:pt-2 short:text-lg short:leading-[1.4] xshort:text-base lg:text-2xl">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Core Insight */}
        <div className="reframe-insight relative z-20 mx-auto mt-6 w-full max-w-4xl overflow-hidden rounded-xl border border-charcoal/10 bg-[#EBE9E1]/80 px-5 py-5 text-center backdrop-blur-md md:mt-24 md:py-8 short:max-w-3xl short:py-4 xshort:max-w-[92vw] xshort:py-3">
            <div className="reframe-insight-sheen pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0"></div>
            <p className="font-serif text-3xl leading-relaxed text-charcoal md:text-4xl short:text-[2rem] short:leading-[1.2] xshort:text-[1.55rem] lg:text-[2.5rem] lg:leading-[1.3]">
                Creative is often where the pain shows up,<br className="hidden md:block" />
                <span className="reframe-insight-accent relative z-10 italic text-clay"> not where it starts.</span>
            </p>
        </div>

      </div>
    </section>
  );
}
