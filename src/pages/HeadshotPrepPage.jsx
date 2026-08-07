import { useEffect } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'The week before',
    points: [
      'Sleep well, especially the night before. It shows in your face.',
      'Drink plenty of water. Go easy on salt and alcohol.',
      "Wear sunscreen. Sunburn and peeling can't be fixed after.",
      'Book haircuts 3–7 days out. Skip waxing, threading, and new skincare right before.',
    ],
  },
  {
    number: '02',
    title: 'What to wear',
    points: [
      'Solid, mid-to-dark colors: navy, charcoal, forest, burgundy, cream.',
      'Avoid tight stripes, checks, and busy patterns.',
      "Well-fitted and freshly pressed. No wrinkles, no logos (unless it's your company).",
      'Add one detail that feels like you: a texture, or a color you own.',
    ],
  },
  {
    number: '03',
    title: 'Bring options',
    points: [
      "Pack 2–3 looks: one polished, one relaxed, one that's the most you.",
      'Match them to where the photos will live: a bio, a website, LinkedIn.',
    ],
  },
  {
    number: '04',
    title: 'Hair & makeup',
    points: [
      'Wear it how you normally do. People should recognize you.',
      'Keep makeup natural and matte to cut shine.',
      'Hair off the face and styled simply.',
    ],
  },
  {
    number: '05',
    title: 'Your expression',
    points: [
      'Practice three looks in the mirror: a warm smile, a calm serious one, and your "really listening" face.',
      'Shoulders back and down, chin slightly forward.',
      "Don't overthink posing. I'll guide you in the moment.",
    ],
  },
  {
    number: '06',
    title: 'On the day',
    points: [
      'Arrive a few minutes early and unrushed.',
      'Bring your outfits, water, and any touch-ups.',
      'Last check: teeth, collar, stray hairs, lint.',
    ],
  },
];

export default function HeadshotPrepPage() {
  useEffect(() => {
    const previousTitle = document.title;
    const metadata = [
      ['name', 'description', 'A simple guide to looking and feeling like yourself before your headshot session.'],
      ['property', 'og:title', 'How to prepare for your headshots'],
      ['property', 'og:description', 'A simple guide to looking and feeling like yourself before your headshot session.'],
      ['property', 'og:image', 'https://creative.michaelproctor.co/images/headshot-prep-social-vertical.jpg'],
      ['property', 'og:image:alt', 'Headshot preparation guide by Michael Proctor'],
      ['property', 'og:url', 'https://creative.michaelproctor.co/headshot-prep'],
      ['name', 'twitter:title', 'How to prepare for your headshots'],
      ['name', 'twitter:description', 'A simple guide to looking and feeling like yourself before your headshot session.'],
      ['name', 'twitter:image', 'https://creative.michaelproctor.co/images/headshot-prep-social.jpg'],
    ];

    const previousMetadata = metadata.map(([attribute, key, content]) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      const created = !element;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      const previousContent = element.getAttribute('content');
      element.setAttribute('content', content);
      return { element, created, previousContent };
    });

    document.title = 'How to prepare for your headshots | Michael Proctor';

    return () => {
      document.title = previousTitle;
      previousMetadata.forEach(({ element, created, previousContent }) => {
        if (created) {
          element.remove();
        } else if (previousContent !== null) {
          element.setAttribute('content', previousContent);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-parchment text-charcoal">
      <header className="relative px-5 pb-16 pt-36 sm:px-8 md:pb-20 md:pt-44 lg:px-12">
        <div className="pointer-events-none absolute right-[-12rem] top-16 h-[30rem] w-[30rem] rounded-full bg-gold/15 blur-[120px]" />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-12 bg-charcoal/40" />
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-moss">
              Before your session
            </p>
          </div>

          <h1 className="max-w-[14ch] font-serif text-[3rem] leading-[0.94] tracking-[-0.05em] sm:text-[4.2rem] md:text-[5.4rem]">
            How to prepare for your headshots
          </h1>

          <p className="mt-9 max-w-2xl text-lg font-light leading-relaxed text-charcoal/70 md:text-xl">
            Prepping for your headshots is pretty simple. Rest and hydrate well the week before, and dress similarly to how you usually do &mdash; unless you&rsquo;re pulling out the suit for something extra professional.
          </p>
        </div>
      </header>

      <section className="px-5 pb-24 sm:px-8 md:pb-36 lg:px-12">
        <div className="mx-auto max-w-4xl border-t border-charcoal/25">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-5 border-b border-charcoal/20 py-10 md:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] md:gap-12 md:py-12"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-serif text-2xl text-moss/55">{step.number}</span>
                <h2 className="font-serif text-[2rem] leading-tight tracking-[-0.03em] md:text-[2.4rem]">
                  {step.title}
                </h2>
              </div>

              <ul className="space-y-3.5">
                {step.points.map((point) => (
                  <li key={point} className="grid grid-cols-[1.35rem_1fr] gap-3">
                    <Check size={16} strokeWidth={1.75} className="mt-1 text-clay" aria-hidden="true" />
                    <span className="text-base font-light leading-relaxed text-charcoal/75 md:text-[1.05rem]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#E9E2D2] px-5 py-24 text-center sm:px-8 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-moss">
            One more thing
          </p>
          <h2 className="font-serif text-[2.6rem] leading-[0.96] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            Questions before your session?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-charcoal/65">
            If anything here is unclear or you want a second opinion on an outfit, just ask. I&rsquo;d rather answer early than have you guess.
          </p>
          <a
            href="mailto:hello@michaelproctor.co"
            className="group mt-9 inline-flex min-h-12 items-center gap-4 bg-charcoal px-7 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-parchment transition-transform duration-300 hover:-translate-y-1"
          >
            Email me
            <ArrowUpRight size={17} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  );
}
