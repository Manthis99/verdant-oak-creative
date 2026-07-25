import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveUpRight, Compass, Shovel, Hammer, Target, Shield, Filter, FileSearch } from 'lucide-react';

const reframeItems = [
  "We lack clarity on our core product.",
  "Our messaging is confusing our audience.",
  "We are struggling to build genuine trust.",
  "We're trying to solve a strategic issue with a creative asset.",
];

const processSteps = [
  {
    icon: Compass,
    title: 'The Starting Point',
    body: "You come with a direction. Whether it's a project, a goal, or a friction point, that's enough to start."
  },
  {
    icon: Shovel,
    title: 'The Excavation',
    body: "We dig into the problem. We follow the tension underneath the ask, even when it leads into messaging or trust issues."
  },
  {
    icon: Hammer,
    title: 'The Execution',
    body: 'We build the thing. Once the real problem is clear, we build what fits it best, with the right level of craft.'
  },
];

const selectedWork = [
  {
    title: 'Ukraine Housing Campaign',
    tension: 'A brand identity built to move people from awareness to action, raising over $500,000 for safe homes.',
    link: '/work/ukraine',
    image: '/images/misc photos/Oxford-20203-guardening_shed_working-40.jpg',
    tags: ['Brand Identity', 'Fundraising Film']
  },
  {
    title: 'The Nicaragua Campaign',
    tension: 'Connecting international audiences to local realities without the poverty porn.',
    link: '/work/nicaragua',
    image: '/images/misc photos/Nicaragua-laughing-friend-mentoring-workign-coffeeshop-2025-232.jpg',
    tags: ['Documentary Archive', 'Campaign']
  },
  {
    title: 'Full Work Archive',
    tension: 'A broader archive of full creative systems built over years.',
    link: '/work',
    image: '/images/South Africa Images/SA-By_Michael_Proctor-3.jpg_compressed.JPEG',
    tags: ['Commercial', 'Systems']
  },
];

const inPractice = [
  { icon: Target, label: "Documentary shorts & Brand films" },
  { icon: Target, label: "High-conversion campaign systems" },
  { icon: Target, label: "Root-level messaging & copywriting" },
  { icon: Target, label: "Diagnostic strategy before scale" },
];

const idealFit = [
  'You have tried a few things, but nothing really is clicking.',
  'You want a second perspective, not just an executor.',
  "You care more about what's true than what looks impressive.",
  'You are willing to dig layer after layer for what the actual problem is.',
];

