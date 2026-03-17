const diagnosisLines = [
  'You probably do not need more creative.',
  'You probably need clearer strategy and language.',
  'Because a beautiful answer to the wrong problem is still the wrong answer.',
];

const frustrationLines = [
  'Maybe you have felt this before.',
  'You hired someone to make the thing.',
  'The thing looked good.',
  'But it never quite solved what you hoped it would.',
  'The brief was clear.',
  'The underlying problem was not.',
];

const reframeItems = [
  'We are not clear on what matters.',
  'Our message is muddy.',
  'We do not understand our audience well enough to speak to them clearly.',
  'Leadership is asking marketing to carry the weight of deeper confusion.',
  'Creative is often where the pain shows up. Not where it starts.',
];

const michaelIntro = [
  "I'm Michael.",
  'I make films, campaigns, and brand work. But most of my work starts earlier than that.',
  'I ask the uncomfortable question first.',
  `Not "what do you want made?" but "what is actually going on?" Most creative problems are clarity problems in disguise.`,
  'I build what matters.',
  'I like complex problems where story, systems, and human reality collide. Beauty matters, but not as decoration. I care more whether the work is true, aligned, and built to do what it is supposed to do.',
];

const processSteps = [
  {
    title: 'You reach out.',
    body: "Usually with a brief, a problem, or a half-formed question. We talk. I ask questions that may feel uncomfortable — less about deliverables, more about what's actually going on beneath the ask.",
  },
  {
    title: 'We get honest.',
    body: "Before anything gets made, we define the real problem together. Sometimes this takes one conversation. Sometimes several. Occasionally, it changes the brief entirely. That's not a detour — that's the work.",
  },
  {
    title: 'Then we build.',
    body: 'Once we know what we are actually solving, I make the thing designed for that specific reality. A film. A campaign. A messaging system. A clearer path forward. Something that fits.',
  },
];

const selectedWork = [
  {
    title: 'Ukraine Housing Campaign',
    tension:
      'A story built to move people from awareness to action, helping raise over $500,000 for safe homes in Ukraine.',
    story:
      'What looked like a fundraising video was really a trust and clarity problem. The work needed to do more than inform. It needed to help people feel the stakes, understand the response, and believe their giving would matter.',
    cta: 'View Case Study',
    link: '/work/ukraine',
  },
  {
    title: 'The Nicaragua Campaign',
    tension:
      'Connecting international audiences to local realities without the poverty porn.',
    story:
      'The nonprofit space is notoriously saturated with campaigns that lean heavily into guilt to drive donations. Our client wanted a holistic brand campaign that honored the dignity of the local Nicaraguan communities while still demonstrating urgent need.',
    cta: 'View Case Study',
    link: '/work/nicaragua',
  },
  {
    title: 'Full Work Archive',
    eyebrow: 'Beyond These Two',
    tension:
      'These two are the sharpest examples. Beyond them is a broader archive of commercial work, documentary shorts, brand campaigns, and full creative systems built over years.',
    cta: 'Explore The Full Work Archive',
    link: '/work',
  },
];

const services = [
  'Film & Video Production: End-to-end production of brand films, documentary shorts, fundraising campaigns, and launch videos. From concept and script through shoot, edit, and delivery.',
  'Campaign Strategy & Creative Direction: Full campaign architecture — message sequencing, audience mapping, channel strategy, and the creative system to hold it together across every touchpoint.',
  "Brand Messaging & Clarity: Positioning, voice, language, and the core story that makes everything else perform. Ideal when you have a strong offer but the language around it isn't landing.",
  'Website Design & Copywriting: Strategy-led web design paired with copy that earns attention and converts it. Built for organizations that want a site that works, not just one that looks good.',
  'Embedded Creative Partnership: Ongoing creative leadership for organizations that need a trusted collaborator — not a vendor. Available for retainer or project-based engagements.',
];

const philosophy = [
  'Good work requires good partnership.',
  'I like collaborating with leaders who value clarity over noise, ask hard questions, and want to build work that is actually useful.',
  'Clarity & Honesty: I care about work that is clear, honest, and useful. Beauty matters, but not as decoration.',
  'Structure & Action: I am drawn to the intersection of story, structure, faith, art, and action. Better questions usually lead to better decisions.',
  'Truth & Utility: I am not interested in a beautiful answer to the wrong problem. I want to help you get closer to what is true, then build something your audience can actually use.',
];

const finalCtas = [
  {
    title: 'Start the Diagnostic',
    body: 'Walk through the core tension, outcome, and obstacles first. It is the best fit if you are interested but still sorting out what is really needed.',
  },
  {
    title: 'Schedule a Call',
    body: 'If you already know you want to talk, book time directly and we will look at the problem together.',
  },
  {
    title: 'Email Me Directly',
    body: 'hello@michaelproctor.co',
  },
];

