import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const principles = [
  {
    number: '01',
    title: 'Ask why before deciding what.',
    body: 'I tend to notice the question underneath the request. I would rather pause long enough to understand what is actually changing, stuck, or unclear than rush into producing the wrong thing.',
  },
  {
    number: '02',
    title: 'Translate until people can move together.',
    body: 'Leaders, technical experts, creatives, and customers often see different parts of the same problem. I help turn those perspectives into a direction people can understand and act on.',
  },
  {
    number: '03',
    title: 'Stay close enough to finish well.',
    body: 'I do not want to hand over a strategy and disappear. I stay involved through writing, production, systems, and delivery so the original insight survives contact with the real work.',
  },
];

const proofPoints = [
  { value: '8+', label: 'Years partnering with organizations' },
  { value: '10', label: 'Countries represented in documentary work' },
  { value: '22', label: 'Accepted marketing projects in a typical quarter' },
  { value: '90%+', label: 'Completion rate, up from roughly 40%' },
];

const fitSignals = [
  {
    title: 'The work matters, but it is difficult to explain.',
    body: 'The people closest to it understand the value. The audience does not yet.',
  },
  {
    title: 'The request crosses teams or areas of expertise.',
    body: 'No single person sees the whole problem, and important context is getting lost between people.',
  },
  {
    title: 'You need thought and execution in the same room.',
    body: 'The work needs someone who can help shape the direction and stay involved long enough to make it real.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-parchment text-charcoal">
      <header className="relative px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44 lg:px-12">
        <div className="pointer-events-none absolute right-[-12rem] top-12 h-[32rem] w-[32rem] rounded-full bg-gold/15 blur-[120px]" />

        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(27rem,0.72fr)] lg:items-end lg:gap-20">
          <div>
            <div className="mb-12 flex items-center gap-4">
              <span className="h-px w-12 bg-charcoal/40" />
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-charcoal/55">
                About Michael Proctor
              </p>
            </div>

            <h1 className="max-w-[12ch] font-serif text-[3.4rem] leading-[0.92] tracking-[-0.055em] sm:text-[4.8rem] md:text-[6.1rem] lg:text-[6.9rem]">
              I make complicated work easier&nbsp;to understand and act on.
            </h1>

            <div className="mt-10 grid gap-6 border-t border-charcoal/25 pt-6 sm:grid-cols-[9rem_1fr]">
              <p className="text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.22em] text-moss">
                The short version
              </p>
              <p className="max-w-2xl text-lg font-light leading-relaxed text-charcoal/72 md:text-xl">
                I&apos;m Michael, a systems-minded marketer, storyteller, and builder. I help leaders turn unclear requests and complex ideas into clear stories, practical plans, and finished work.
              </p>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="absolute -left-3 -top-3 h-full w-full border border-charcoal/20 bg-[#E9E2D2]" />
            <img
              src="/images/optimized/about-headshot-640.webp"
              srcSet="/images/optimized/about-headshot-640.webp 640w, /images/optimized/about-headshot-1200.webp 1200w"
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 512px, calc(100vw - 40px)"
              alt="Michael Proctor"
              width="1200"
              height="1600"
              className="relative aspect-[4/5] w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption className="relative mt-5 grid grid-cols-2 gap-4 border-t border-charcoal/25 pt-3 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-charcoal/50">
              <span>Creative strategist</span>
              <span className="text-right">Filmmaker + builder</span>
            </figcaption>
          </figure>
        </div>
      </header>

      <section className="bg-charcoal px-5 py-24 text-parchment sm:px-8 md:py-36 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(20rem,0.8fr)_minmax(0,1fr)] lg:items-center lg:gap-24">
          <figure>
            <img
              src="/images/optimized/nicaragua-coffee-640.webp"
              srcSet="/images/optimized/nicaragua-coffee-640.webp 640w, /images/optimized/nicaragua-coffee-1200.webp 1200w"
              sizes="(min-width: 1024px) 38vw, calc(100vw - 40px)"
              alt="Michael working alongside a local partner in Nicaragua"
              loading="lazy"
              decoding="async"
              width="1200"
              height="800"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 text-[0.58rem] font-medium uppercase tracking-[0.18em] text-parchment/45">
              Working alongside local partners in Nicaragua
            </figcaption>
          </figure>

          <div>
            <p className="mb-6 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-gold">
              Where I do my best work
            </p>
            <h2 className="max-w-[13ch] font-serif text-[2.85rem] leading-[0.98] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Most of my work happens between the boxes on an org chart.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg font-light leading-relaxed text-parchment/68">
              <p>
                At One Collective, I work across executive leaders, six departments, international field teams, subject-matter experts, contractors, and creative partners. The work often arrives as a request for a video, campaign, website, podcast, or report.
              </p>
              <p>
                My role is to identify what the organization actually needs, translate between people who see different parts of the problem, and create a path from idea through delivery. That has included managing 12 to 15 active projects, coordinating more than ten contractors, and staying close enough to write, interview, film, edit, build, or troubleshoot when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-charcoal/20 px-5 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {proofPoints.map((point, index) => (
            <div
              key={point.label}
              className={`px-3 py-9 sm:px-6 md:py-12 ${index % 2 === 0 ? 'border-r border-charcoal/20' : ''} ${index < 2 ? 'border-b border-charcoal/20 md:border-b-0' : ''} ${index === 1 ? 'md:border-r' : ''}`}
            >
              <p className="font-serif text-3xl leading-none sm:text-4xl">{point.value}</p>
              <p className="mt-3 max-w-[12rem] text-[0.6rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-charcoal/50">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 border-b border-charcoal/25 pb-10 md:grid-cols-[0.7fr_1fr] md:items-end">
            <div>
              <p className="mb-5 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-moss">
                How I work
              </p>
              <h2 className="max-w-[9ch] font-serif text-[3rem] leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Question. Translate. Move.
              </h2>
            </div>
            <p className="max-w-xl text-lg font-light leading-relaxed text-charcoal/65 md:justify-self-end">
              I am at my best when I can ask the question others are moving too quickly to notice, then help people build momentum around a clearer answer.
            </p>
          </div>

          <div>
            {principles.map((principle) => (
              <article key={principle.number} className="grid gap-5 border-b border-charcoal/20 py-9 md:grid-cols-[6rem_minmax(15rem,0.8fr)_minmax(0,1fr)] md:items-start md:gap-10 md:py-12">
                <p className="font-serif text-3xl text-moss/55">{principle.number}</p>
                <h3 className="font-serif text-[2rem] leading-tight tracking-[-0.03em] md:text-[2.5rem]">
                  {principle.title}
                </h3>
                <p className="max-w-2xl text-base font-light leading-relaxed text-charcoal/68 md:text-lg">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E9E2D2] px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-charcoal/25 pb-20 md:grid-cols-[minmax(14rem,0.55fr)_minmax(0,1fr)] md:gap-20 md:pb-28">
            <div>
              <p className="mb-5 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-moss">
                A good fit
              </p>
              <h2 className="max-w-[10ch] font-serif text-[3rem] leading-[0.95] tracking-[-0.045em] sm:text-5xl">
                I&apos;m especially useful when...
              </h2>
            </div>

            <div className="border-t border-charcoal/25">
              {fitSignals.map((signal, index) => (
                <div key={signal.title} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 border-b border-charcoal/25 py-7 sm:grid-cols-[3rem_minmax(12rem,0.85fr)_minmax(0,1fr)] sm:gap-7">
                  <p className="pt-1 text-[0.62rem] font-semibold tracking-[0.18em] text-moss/65">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-[1.7rem]">
                    {signal.title}
                  </h3>
                  <p className="col-start-2 text-sm font-light leading-relaxed text-charcoal/65 sm:col-start-auto sm:text-base">
                    {signal.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-14 md:mt-28 lg:grid-cols-[minmax(0,0.8fr)_minmax(24rem,1fr)] lg:items-center lg:gap-24">
          <div>
            <p className="mb-6 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-moss">
              Outside the brief
            </p>
            <h2 className="max-w-[11ch] font-serif text-[3rem] leading-[0.96] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Curiosity usually turns into a project.
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg font-light leading-relaxed text-charcoal/70">
              <p>
                Before I managed creative systems, I worked in IT and as an automotive technician. Both taught me to listen carefully, trace a failure back to its source, and leave a system easier to use than I found it.
              </p>
              <p>
                That instinct follows me home. I tend to be modeling a part, wiring a light, training an AI agent, or learning some tool I did not know a month earlier. I learn best when an idea has to survive contact with the real world.
              </p>
            </div>
            <Link
              to="/projects"
              className="group mt-9 inline-flex min-h-11 items-center gap-3 border-b border-charcoal/40 pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors hover:border-clay hover:text-clay"
            >
              See what I build to learn
              <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-[0.72fr_1fr] items-end gap-3 sm:gap-5">
            <img
              src="/images/optimized/project-phoem-build.webp"
              alt="A personal hardware project in development"
              loading="lazy"
              decoding="async"
              width="1200"
              height="1600"
              className="aspect-[3/4] w-full object-cover"
            />
            <img
              src="/images/optimized/project-workshop-wide.webp"
              alt="Working through a physical prototype"
              loading="lazy"
              decoding="async"
              width="1600"
              height="1000"
              className="mb-8 aspect-[4/3] w-full object-cover sm:mb-14"
            />
          </div>
        </div>
        </div>
      </section>

      <section className="px-5 py-28 text-center sm:px-8 md:py-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-7 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-moss">
            The practical next step
          </p>
          <h2 className="font-serif text-[3.1rem] leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Have something tangled?
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-lg font-light leading-relaxed text-charcoal/65">
            You do not need a perfect brief. Bring the problem as you currently understand it, and we can start there.
          </p>
          <Link
            to="/start"
            className="group mt-10 inline-flex min-h-12 items-center gap-4 bg-charcoal px-7 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-parchment transition-transform duration-300 hover:-translate-y-1"
          >
            Let&apos;s talk
            <ArrowUpRight size={17} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
