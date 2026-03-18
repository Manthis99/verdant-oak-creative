import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const BOOKING_OPTIONS = [
  {
    id: 'remote',
    label: 'Remote call',
    eyebrow: 'Zoom or phone',
    description: "Best if you want to talk through the project from wherever you're working.",
    calendlyUrl: 'https://calendly.com/proctom/45?primary_color=cc5c38',
    fallbackUrl: 'https://calendly.com/proctom/45',
    durationLabel: '45 minutes',
    locationLabel: 'Remote',
  },
  {
    id: 'in-person',
    label: 'In-person coffee meetup',
    eyebrow: 'Coffee shop meetup',
    description: 'Best if you are local and would rather meet face to face over coffee.',
    calendlyUrl: 'https://calendly.com/proctom/in-person-meetup?primary_color=cc5c38',
    fallbackUrl: 'https://calendly.com/proctom/in-person-meetup',
    durationLabel: 'Flexible',
    locationLabel: 'In person',
  },
];

export default function BookingPage() {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);
  const [showFallback, setShowFallback] = useState(false);
  const [selectedOption, setSelectedOption] = useState(BOOKING_OPTIONS[0]);
  const [calendlyReady, setCalendlyReady] = useState(false);

  // Load Calendly widget script once
  useEffect(() => {
    if (document.getElementById('calendly-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setCalendlyReady(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (window.Calendly) {
      setCalendlyReady(true);
    }
  }, []);

  useEffect(() => {
    const widgetNode = widgetRef.current;
    if (!widgetNode) return;

    setShowFallback(false);
    widgetNode.innerHTML = '';

    let resolved = false;

    const markLoaded = () => {
      resolved = true;
      setShowFallback(false);
    };

    const checkForEmbed = () => {
      const iframe = widgetNode.querySelector('iframe');
      if (iframe) {
        markLoaded();
        return true;
      }
      return false;
    };

    if (window.Calendly?.initInlineWidget) {
      window.Calendly.initInlineWidget({
        url: selectedOption.calendlyUrl,
        parentElement: widgetNode,
      });
    }

    if (checkForEmbed()) return;

    const observer = new MutationObserver(() => {
      if (checkForEmbed()) {
        observer.disconnect();
      }
    });

    observer.observe(widgetNode, { childList: true, subtree: true });

    const fallbackTimer = window.setTimeout(() => {
      if (!resolved && !checkForEmbed()) {
        setShowFallback(true);
      }
    }, 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallbackTimer);
    };
  }, [selectedOption, calendlyReady]);

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
          Schedule a Call
        </p>
        <h1 className="book-reveal font-serif text-5xl md:text-7xl tracking-tight leading-[1.05] mb-8 text-charcoal">
          Schedule a <span className="italic">Call</span>
        </h1>
        <p className="book-reveal text-xl md:text-2xl font-light italic text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
          Choose whether you want to meet remotely or in person. No pressure, no pitch. Just an honest look at your project and whether we're the right fit.
        </p>
        <a
          href="mailto:hello@michaelproctor.co"
          className="book-reveal inline-block mt-8 border-b border-charcoal/20 pb-1 text-sm uppercase tracking-[0.2em] text-charcoal/50 transition-colors hover:border-charcoal/50 hover:text-charcoal"
        >
          Email Me Directly
        </a>
      </header>

      {/* Divider */}
      <div className="book-reveal w-16 h-[1px] bg-charcoal/15 mx-auto mb-16" />

      {/* Calendly Inline Widget */}
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="book-reveal mb-8 grid gap-4 md:grid-cols-2">
          {BOOKING_OPTIONS.map((option) => {
            const isActive = selectedOption.id === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedOption(option)}
                className={`rounded-[1.75rem] border px-6 py-5 text-left transition-all duration-300 ${
                  isActive
                    ? 'border-charcoal bg-charcoal text-parchment shadow-[0_24px_60px_rgba(38,35,32,0.18)]'
                    : 'border-charcoal/10 bg-white/60 text-charcoal hover:border-charcoal/30 hover:bg-white'
                }`}
              >
                <p className={`text-xs uppercase tracking-[0.28em] ${isActive ? 'text-parchment/60' : 'text-charcoal/45'}`}>
                  {option.eyebrow}
                </p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-2xl leading-tight">
                      {option.label}
                    </h2>
                    <p className={`mt-3 text-sm leading-relaxed ${isActive ? 'text-parchment/80' : 'text-charcoal/65'}`}>
                      {option.description}
                    </p>
                  </div>
                </div>
                <div className={`mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] ${isActive ? 'text-parchment/65' : 'text-charcoal/45'}`}>
                  <span>{option.durationLabel}</span>
                  <span aria-hidden="true">•</span>
                  <span>{option.locationLabel}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="book-reveal mb-6 text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-charcoal/40">
            Now booking: {selectedOption.label}
          </p>
        </div>

        <div
          key={selectedOption.id}
          ref={widgetRef}
          className="calendly-inline-widget rounded-2xl overflow-hidden shadow-sm"
          data-url={selectedOption.calendlyUrl}
          style={{ minWidth: '320px', height: '1150px' }}
        />

        {showFallback && (
          <div className="book-reveal mt-8 rounded-2xl border border-charcoal/10 bg-white/60 px-6 py-5 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-charcoal/40 font-medium mb-3">
              Calendar not loading?
            </p>
            <p className="text-base md:text-lg font-light text-charcoal/65 leading-relaxed">
              If the embed is blocked by cookie or privacy settings, you can
              {' '}
              <a
                href={selectedOption.fallbackUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-charcoal/20 text-charcoal transition-colors hover:border-charcoal/50 hover:text-charcoal/80"
              >
                open the {selectedOption.label.toLowerCase()} calendar in a new tab
              </a>
              {' '}
              or
              {' '}
              <a
                href="mailto:hello@michaelproctor.co"
                className="border-b border-charcoal/20 text-charcoal transition-colors hover:border-charcoal/50 hover:text-charcoal/80"
              >
                email me directly
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
