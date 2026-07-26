import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const proofPoints = [
  { value: '8+', label: 'Years doing the work' },
  { value: '4', label: 'Continents worked across' },
  { value: '$500k+', label: 'Raised through one campaign' },
];

export default function MichaelIntro() {
  return (
    <section className="relative w-full overflow-hidden bg-parchment px-5 py-24 md:px-8 md:py-36 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#EBE9E1] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.72fr)] lg:gap-24">
        <div>
          <p className="mb-6 text-[0.68rem] font-medium uppercase tracking-[0.3em] text-moss/65">
            Michael Proctor
          </p>

          <h2 className="max-w-[12ch] font-serif text-[2.75rem] leading-[0.98] tracking-[-0.045em] text-charcoal sm:text-5xl md:text-6xl lg:text-[4.75rem]">
            I start with questions, not deliverables.
          </h2>

          <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-charcoal/72 md:text-xl">
            For the past eight years, I&apos;ve helped nonprofits and small businesses make sense of complicated problems, then turn that clarity into work people can understand and trust.
          </p>

          <div className="mt-9 grid grid-cols-3 border-y border-charcoal/20">
            {proofPoints.map((point) => (
              <div key={point.label} className="border-r border-charcoal/20 px-2 py-5 first:pl-0 last:border-r-0 last:pr-0 sm:px-5">
                <p className="font-serif text-2xl leading-none text-charcoal sm:text-3xl">{point.value}</p>
                <p className="mt-2 max-w-[11rem] text-[0.58rem] font-medium uppercase leading-[1.45] tracking-[0.14em] text-charcoal/50 sm:text-[0.66rem]">
                  {point.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="group mt-8 inline-flex min-h-11 items-center gap-3 border-b border-charcoal/40 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-charcoal transition-colors hover:border-clay hover:text-clay"
          >
            More about Michael
            <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="absolute -bottom-3 -right-3 h-full w-full border border-charcoal/20 bg-[#E9E2D2]" />
          <img
            src="/images/optimized/michael-headshot-640.webp"
            srcSet="/images/optimized/michael-headshot-640.webp 640w, /images/optimized/michael-headshot-1200.webp 1200w"
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 448px, calc(100vw - 40px)"
            alt="Michael Proctor"
            loading="lazy"
            decoding="async"
            width="1200"
            height="1600"
            className="relative aspect-[4/5] w-full object-cover"
          />
          <figcaption className="relative mt-5 flex justify-between gap-4 border-t border-charcoal/20 pt-3 text-[0.6rem] font-medium uppercase tracking-[0.17em] text-charcoal/50">
            <span>Creative strategist + builder</span>
            <span>Film · design · technology</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
