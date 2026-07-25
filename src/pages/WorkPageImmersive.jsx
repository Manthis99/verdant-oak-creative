import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../data/portfolioData';
import EmailDisplay from '../components/EmailDisplay';

gsap.registerPlugin(ScrollTrigger);

const FINAL_STEP_ID = portfolioData.length + 1;

export default function WorkPageImmersive() {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(portfolioData[0]?.id ?? null);
  const [selectedProject, setSelectedProject] = useState(null);

  const getEmbedSrc = (project) => {
    const separator = project.embedUrl.includes('?') ? '&' : '?';
    const params = project.provider === 'vimeo'
      ? 'autoplay=1&color=ffffff&title=0&byline=0&portrait=0'
      : 'autoplay=1';

    return `${project.embedUrl}${separator}${params}`;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // lock scroll
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const offset = 88;
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: Math.max(0, y),
      behavior: 'smooth',
    });
  };

  useGSAP(
    () => {
      const sections = gsap.utils.toArray('.immersive-project');

      sections.forEach((section) => {
        const projectId = Number(section.getAttribute('data-project-id'));
        const image = section.querySelector('.immersive-image');
        const eyebrow = section.querySelector('.immersive-eyebrow');
        const title = section.querySelector('.immersive-title');
        const body = section.querySelector('.immersive-body');
        const actions = section.querySelector('.immersive-actions');
        const chips = section.querySelectorAll('.immersive-chip');

        gsap.fromTo(
          image,
          { scale: 1.18, yPercent: -6 },
          {
            scale: 1,
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveId(projectId),
          onEnterBack: () => setActiveId(projectId),
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            end: 'top 28%',
            toggleActions: 'play none none reverse',
          },
        });

        tl.fromTo(
          [eyebrow, title, body, actions],
          { y: 48, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.08 }
        ).fromTo(
          chips,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.05 },
          '-=0.55'
        );
      });

      ScrollTrigger.create({
        trigger: '.immersive-cta-section',
        start: 'top center',
        end: 'bottom bottom',
        onEnter: () => setActiveId(FINAL_STEP_ID),
        onEnterBack: () => setActiveId(FINAL_STEP_ID),
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-[#0A0A0A] text-parchment">
      <section className="relative min-h-[100svh] overflow-hidden px-6 pb-12 pt-32 md:px-10 lg:px-16">
        <div className="absolute inset-0">
          <img
            src="/images/misc photos/athens-acropolise_door-framed-2023-278.jpg"
            alt="Selected work background"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.88)_0%,rgba(8,8,8,0.56)_40%,rgba(8,8,8,0.8)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(233,225,194,0.14),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_28%)]" />
        </div>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

        <div className="relative mx-auto flex min-h-[calc(100svh-8rem)] max-w-[1500px] flex-col justify-between">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-start">
            <div className="max-w-5xl">
              <div className="mb-8 ml-8 inline-flex -rotate-[7deg] flex-col border-2 border-gold/70 bg-[#141414]/78 px-5 py-3 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm md:ml-16 lg:ml-24">
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.45em] text-gold/70">Under Construction</span>
                <span className="mt-2 text-lg font-semibold uppercase tracking-[0.3em] text-gold">Draft Portfolio</span>
              </div>
              <p className="mb-8 text-xs uppercase tracking-[0.35em] text-gold/70">Selected Work</p>
              <h1 className="font-serif text-[4rem] leading-[0.92] tracking-[-0.04em] text-parchment md:text-[6.6rem] xl:text-[8.8rem]">
                Work made
                <br />
                to solve
                <br />
                real problems.
              </h1>
            </div>

            <div className="justify-self-start lg:justify-self-end lg:pt-10">
              <div className="max-w-xl lg:pt-24" />
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-parchment/45">
              <span className="h-px w-16 bg-gold/50" />
              Scroll through the portfolio
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em]">
              <Link
                to="/start"
                className="rounded-full border border-gold/40 px-5 py-3 text-gold transition-colors hover:bg-gold hover:text-charcoal"
              >
                Start the Diagnostic
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
        <div className="rounded-[2rem] border border-white/10 bg-black/30 px-4 py-5 backdrop-blur-xl">
          <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-parchment/35">Portfolio</div>
          <div className="flex flex-col gap-3">
            {portfolioData.map((project, index) => {
              const isActive = activeId === project.id;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => scrollToSection(`project-${project.id}`)}
                  className={`group flex items-center gap-3 text-left transition-colors ${isActive ? 'text-parchment' : 'text-parchment/35 hover:text-parchment/70'}`}
                >
                  <span className={`block h-px transition-all ${isActive ? 'w-8 bg-gold' : 'w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40'}`} />
                  <span className="text-[10px] uppercase tracking-[0.22em]">{String(index + 1).padStart(2, '0')}</span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => scrollToSection('final-step')}
              className={`group mt-2 flex items-center gap-3 text-left transition-colors ${activeId === FINAL_STEP_ID ? 'text-gold' : 'text-parchment/35 hover:text-parchment/70'}`}
            >
              <span className={`block h-px transition-all ${activeId === FINAL_STEP_ID ? 'w-8 bg-gold' : 'w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40'}`} />
              <span className="text-[10px] uppercase tracking-[0.22em]">{String(FINAL_STEP_ID).padStart(2, '0')} · Next</span>
            </button>
          </div>
        </div>
      </div>

      {portfolioData.map((project, index) => (
        <section
          key={project.id}
          id={`project-${project.id}`}
          data-project-id={project.id}
          className="immersive-project relative px-3 py-8 md:min-h-[145svh] md:px-6 md:pb-10 md:pt-10"
        >
          <div className="relative mx-auto h-auto max-w-[1600px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.45)] md:sticky md:top-[6.5rem] md:h-[calc(100svh-7.5rem)] md:rounded-[2.5rem]">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="immersive-image h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.88)_0%,rgba(7,7,7,0.54)_45%,rgba(7,7,7,0.68)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(212,175,55,0.12),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(212,175,55,0.08),transparent_30%)]" />
            </div>

            <div className="relative flex min-h-[48rem] flex-col justify-between gap-12 p-6 md:h-full md:min-h-0 md:gap-0 md:p-10 lg:p-14">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
                <div className="max-w-5xl">
                  <p className="immersive-eyebrow mb-5 text-xs uppercase tracking-[0.35em] text-gold/75">
                    {project.client}
                  </p>
                  <h2 className="immersive-title max-w-full break-words font-serif text-[clamp(2.35rem,11.5vw,3.15rem)] leading-[0.95] tracking-[-0.04em] text-parchment md:max-w-5xl md:text-[4.4rem] xl:text-[6.2rem]">
                    {project.title}
                  </h2>
                </div>

                <div className="hidden lg:block">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/22 p-6 backdrop-blur-md">
                    <div className="mb-5 text-[10px] uppercase tracking-[0.32em] text-parchment/35">
                      Project Snapshot
                    </div>
                    <div className="space-y-5">
                      {project.immersiveMeta?.map((item) => (
                        <div key={item.label} className="border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
                          <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-gold/65">
                            {item.label}
                          </div>
                          <p className="text-sm font-light leading-relaxed text-parchment/68">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(260px,0.55fr)] lg:items-end">
                <div className="max-w-2xl">
                  <p className="immersive-body mb-8 text-lg font-light leading-relaxed text-parchment/78 md:text-[1.35rem]">
                    {project.description}
                  </p>

                  {project.deliverables?.length > 0 && (
                    <div className="mb-8 flex flex-wrap gap-3">
                      {project.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="immersive-chip rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-parchment/76 backdrop-blur-md"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="immersive-actions flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-6 py-3 text-xs uppercase tracking-[0.24em] text-gold transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-charcoal sm:tracking-[0.28em]"
                    >
                      Play Film
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>

                    {project.caseStudyLink && (
                      <Link
                        to={project.caseStudyLink}
                        className="inline-flex min-h-11 items-center gap-3 border-b border-white/20 py-2 text-xs uppercase tracking-[0.24em] text-parchment/72 transition-colors hover:border-white/50 hover:text-parchment sm:tracking-[0.28em]"
                      >
                        View Full Case Study
                      </Link>
                    )}
                  </div>
                </div>

                <div className="justify-self-start lg:justify-self-end">
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/24 p-5 backdrop-blur-md">
                    <div className="mb-4 text-[10px] uppercase tracking-[0.3em] text-parchment/38">
                      Why It Mattered
                    </div>
                    <p className="text-base font-light leading-relaxed text-parchment/64">
                      {project.immersiveNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id="final-step" className="immersive-cta-section relative px-3 pb-20 pt-10 md:px-6">
        <div className="relative mx-auto flex h-auto min-h-[calc(100svh-6rem)] max-w-[1600px] items-center overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_40px_120px_rgba(0,0,0,0.35)] sm:p-8 md:h-[calc(100svh-7.5rem)] md:rounded-[2.5rem] md:p-12 lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.12),transparent_35%)] pointer-events-none" />
          <div className="relative z-10 grid min-w-0 w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="min-w-0 max-w-4xl">
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold/70">If You Made It This Far</p>
              <h2 className="max-w-full break-words font-serif text-[2.65rem] leading-[1.02] tracking-[-0.04em] text-parchment sm:max-w-[12ch] sm:text-[3.2rem] md:text-[4.8rem] md:leading-[1.01] xl:text-[6.2rem] xl:leading-[1.02]">
                You probably are not looking for more content.
              </h2>
              <p className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-parchment/72 md:text-[1.3rem]">
                You are probably trying to figure out what kind of work would actually help, what needs clarifying first, and whether you can trust someone to think with you before they make anything.
              </p>
            </div>

            <div className="min-w-0 w-full justify-self-start lg:justify-self-end">
              <div className="min-w-0 w-full rounded-[1.75rem] border border-white/10 bg-black/28 p-5 backdrop-blur-md sm:p-6">
                <div className="mb-5 text-[10px] uppercase tracking-[0.32em] text-parchment/35">Best Next Step</div>
                <p className="mb-6 text-base font-light leading-relaxed text-parchment/66">
                  Start with the diagnostic if you want to name the real problem first. If you already know you want to talk, schedule a call. If email is simpler, use that.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/start"
                    className="group flex min-h-12 min-w-0 items-center justify-between gap-3 rounded-full border border-gold/40 bg-gold/10 px-4 py-3 text-[0.68rem] uppercase tracking-[0.14em] text-gold transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-charcoal sm:px-5 sm:py-4 sm:text-xs sm:tracking-[0.28em]"
                  >
                    <span className="min-w-0">Start the Diagnostic</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <Link
                    to="/book"
                    className="group flex min-h-12 min-w-0 items-center justify-between gap-3 rounded-full border border-white/12 px-4 py-3 text-[0.68rem] uppercase tracking-[0.14em] text-parchment/76 transition-colors duration-300 hover:border-white/30 hover:text-parchment sm:px-5 sm:py-4 sm:text-xs sm:tracking-[0.28em]"
                  >
                    <span className="min-w-0">Schedule a Call</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                  <div className="pt-4 flex justify-start">
                    <EmailDisplay />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-black/88 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(5rem,calc(env(safe-area-inset-top)+4rem))] backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] min-h-11 rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-parchment/70 transition-colors hover:text-parchment"
          >
            Close
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.28em] text-gold/70">{selectedProject.client}</p>
                <h3 className="font-serif text-3xl tracking-tight text-parchment md:text-5xl">{selectedProject.title}</h3>
              </div>
              {selectedProject.caseStudyLink && (
                <Link
                  to={selectedProject.caseStudyLink}
                  onClick={() => setSelectedProject(null)}
                  className="text-xs uppercase tracking-[0.25em] text-parchment/60 transition-colors hover:text-parchment"
                >
                  View Full Case Study
                </Link>
              )}
            </div>

            <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
              <iframe
                src={getEmbedSrc(selectedProject)}
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={selectedProject.title}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
