import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Diagnosis() {
  const containerRef = useRef(null);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('frustration-section');
    nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const media = gsap.matchMedia();

    media.add('(min-width: 768px)', () => {
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
        4.1
      );

      // 3. Line 3
      tl.fromTo(lines[2],
        { opacity: 0, scale: 1.05, filter: 'blur(15px)', y: 30 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power2.out' },
        4.9
      );

      tl.to(lines[2],
        { y: -30, opacity: 0, filter: 'blur(10px)', scale: 0.95, duration: 1.2 },
        6.8
      );

      // 4. Line 4 — resolves and holds
      tl.fromTo(lines[3],
        { opacity: 0, scale: 1.05, filter: 'blur(15px)', y: 30 },
        { opacity: 1, scale: 1, filter: 'blur(0px)', y: 0, duration: 1.2, ease: 'power2.out' },
        7.4
      );

      // Slower end hold on the final message
      tl.to({}, { duration: 4 });

      }, containerRef);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] w-full bg-[#1A1A1A] md:h-[200vh]">
      <div className="relative z-10 flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-5 py-28 text-parchment md:sticky md:top-0 md:h-screen md:min-h-0 md:px-6 md:py-0">

        {/* Cinematic Background Image (2026 Trend) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <img
                src="/images/clarity-hero.png"
                alt=""
                className="diagnosis-bg absolute inset-0 h-full w-full scale-105 object-cover opacity-40 md:scale-110"
            />
            {/* Overlay gradients for better text legibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]"></div>
            <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Cinematic grain texture */}
        <div
          className="scene-1-noise pointer-events-none absolute -inset-[100%] z-1 opacity-20 mix-blend-overlay"
          style={{ backgroundImage: 'url("/images/noise-texture.png")', backgroundSize: '200px 200px' }}
        ></div>


        {/* Slow pulsing center glow */}
        <div className="diagnosis-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-parchment/5 blur-[120px] pointer-events-none opacity-40"></div>

        {/* CSS GRID STACKING */}
        <div className="relative z-10 flex w-full max-w-4xl flex-col place-items-center gap-4 px-0 text-center md:grid md:grid-cols-1 md:grid-rows-1 md:gap-0 md:px-4">

          {/* Line 1 — large, authoritative serif */}
          <h1 className="diagnosis-line w-full font-serif text-[2.25rem] leading-[1.05] tracking-[0.01em] text-[#F0EFEB] md:col-start-1 md:row-start-1 md:text-7xl md:tracking-[0.03em] lg:text-[6rem] short:text-4xl xshort:text-3xl md:short:text-5xl lg:short:text-6xl">
            You don&apos;t have a creative problem.
          </h1>

          {/* Line 2 — same scale, serif, slightly lower contrast */}
          <p className="diagnosis-line w-full font-serif text-[1.7rem] leading-[1.15] tracking-tight text-[#F0EFEB]/68 md:col-start-1 md:row-start-1 md:text-6xl md:opacity-0 lg:text-[5rem] short:text-3xl xshort:text-2xl md:short:text-4xl lg:short:text-5xl">
            You have a clarity problem.
          </p>

          {/* Line 3 — serif, gold tone for resolution */}
          <p className="diagnosis-line w-full font-serif text-[1.7rem] leading-[1.15] tracking-tight text-[#F0EFEB]/68 md:col-start-1 md:row-start-1 md:text-6xl md:opacity-0 lg:text-[5rem] short:text-3xl xshort:text-2xl md:short:text-4xl lg:short:text-5xl">
            Most teams are solving symptoms,<br className="hidden md:block" />
            {' '}not root problems.
          </p>

          <p className="diagnosis-line mt-2 w-full font-serif text-[1.9rem] leading-[1.12] tracking-tight text-[#D4C3A3] md:col-start-1 md:row-start-1 md:mt-0 md:text-6xl md:opacity-0 lg:text-[5rem] short:text-3xl xshort:text-2xl md:short:text-4xl lg:short:text-5xl">
            I help you solve the root problem.
          </p>

        </div>

        <button
          type="button"
          onClick={handleScrollDown}
          className="group absolute bottom-[max(1rem,env(safe-area-inset-bottom))] left-1/2 z-20 flex min-h-11 -translate-x-1/2 flex-col items-center gap-2 text-parchment/72 transition-colors duration-300 hover:text-parchment md:bottom-14 md:gap-3 short:bottom-4 xshort:bottom-2"
          aria-label="Scroll down to the next section"
        >
          <span className="text-[11px] uppercase tracking-[0.34em]">Scroll Down</span>
          <span className="relative flex h-12 w-7 items-start justify-center rounded-full border border-parchment/25 pt-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D4C3A3] animate-[scrollPrompt_1.6s_ease-in-out_infinite]"></span>
          </span>
        </button>
      </div>
    </section>
  );
}
