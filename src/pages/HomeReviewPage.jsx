const diagnosisLines = [
  "You don't have a creative problem.",
  'You have a clarity Problem.',
  'Most teams are solving symptoms, not root problems.',
  'I help you solve the root problem.',
];

const frustrationLines = [
  "You've probably felt this before:",
  'You hired someone to make the thing.',
  'A video, a campaign, a new site.',
  'The thing looked good, but it never quite had the results you hoped for.',
  'The brief was clear.',
  'The underlying problem was not.',
];

const reframeItems = [
  "We lack clarity on our core product.",
  "Our messaging is confusing our audience.",
  "We are struggling to build genuine trust.",
  "We're trying to solve a strategic issue with a creative asset.",
  'Creative is often where the pain shows up, not where it starts.',
];

const michaelIntro = [
  "I've helped solve marketing and strategy problems",
  'for nonprofits and small businesses for over eight years.',
  "What I've learned is to start by asking the uncomfortable questions first.",
  "The questions that usually don't get asked until you've spent time and money on the thing.",
  'Because most creative problems are clarity problems in disguise.',
  "Once we're clear, I build what fits.",
  'Film, campaign, web copy, or systems. Whatever actually solves the underlying problem.',
];

const processSteps = [
  {
    title: 'You come with a direction.',
    body: "Whether it's a project, a goal, or something that you've been trying to solve, that's enough to start.",
  },
  {
    title: 'We dig into the problem.',
    body: "We follow the tension underneath the ask, even when it leads into messaging, trust, product, or decision-making issues. That's not a detour, it's the work.",
  },
  {
    title: 'We build the thing.',
    body: 'Once the real problem is clear, we build what fits it best, with the right level of craft, strategy, and restraint.',
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

const inPractice = [
  "Sometimes it's a film: A story-led piece built to clarify the message, earn trust, and move people toward action.",
  "Sometimes it's a campaign: A bigger creative system designed to connect strategy, story, and execution across multiple touchpoints.",
  "Sometimes it's fixing your overall messaging: Clarifying what you do, how you say it, and why people should trust it before more creative gets layered on top.",
  "Sometimes it's realizing you don't need any of it: Sometimes the most useful outcome is identifying the real issue before more time and money go into the wrong solution.",
];

const idealFit = [
  'You have tried a few things, but nothing really is clicking.',
  'You want a second perspective, not just an executor.',
  "You care more about what's true than what looks impressive.",
  'You are willing to dig layer after layer for what the actual problem is.',
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
            <p>The request is not always the real problem.</p>
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

          <ReviewSection title="The Process" subtitle="Process section">
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

          <ReviewSection title="What This Looks Like In Practice" subtitle="Capabilities section">
            <ul className="list-disc space-y-3 pl-6">
              {inPractice.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ReviewSection>

          <ReviewSection title="Who Is This For?" subtitle="Ideal-fit section">
            {idealFit.map((line) => (
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
