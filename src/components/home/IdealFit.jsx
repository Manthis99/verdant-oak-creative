import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fitPoints = [
  'You have tried a few things, but nothing really is clicking.',
  'You want a second perspective, not just an executor.',
  "You care more about what's true than what looks impressive.",
  'You are willing to dig layer after layer for what the actual problem is.'
];

export default function IdealFit() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ideal-fit-fade',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.16,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 72%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-parchment px-6 py-28 md:py-40 border-t border-charcoal/10">
      <div className="mx-auto max-w-6xl">
        <div className="ideal-fit-fade mb-12 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-charcoal/40 font-sans font-medium">
            Ideal Fit
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.75rem] text-charcoal leading-tight tracking-tight">
            Who is this for?
          </h2>
          <p className="mt-6 font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/70">
            This works best for people who are open to getting underneath the obvious ask and finding the real problem.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {fitPoints.map((point, index) => (
            <div
              key={point}
              className="ideal-fit-fade rounded-sm border border-charcoal/10 bg-white/50 px-6 py-8 md:px-8 md:py-10"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-charcoal/35 font-sans font-medium">
                0{index + 1}
              </p>
              <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/80">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
