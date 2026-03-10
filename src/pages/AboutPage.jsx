import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pt-32 pb-24 md:px-12">
      <section className="overflow-hidden rounded-[3rem] border border-stone-300/70 bg-[#f8f6f0]">
        <div className="grid md:grid-cols-2">
          <div className="p-10 md:p-14">
            <p className="mono text-xs uppercase tracking-[0.22em] text-verdant">About Verdant Oak</p>
            <h1 className="mt-5 text-4xl leading-tight text-stone-800 md:text-6xl">A guide for founders who want marketing to finally make business sense.</h1>
            <p className="mt-6 text-stone-600">
              Verdant Oak Creative exists to close the gap between strategy and execution. We help growth-minded teams turn business intent into clear creative decisions and accountable campaigns.
            </p>
            <a href="mailto:hello@verdantoak.com" className="cta-button mt-10">
              Email Verdant Oak <ArrowRight size={16} />
              <span className="cta-slide" aria-hidden="true" />
            </a>
          </div>
          <img
            src="/images/inspo-builder.png"
            alt="Built environment inspiration"
            className="h-full min-h-72 w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-14 grid gap-7 md:grid-cols-3">
        <article className="rounded-[2rem] border border-stone-300/70 bg-[#fcfbf7] p-8">
          <h2 className="text-xl text-stone-800">Empathy</h2>
          <p className="mt-4 text-sm text-stone-600">We know what it feels like to make high-pressure growth decisions without clear marketing signal.</p>
        </article>
        <article className="rounded-[2rem] border border-stone-300/70 bg-[#fcfbf7] p-8">
          <h2 className="text-xl text-stone-800">Authority</h2>
          <p className="mt-4 text-sm text-stone-600">Our process blends strategy, creative systems, and campaign execution into one operating model.</p>
        </article>
        <article className="rounded-[2rem] border border-stone-300/70 bg-[#fcfbf7] p-8">
          <h2 className="text-xl text-stone-800">Method</h2>
          <p className="mt-4 text-sm text-stone-600">Align business goals. Build creative systems. Optimize continuously with measured feedback loops.</p>
        </article>
      </section>

      <section className="mt-14 rounded-[2.5rem] border border-stone-300/70 bg-[linear-gradient(120deg,#edf3e7,#f8f6ef)] p-10 md:p-12">
        <h3 className="text-3xl leading-tight text-stone-800">Look at our portfolio or start with a strategy call.</h3>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="/" className="secondary-button">View Portfolio Direction</a>
          <a href="mailto:hello@verdantoak.com" className="cta-button">
            Book a Time to Call
            <span className="cta-slide" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}
