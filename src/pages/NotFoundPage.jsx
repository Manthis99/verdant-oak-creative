import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function NotFoundPage() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.err-num',   { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo('.err-line',  { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power3.inOut' }, '-=0.6')
      .fromTo('.err-text',  { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 }, '-=0.8')
      .fromTo('.err-cta',   { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6');
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-5 py-28 text-parchment sm:px-6"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(600px,150vw)] w-[min(600px,150vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">

        {/* Large 404 */}
        <p className="err-num font-serif text-[20vw] md:text-[12rem] leading-none tracking-tighter text-[#F0EFEB]/10 select-none mb-0">
          404
        </p>

        {/* Divider */}
        <div className="err-line w-24 h-[1px] bg-gold/40 mx-auto mb-10 origin-left" />

        {/* Message */}
        <h1 className="err-text font-serif text-4xl md:text-5xl tracking-tight text-[#F0EFEB] mb-6 leading-[1.1]">
          This page doesn't exist<span className="text-gold italic">.</span>
        </h1>
        <p className="err-text mx-auto mb-10 max-w-md text-base font-light leading-relaxed text-[#D4C3A3] sm:mb-16 sm:text-lg md:text-xl">
          You may have followed an old link, or something got moved. Either way — you're not lost, just slightly off-trail.
        </p>

        {/* CTA */}
        <Link
          to="/"
          className="err-cta group inline-flex items-center gap-3 rounded-full border border-gold/40 text-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-gold hover:text-charcoal shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          Back to Home
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>

      </div>
    </div>
  );
}
