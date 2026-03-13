import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function BookingPage() {
  const containerRef = useRef(null);

  // Load Calendly widget script once
  useEffect(() => {
    if (document.getElementById('calendly-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      '.book-reveal',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-parchment text-charcoal font-sans pb-24"
    >
      {/* Hero Header */}
      <header className="pt-48 pb-16 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <p className="book-reveal text-xs uppercase tracking-[0.3em] text-charcoal/40 font-medium mb-6">
          Let's Talk
        </p>
        <h1 className="book-reveal font-serif text-5xl md:text-7xl tracking-tight leading-[1.05] mb-8 text-charcoal">
          Book a <span className="italic">Conversation</span>
        </h1>
        <p className="book-reveal text-xl md:text-2xl font-light italic text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
          45 minutes. No pressure, no pitch. Just an honest look at your project and whether we're the right fit.
        </p>
      </header>

      {/* Divider */}
      <div className="book-reveal w-16 h-[1px] bg-charcoal/15 mx-auto mb-16" />

      {/* Calendly Inline Widget */}
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div
          className="calendly-inline-widget rounded-2xl overflow-hidden shadow-sm"
          data-url="https://calendly.com/proctom/45?primary_color=cc5c38"
          style={{ minWidth: '320px', height: '700px' }}
        />
      </div>
    </div>
  );
}