export default function IndexPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0EFEB] text-charcoal font-sans selection:bg-gold/30">

      {/* 1. Centered Hero Block */}
      <header className="pt-40 pb-20 text-center max-w-4xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-6">Overview</p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8">
          Most creative problems are clarity problems.
        </h1>
        <p className="text-charcoal/70 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          You don't have a creative problem. You have a clarity problem. Most teams are solving symptoms, not root problems. We fix the root.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/start" className="w-full sm:w-auto px-8 py-4 bg-charcoal text-parchment rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-black transition-colors shadow-xl shadow-black/10">
            Start the Diagnostic
          </Link>
          <Link to="/book" className="w-full sm:w-auto px-8 py-4 border border-charcoal/20 text-charcoal rounded-full text-sm font-semibold tracking-widest uppercase hover:border-charcoal/60 transition-colors">
            Schedule a Call
          </Link>
        </div>
      </header>

      {/* Large Hero Media */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-white rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/5 border border-charcoal/5 relative">
          <img
            src="/images/optimized/clarity-hero-1280.webp"
            srcSet="/images/optimized/clarity-hero-640.webp 640w, /images/optimized/clarity-hero-1280.webp 1280w, /images/optimized/clarity-hero-1920.webp 1920w"
            sizes="(min-width: 768px) 1152px, 100vw"
            className="w-full h-full object-cover saturate-0 opacity-90 hover:saturate-100 hover:opacity-100 transition-all duration-1000"
            alt="Hero visualization"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* 2. 3-Column Features Grid (The Process) */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">The Methodology</h2>
          <p className="text-charcoal/60 max-w-xl mx-auto">Three phases to move from ambiguity to execution.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          {processSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-charcoal/10 flex items-center justify-center mb-6 shadow-sm group-hover:-translate-y-1 transition-transform">
                <step.icon size={24} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
              <p className="font-light text-charcoal/70 leading-relaxed text-sm">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Alternating Block - Left Text / Right Image (Problem Reframe) */}
      <section className="max-w-6xl mx-auto px-6 py-32 border-t border-charcoal/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest text-gold uppercase shadow-sm">The Reality Check</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-6 mb-8">
              "We just need a video." <br/><span className="text-charcoal/40 italic">Usually means something else.</span>
            </h2>
            <p className="text-lg font-light text-charcoal/70 leading-relaxed mb-10">
              The request is almost never the real problem. Creative execution is often just the place where deeper strategic pain shows up.
            </p>
            <ul className="space-y-4">
              {reframeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white border border-charcoal/10 flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                  </div>
                  <span className="text-charcoal/80 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Composite Image Cluster */}
          <div className="relative h-[600px] w-full rounded-3xl bg-white/50 border border-charcoal/5 overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

             {/* Abstract Field Guide Mockup */}
             <div className="relative z-10 w-64 h-80 bg-white shadow-2xl rounded p-8 flex flex-col transform rotate-[-4deg] hover:rotate-0 transition-transform duration-700">
                <div className="h-0.5 w-12 bg-charcoal mb-8"></div>
                <h4 className="font-serif text-2xl leading-tight mb-4">Why A Great Video is a Waste of Money</h4>
                <div className="mt-auto flex justify-between items-end">
                    <span className="text-[10px] uppercase font-bold text-charcoal/40">Field Guide</span>
                    <FileSearch size={16} className="text-gold" />
                </div>
             </div>

             <div className="absolute bottom-16 right-16 w-32 h-40 bg-charcoal/5 backdrop-blur-md border border-white/50 rounded-xl shadow-xl transform rotate-[12deg]"></div>
          </div>
        </div>
      </section>

      {/* 4. "Logo Bar" Style Capabilities Grid */}
      <section className="bg-white py-24 mb-10 border-y border-charcoal/5">
        <div className="max-w-6xl mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-widest text-charcoal/40 font-semibold mb-12">Tactical Outputs</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {inPractice.map((prac, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-[#F0EFEB] flex items-center justify-center mb-4">
                            <prac.icon size={18} className="text-charcoal/60" />
                        </div>
                        <p className="text-sm font-medium text-charcoal/80 leading-snug">{prac.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Alternating Block - Left Text / Right List (Ideal Fit) */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-5 gap-20">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">Are we actually an ideal fit?</h2>
            <p className="text-charcoal/60 font-light leading-relaxed mb-8">
              I don't just churn out assets. If you are looking for an executor to quickly build exactly what you mocked up without asking questions, I am the wrong person.
            </p>
            <Link to="/book" className="inline-flex items-center gap-2 text-gold font-semibold uppercase tracking-widest text-sm group hover:text-charcoal transition-colors">
              Read Michael's Bio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white border border-charcoal/5 shadow-xl shadow-charcoal/5 rounded-3xl p-10">
                <ul className="space-y-6">
                    {idealFit.map((fit, i) => (
                        <li key={i} className="flex items-start gap-4 pb-6 border-b border-charcoal/5 last:border-0 last:pb-0">
                            <Shield size={20} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                            <p className="text-charcoal/80 text-lg font-light leading-relaxed">{fit}</p>
                        </li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Horizontal Cards Row (Selected Work) */}
      <section className="py-32 bg-charcoal text-parchment relative overflow-hidden">
        {/* Subtle noise */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="font-serif text-4xl mb-4">Selected Engagements</h2>
                    <p className="text-parchment/60 font-light">Recent case studies and full systems.</p>
                </div>
                <Link to="/work" className="hidden md:flex items-center gap-2 text-gold uppercase text-xs font-bold tracking-widest hover:text-white transition-colors">
                    View All Work <MoveUpRight size={14} />
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {selectedWork.map((work, i) => (
                    <Link key={i} to={work.link} className="group relative rounded-3xl overflow-hidden bg-black aspect-[4/5] md:aspect-auto md:h-[450px]">
                        <img
                          src={work.image}
                          alt={work.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {work.tags.map(tag => (
                                    <span key={tag} className="text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="font-serif text-2xl text-white mb-2">{work.title}</h3>
                            <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-2 mix-blend-screen">{work.tension}</p>
                        </div>
                    </Link>
                ))}
            </div>

            <Link to="/work" className="md:hidden flex items-center justify-center w-full mt-12 gap-2 text-gold uppercase text-xs font-bold tracking-widest hover:text-white transition-colors py-4 border border-white/10 rounded-full">
                View All Work <MoveUpRight size={14} />
            </Link>
        </div>
      </section>

      {/* 7. Final Clean CTA */}
      <section className="py-40 text-center max-w-3xl mx-auto px-6">
        <div className="w-16 h-16 rounded-full bg-white border border-charcoal/10 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-gold/5">
            <Filter className="text-gold" size={24} />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">Something worth talking through?</h2>
        <p className="text-charcoal/60 font-light text-lg mb-12">
            No pitch. No package. Just a conversation about what you are trying to do, and whether I am the right person to help you do it.
        </p>
        <div className="flex justify-center">
            <Link to="/start" className="px-10 py-5 bg-charcoal text-parchment rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-black hover:scale-105 transition-all shadow-2xl shadow-charcoal/20">
                Start the Diagnostic
            </Link>
        </div>
      </section>

    </div>
  );
}