function ReviewSection({ title, children, subtitle }) {
  return (
    <section className="border-t border-charcoal/10 pt-10 first:border-t-0 first:pt-0">
      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-charcoal/45">
          Home Page Section
        </p>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl text-charcoal">{title}</h2>
        {subtitle && <p className="mt-3 max-w-3xl text-base md:text-lg text-charcoal/65">{subtitle}</p>}
      </div>
      <div className="space-y-4 text-lg leading-relaxed text-charcoal/85">{children}</div>
    </section>
  );
}

export default function HomeReviewPage() {
  return (
    <div className="min-h-screen bg-white text-charcoal print:bg-white">
      <div className="no-print sticky top-0 z-10 border-b border-charcoal/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-charcoal/45">Review Copy</p>
            <h1 className="font-serif text-2xl text-charcoal">Home Page Review Sheet</h1>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full border border-charcoal/20 px-5 py-2 text-xs uppercase tracking-[0.2em] text-charcoal transition-colors hover:border-charcoal/50"
          >
            Print
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        <header className="mb-12 border border-charcoal/10 bg-[#F8F6F1] p-6 md:p-8 print:bg-white">
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal">Static Home Copy Review</h2>
          <p className="mt-4 max-w-3xl text-base md:text-lg text-charcoal/70">
            This page is a static review version of the homepage copy. It removes the animations and layout effects so you can print it, mark it up by hand, or send another AI agent here to crawl the text cleanly.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-charcoal/70 md:grid-cols-2">
            <p><strong>Live home page:</strong> <a className="underline" href="/">/</a></p>
            <p><strong>Review page:</strong> <a className="underline" href="/home-review">/home-review</a></p>
          </div>
        </header>

        <div className="space-y-14">
          <ReviewSection title="Diagnosis" subtitle="Opening thesis / hero sequence">
            {diagnosisLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </ReviewSection>

          <ReviewSection title="Frustration" subtitle="Recognition and emotional setup">
            {frustrationLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </ReviewSection>

          <ReviewSection title="Problem Reframe" subtitle='The "we need a video" diagnosis section'>
            <p>The request is not always the problem.</p>
            <p>Sometimes "we need a video" actually means:</p>
            <ul className="list-disc space-y-2 pl-6">
              {reframeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ReviewSection>

          <ReviewSection title="Michael Intro" subtitle="Guide positioning / founder section">
            {michaelIntro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </ReviewSection>

          <ReviewSection title="Working Together" subtitle="Process section">
            <ol className="space-y-6">
              {processSteps.map((step, index) => (
                <li key={step.title}>
                  <p className="text-sm uppercase tracking-[0.2em] text-charcoal/45">Step {String(index + 1).padStart(2, '0')}</p>
                  <p className="mt-1 font-serif text-2xl text-charcoal">{step.title}</p>
                  <p className="mt-2">{step.body}</p>
                </li>
              ))}
            </ol>
          </ReviewSection>

          <ReviewSection title="Selected Work" subtitle="Homepage featured case studies">
            <div className="space-y-8">
              {selectedWork.map((project) => (
                <article key={project.title} className="border border-charcoal/10 p-5 md:p-6">
                  {project.eyebrow && (
                    <p className="text-xs uppercase tracking-[0.25em] text-charcoal/45">{project.eyebrow}</p>
                  )}
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl text-charcoal">{project.title}</h3>
                  <p className="mt-3 text-xl italic text-charcoal/80">{project.tension}</p>
                  {project.story && <p className="mt-4">{project.story}</p>}
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-charcoal/45">
                    CTA: {project.cta} ({project.link})
                  </p>
                </article>
              ))}
            </div>
          </ReviewSection>

          <ReviewSection title="Services Offered" subtitle="Capabilities section">
            <ul className="list-disc space-y-3 pl-6">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </ReviewSection>

          <ReviewSection title="Philosophy / Grounding" subtitle="Values and partnership section">
            {philosophy.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </ReviewSection>

          <ReviewSection title="Final CTA" subtitle="Closing invitation and next steps">
            <p>Something worth talking through?</p>
            <p>
              No pitch. No package pushed at you. Just a conversation about what you are trying to do and whether I am the right person to help with it.
            </p>
            <div className="space-y-5">
              {finalCtas.map((cta) => (
                <div key={cta.title} className="border border-charcoal/10 p-5">
                  <h3 className="font-serif text-2xl text-charcoal">{cta.title}</h3>
                  <p className="mt-2">{cta.body}</p>
                </div>
              ))}
            </div>
          </ReviewSection>
        </div>
      </main>
    </div>
  );
}
