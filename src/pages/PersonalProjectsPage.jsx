import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalProjects } from '../data/personalProjects';

function ProjectVisual({ images, title, descriptor, visual, variant = 'photo', imageFit = 'cover', imageBackground }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden bg-[#171717] text-parchment shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(212,175,55,0.34),transparent_26%),linear-gradient(135deg,#252525_0%,#101010_58%,#513d18_100%)]" />
        <div className="absolute inset-5 border border-gold/35 p-5 sm:inset-8 sm:p-7">
          <div className="text-[10px] uppercase tracking-[0.28em] text-gold/80">
            {visual?.kicker || descriptor}
          </div>
          <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
            <div className="font-serif text-[4.5rem] leading-none tracking-[-0.06em] text-parchment sm:text-[6.5rem]">
              {visual?.stat || 'BUILD'}
            </div>
            <div className="mt-3 max-w-[14rem] text-xs uppercase tracking-[0.2em] text-parchment/60">
              {visual?.detail || title}
            </div>
            {visual?.steps && (
              <div className="mt-8 border-t border-white/15 pt-3 text-[9px] uppercase tracking-[0.18em] text-parchment/45">
                {visual.steps}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'prototype' && images.length >= 3) {
    return (
      <div className="group relative grid aspect-[5/4] grid-cols-[1.35fr_0.65fr] grid-rows-2 gap-2 overflow-hidden bg-charcoal p-2 shadow-2xl">
        <div className="relative row-span-2 overflow-hidden">
          <img
            src={images[0]}
            alt={`${title} finished prototype`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.72))]" />
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-parchment sm:inset-x-7 sm:bottom-7">
            <div>
              {visual?.stat && (
                <div className="font-serif text-5xl leading-none tracking-[-0.05em] sm:text-7xl">{visual.stat}</div>
              )}
              <div className={`text-[9px] uppercase tracking-[0.22em] text-parchment/60 ${visual?.stat ? 'mt-2' : ''}`}>Finished car</div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img src={images[1]} alt={`${title} chassis from above`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" />
          <span className="absolute bottom-3 left-3 bg-charcoal/80 px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-parchment/70 backdrop-blur-sm">Top view</span>
        </div>
        <div className="relative overflow-hidden">
          <img src={images[2]} alt={`${title} printed components`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" />
          <span className="absolute bottom-3 left-3 bg-charcoal/80 px-2 py-1 text-[8px] uppercase tracking-[0.18em] text-parchment/70 backdrop-blur-sm">Printed parts</span>
        </div>
      </div>
    );
  }

  if (variant === 'triptych' && images.length >= 3) {
    return (
      <div className="group grid aspect-[16/9] grid-cols-3 gap-1.5 overflow-hidden bg-charcoal p-1.5 shadow-2xl sm:gap-2 sm:p-2">
        {images.slice(0, 3).map((image, index) => (
          <div key={image} className="relative overflow-hidden">
            <img
              src={image}
              alt={`${title} ${['installed view', 'room view', 'reflector detail'][index]}`}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
              loading={index === 0 ? undefined : 'lazy'}
            />
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'clive') {
    return (
      <div className="relative min-h-[22rem] overflow-hidden bg-[#101212] p-5 text-parchment shadow-2xl sm:min-h-[30rem] sm:p-8">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(63,92,75,0.3),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.18),transparent_30%)]" />
        <div className="relative flex h-full min-h-[20rem] flex-col justify-between border border-white/15 p-5 sm:min-h-[26rem] sm:p-7">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.26em] text-parchment/45">
            <span>Local hardware prototype</span>
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#9fbe7a] shadow-[0_0_12px_#9fbe7a]" /> Voice input</span>
          </div>
          <div className="relative mx-auto w-full max-w-[19rem] overflow-hidden border border-white/15 bg-black/35 shadow-2xl">
            <img src={images[0]} alt={`${title} hardware prototype`} className="aspect-[4/3] w-full object-cover opacity-85" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.65))]" />
            <div className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.22em] text-gold/80">Long-term project memory</div>
          </div>
          <div className="flex items-end justify-between gap-5 text-[10px] uppercase tracking-[0.2em] text-parchment/45">
            <span>Voice / Memory / Tool use</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden bg-charcoal shadow-2xl ${variant === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}
      style={imageBackground ? { backgroundColor: imageBackground } : undefined}
    >
      <img
        src={images[currentIndex]}
        alt={`${title} snapshot ${currentIndex + 1}`}
        className={`h-full w-full transition duration-700 ${imageFit === 'contain' ? 'object-contain p-4 sm:p-7' : 'object-cover group-hover:scale-[1.035]'}`}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop';
        }}
      />
      <div className={`absolute inset-0 ${imageFit === 'contain' ? 'bg-[linear-gradient(180deg,transparent_66%,rgba(0,0,0,0.55)_100%)]' : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_46%,rgba(0,0,0,0.72)_100%)]'}`} />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/75 sm:inset-x-7 sm:bottom-7">
        <span>Image {currentIndex + 1} of {images.length}</span>
      </div>
      {images.length > 1 && (
        <div className="absolute inset-x-5 top-5 flex justify-end gap-2 opacity-100 transition-opacity sm:inset-x-7 sm:top-7 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
          <button type="button" onClick={prevImage} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white backdrop-blur-md hover:bg-white hover:text-charcoal focus-visible:bg-white focus-visible:text-charcoal focus-visible:outline-none" aria-label="Previous image">
            <ChevronLeft size={16} />
          </button>
          <button type="button" onClick={nextImage} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/35 text-white backdrop-blur-md hover:bg-white hover:text-charcoal focus-visible:bg-white focus-visible:text-charcoal focus-visible:outline-none" aria-label="Next image">
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectNotes({ project, dark = false }) {
  return (
    <div className={`mt-8 border-t pt-6 ${dark ? 'border-white/15' : 'border-charcoal/15'}`}>
      {project.facts?.length > 0 && (
        <div className="mb-7 flex flex-wrap gap-2">
          {project.facts.map((fact) => (
            <span key={fact} className={`border px-3 py-2 text-[9px] uppercase tracking-[0.2em] ${dark ? 'border-white/15 text-parchment/55' : 'border-charcoal/15 text-charcoal/55'}`}>
              {fact}
            </span>
          ))}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        <div>
          <h3 className="mb-2 text-[10px] uppercase tracking-[0.2em] text-gold">Why I built it</h3>
          <p className={`text-sm leading-relaxed ${dark ? 'text-parchment/65' : 'text-charcoal/72'}`}>{project.why}</p>
        </div>
        <div>
          <h3 className="mb-2 text-[10px] uppercase tracking-[0.2em] text-gold">What I learned</h3>
          <p className={`text-sm leading-relaxed ${dark ? 'text-parchment/65' : 'text-charcoal/72'}`}>{project.learned}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectLink({ project, dark = false }) {
  if (!project.link) return null;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`mt-4 inline-flex min-h-11 items-center gap-3 border-b py-2 text-[10px] uppercase tracking-[0.22em] transition-colors hover:border-gold hover:text-gold ${dark ? 'border-white/25 text-parchment' : 'border-charcoal/25 text-charcoal'}`}
    >
      {project.link.includes('github.com') ? <Github size={14} /> : <ExternalLink size={14} />}
      <span>{project.link.includes('github.com') ? 'View repository' : 'View the live site'}</span>
      <ArrowUpRight size={14} />
    </a>
  );
}

export default function PersonalProjectsPage() {
  const liveProjects = personalProjects.filter((project) => !project.archived);
  const archivedProjects = personalProjects.filter((project) => project.archived);

  useEffect(() => {
    const scrollToProject = () => {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      if (targetId) document.getElementById(targetId)?.scrollIntoView();
    };

    const animationFrame = window.requestAnimationFrame(scrollToProject);
    window.addEventListener('hashchange', scrollToProject);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('hashchange', scrollToProject);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e9e2d2] text-charcoal">
      <header className="flex min-h-screen flex-col bg-[#d8cfbd] pt-28 text-charcoal sm:pt-32">
        <div className="flex flex-1 flex-col border-y border-charcoal/25">
          <div className="grid border-b border-charcoal/25 text-[8px] uppercase tracking-[0.22em] text-charcoal/55 sm:grid-cols-3 sm:text-[9px]">
            <span className="border-b border-charcoal/20 px-5 py-4 sm:border-b-0 sm:border-r sm:px-7">Personal Projects</span>
            <span className="border-b border-charcoal/20 px-5 py-4 sm:border-b-0 sm:border-r sm:px-7">{String(liveProjects.length).padStart(2, '0')} finished builds</span>
            <span className="px-5 py-4 sm:px-7">Hardware / software / objects</span>
          </div>

          <div className="grid min-w-0 flex-1 lg:grid-cols-[0.68fr_1.35fr_0.9fr]">
            <div className="flex min-w-0 flex-col justify-between border-b border-charcoal/25 px-5 py-7 sm:px-7 lg:border-b-0 lg:border-r lg:py-10">
              <p className="max-w-[17rem] text-sm leading-relaxed text-charcoal/70">
                Projects I made to answer questions I could not answer by reading alone.
              </p>
              <p className="mt-10 text-[9px] uppercase leading-relaxed tracking-[0.19em] text-charcoal/45 lg:mt-20">
                Designed, built, tested,<br />and revised by Michael Proctor.
              </p>
            </div>

            <div className="flex min-w-0 items-center overflow-hidden border-b border-charcoal/25 px-5 py-10 sm:px-8 sm:py-14 lg:border-b-0 lg:border-r lg:px-10">
              <h1 className="min-w-0 font-serif text-[clamp(3.5rem,17vw,4.2rem)] leading-[0.82] tracking-[-0.06em] sm:text-[6rem] lg:text-[6.5rem] xl:text-[7rem]">
                <span className="block whitespace-nowrap">Built to</span>
                <span className="block whitespace-nowrap italic">understand.</span>
              </h1>
            </div>

            <div className="min-w-0 px-5 py-7 sm:px-7 lg:py-10">
              <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-charcoal/55">On this page</p>
              <nav aria-label="Projects on this page" className="border-t border-charcoal/25">
                {liveProjects.map((project, index) => (
                  <a
                    key={project.id}
                    href={`#project-${project.id}`}
                    className="group grid min-h-11 grid-cols-[1.8rem_minmax(0,1fr)_auto] items-center gap-2 border-b border-charcoal/20 py-2.5 text-[10px] uppercase tracking-[0.12em] transition-colors hover:text-gold"
                  >
                    <span className="text-charcoal/35 transition-colors group-hover:text-gold">{String(index + 1).padStart(2, '0')}</span>
                    <span className="line-clamp-1">{project.title}</span>
                    <ArrowUpRight size={12} strokeWidth={1.4} />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-charcoal/25 px-5 py-5 text-[9px] uppercase tracking-[0.18em] text-charcoal/50 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <span>Working explorations, not client case studies.</span>
            <a href={`#project-${liveProjects[0]?.id}`} className="w-fit border-b border-charcoal/40 pb-1 text-charcoal transition-colors hover:border-gold hover:text-gold">
              Begin with project 01
            </a>
          </div>
        </div>
      </header>

      <main>
        <div>
          {liveProjects.map((project, idx) => {
            const isFeatured = idx === 0;
            const isClive = project.id === 'clive';
            const isLamina = project.id === 'diy-pendant-light';
            const nextProject = liveProjects[idx + 1];
            const variant = isClive ? 'clive' : isLamina ? 'triptych' : isFeatured ? 'prototype' : idx % 2 === 0 ? 'wide' : 'photo';
            const isDark = isClive;
            const sectionTone = isDark
              ? 'bg-[#101212] text-parchment'
              : idx % 2 === 0
                ? 'bg-[#e9e2d2] text-charcoal'
                : 'bg-[#d8cfbd] text-charcoal';

            return (
              <section key={project.id} id={`project-${project.id}`} className={`relative overflow-hidden border-t ${isDark ? 'border-white/15' : 'border-charcoal/20'} ${sectionTone}`}>
                <div className="pointer-events-none absolute -right-5 top-12 select-none font-serif text-[11rem] leading-none tracking-[-0.08em] opacity-[0.035] sm:text-[18rem] lg:right-8 lg:text-[24rem]">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                <div className="relative mx-auto max-w-[1500px] px-5 py-16 md:px-12 md:py-24 lg:px-20 lg:py-28">
                  <div className={`mb-12 flex items-end justify-between gap-6 border-b pb-5 ${isDark ? 'border-white/15' : 'border-charcoal/20'}`}>
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-4xl leading-none text-gold">{String(idx + 1).padStart(2, '0')}</span>
                      <span className={`text-[9px] uppercase tracking-[0.24em] ${isDark ? 'text-parchment/45' : 'text-charcoal/45'}`}>/ {String(liveProjects.length).padStart(2, '0')}</span>
                    </div>
                    <span className={`max-w-[18rem] text-right text-[9px] uppercase tracking-[0.22em] ${isDark ? 'text-parchment/45' : 'text-charcoal/45'}`}>{project.title}</span>
                  </div>

                  {isFeatured ? (
                    <article className="relative grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
                      <div className="relative">
                        <ProjectVisual images={project.images} title={project.title} descriptor={project.descriptor} visual={project.visual} variant={variant} imageFit={project.imageFit} imageBackground={project.imageBackground} />
                      </div>
                      <div className="flex flex-col justify-center bg-charcoal px-7 py-10 text-parchment sm:px-12 lg:-ml-20 lg:my-12 lg:py-14">
                        <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-gold">{project.descriptor}</p>
                        <h2 className="max-w-xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] sm:text-6xl">{project.title}</h2>
                        <p className="mt-7 max-w-xl text-lg leading-relaxed text-parchment/72">{project.whatItDoes}</p>
                        <ProjectLink project={project} dark />
                      </div>
                      <div className="lg:col-span-2">
                        <ProjectNotes project={project} />
                      </div>
                    </article>
                  ) : (
                    <article>
                      <div className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 ${idx % 2 !== 0 && !isClive ? 'lg:grid-cols-[1.08fr_0.92fr]' : ''}`}>
                        <div className={idx % 2 !== 0 && !isClive ? 'lg:order-2' : ''}>
                          <ProjectVisual images={project.images} title={project.title} descriptor={project.descriptor} visual={project.visual} variant={variant} imageFit={project.imageFit} imageBackground={project.imageBackground} />
                        </div>
                        <div className={idx % 2 !== 0 && !isClive ? 'lg:order-1' : ''}>
                          <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-gold">{project.descriptor}</p>
                          <h2 className="max-w-2xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] sm:text-7xl">{project.title}</h2>
                          <p className={`mt-7 max-w-xl text-lg leading-relaxed ${isDark ? 'text-parchment/72' : 'text-charcoal/72'}`}>{project.whatItDoes}</p>
                          <ProjectLink project={project} dark={isDark} />
                        </div>
                      </div>
                      <ProjectNotes project={project} dark={isDark} />
                    </article>
                  )}

                  <div className={`mt-14 flex min-h-11 items-center justify-between gap-5 border-t pt-2 text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.24em] ${isDark ? 'border-white/15 text-parchment/35' : 'border-charcoal/15 text-charcoal/35'}`}>
                    <span>{String(idx + 1).padStart(2, '0')} / {String(liveProjects.length).padStart(2, '0')}</span>
                    {nextProject ? <a href={`#project-${nextProject.id}`} className="flex min-h-11 items-center text-right transition-colors hover:text-gold">Next: {nextProject.title}</a> : null}
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {archivedProjects.length > 0 && (
          <section className="mx-auto max-w-[1500px] px-5 pb-28 pt-24 md:px-12 lg:px-20">
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2 className="font-serif text-5xl tracking-[-0.04em]">In progress</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {archivedProjects.map((project) => (
                <article key={project.id} className="group flex items-center justify-between gap-5 border-b border-charcoal/15 py-5 transition-colors hover:border-gold">
                  <div>
                    <h3 className="font-serif text-2xl">{project.title}</h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-charcoal/45">{project.descriptor}</p>
                  </div>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-charcoal/40 transition-colors group-hover:text-gold">Coming soon</span>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
