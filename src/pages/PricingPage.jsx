import { ArrowRight, Check } from 'lucide-react';

const tiers = [
  {
    name: 'Essential',
    price: '$2,500/mo',
    fit: 'For owner-led teams needing strategic focus before scaling spend.',
    items: ['Strategic roadmap', 'Monthly campaign plan', 'Copy and creative direction', 'Performance snapshot']
  },
  {
    name: 'Performance',
    price: '$5,500/mo',
    fit: 'For growth-stage businesses ready for full campaign execution.',
    featured: true,
    items: ['Everything in Essential', 'Campaign production + launch', 'Landing page optimization', 'Weekly decision dashboard']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    fit: 'For multi-offer teams requiring integrated strategy and creative systems.',
    items: ['Quarterly growth planning', 'Cross-channel creative system', 'Leadership strategy calls', 'Custom reporting architecture']
  }
];

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-24 md:px-12">
      <section className="rounded-[3rem] border border-stone-300/70 bg-[#faf8f2] p-10 md:p-14">
        <p className="mono text-xs uppercase tracking-[0.2em] text-verdant">Pricing</p>
        <h1 className="mt-4 text-4xl leading-tight text-stone-800 md:text-6xl">Choose the growth system that matches your stage.</h1>
        <p className="mt-6 max-w-3xl text-stone-600">
          Every engagement is built to connect business priorities with creative execution so your team knows what to do, why it matters, and how to measure progress.
        </p>
      </section>

      <section className="mt-14 grid gap-7 md:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`rounded-[2rem] border p-8 ${tier.featured ? 'border-verdant/60 bg-[#edf2e7] shadow-soft scale-[1.01]' : 'border-stone-300/70 bg-[#fcfbf7]'}`}
          >
            <p className="mono text-xs uppercase tracking-[0.18em] text-stone-500">{tier.name}</p>
            <h2 className="mt-4 text-3xl text-stone-800">{tier.price}</h2>
            <p className="mt-3 text-sm text-stone-600">{tier.fit}</p>
            <ul className="mt-6 space-y-3">
              {tier.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-stone-700">
                  <Check size={16} className="mt-0.5 text-verdant" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="mailto:hello@verdantoak.com" className="cta-button mt-8 w-full justify-center">
              Book a Call <ArrowRight size={16} />
              <span className="cta-slide" aria-hidden="true" />
            </a>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-[2.5rem] border border-stone-300/70 bg-[#fcfbf7] p-10 text-stone-800">
        <h3 className="text-2xl">Risk Reversal</h3>
        <p className="mt-4 max-w-3xl text-stone-600">
          If we cannot define measurable success criteria together in your first planning week, you can cancel before full execution begins.
        </p>
      </section>

      <section className="mt-14 rounded-[2.5rem] border border-stone-300/70 bg-[#f7f5ee] p-10">
        <h3 className="text-2xl text-stone-800">Common Questions</h3>
        <div className="mt-6 space-y-5 text-stone-700">
          <p><strong>How quickly can we launch?</strong> Most teams launch initial assets in 2-3 weeks after alignment.</p>
          <p><strong>Can you work with our existing team?</strong> Yes. Verdant Oak plugs into leadership, freelancers, or internal operators.</p>
          <p><strong>Do you run paid ads?</strong> Yes, when it supports strategy and economics, not as a default tactic.</p>
        </div>
      </section>
    </div>
  );
}
