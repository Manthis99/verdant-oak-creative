import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bath,
  BedDouble,
  Building2,
  CarFront,
  ChefHat,
  DoorOpen,
  FileText,
  KeyRound,
  MapPin,
  Maximize2,
  Trees,
  Wrench,
  X,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  allPropertyPhotos,
  exteriorPhotos,
  property,
  technicalDetails,
  technicalPhotos,
  unitOneFloorPlan,
  unitOnePhotos,
  unitTwoAmenities,
  unitTwoFloorPlan,
  unitTwoPhotos,
} from '../data/springProperty';

gsap.registerPlugin(ScrollTrigger);

const amenityIcons = [ChefHat, BedDouble, Bath, DoorOpen, Trees, CarFront];

function usePropertyMetadata() {
  useEffect(() => {
    const previousTitle = document.title;
    const entries = [
      ['name', 'description', 'Photos, floor plans, and the inspection for my new two-flat in Elgin. I live in Unit 1; Unit 2 is currently occupied and may be available later.'],
      ['property', 'og:type', 'website'],
      ['property', 'og:title', 'My New Home on Spring Street'],
      ['property', 'og:description', 'The whole two-flat in Elgin: outside, both units, floor plans, basement, and mechanicals.'],
      ['property', 'og:url', 'https://creative.michaelproctor.co/419-n-spring-st'],
      ['property', 'og:image', 'https://creative.michaelproctor.co/images/spring-property/spring-property-social.jpg'],
      ['property', 'og:image:alt', 'The Spring Street House beneath mature trees in Elgin, Illinois'],
      ['name', 'twitter:title', 'My New Home on Spring Street'],
      ['name', 'twitter:description', 'The whole two-flat in Elgin: outside, both units, floor plans, basement, and mechanicals.'],
      ['name', 'twitter:image', 'https://creative.michaelproctor.co/images/spring-property/spring-property-social.jpg'],
    ];

    const previousEntries = entries.map(([attribute, key, value]) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      const created = !element;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      const previousValue = element.getAttribute('content');
      element.setAttribute('content', value);
      return { element, created, previousValue };
    });

    document.title = 'My New Home on Spring Street | Michael Proctor';

    return () => {
      document.title = previousTitle;
      previousEntries.forEach(({ element, created, previousValue }) => {
        if (created) element.remove();
        else if (previousValue !== null) element.setAttribute('content', previousValue);
      });
    };
  }, []);
}

function MagneticLink({ href, children, light = false, className = '', external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`spring-magnetic group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full border px-6 py-3 text-[0.64rem] font-semibold uppercase tracking-[0.2em] transition-transform duration-500 ${light ? 'border-[#f4f0e7]/50 text-[#f4f0e7]' : 'border-[#1b281d]/35 text-[#1b281d]'} ${className}`}
    >
      <span className={`spring-magnetic-fill absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0 ${light ? 'bg-[#f4f0e7]' : 'bg-[#1b281d]'}`} />
      <span className={`relative z-10 flex items-center gap-3 transition-colors duration-500 ${light ? 'group-hover:text-[#1b281d]' : 'group-hover:text-[#f4f0e7]'}`}>
        {children}
      </span>
    </a>
  );
}

function PropertyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <nav
      aria-label="Property page navigation"
      className={`fixed left-1/2 top-[max(0.8rem,env(safe-area-inset-top))] z-[80] flex w-[calc(100%-1.5rem)] max-w-[58rem] -translate-x-1/2 items-center justify-between rounded-full border px-3 py-2 transition-all duration-700 sm:w-[calc(100%-3rem)] sm:px-4 ${scrolled ? 'border-[#1b281d]/10 bg-[#f4f0e7]/85 text-[#1b281d] shadow-[0_18px_45px_rgba(21,28,22,0.12)] backdrop-blur-xl' : 'border-white/25 bg-black/10 text-white backdrop-blur-md'}`}
    >
      <a href="#top" className="flex min-h-10 items-center gap-3 rounded-full px-2 transition-transform hover:-translate-y-px sm:px-3">
        <span className={`h-2 w-2 rounded-full ${scrolled ? 'bg-[#b35436]' : 'bg-[#e4b169]'}`} />
        <span className="font-serif text-sm tracking-[-0.02em] sm:text-base">Spring Street</span>
      </a>
      <div className="hidden items-center gap-5 md:flex">
        <a href="#property" className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] transition-transform hover:-translate-y-px">The property</a>
        <a href="#unit-one" className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] transition-transform hover:-translate-y-px">Unit 1</a>
        <a href="#unit-two" className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] transition-transform hover:-translate-y-px">Unit 2</a>
        <a href="#technical" className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] transition-transform hover:-translate-y-px">Technical</a>
        <a href="#location" className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] transition-transform hover:-translate-y-px">Location</a>
      </div>
      <a
        href={`mailto:${property.email}?subject=Your%20Spring%20Street%20house`}
        className={`relative flex min-h-10 items-center gap-2 overflow-hidden rounded-full px-4 text-[0.58rem] font-semibold uppercase tracking-[0.18em] transition-transform duration-500 hover:scale-[1.03] ${scrolled ? 'bg-[#1b281d] text-[#f4f0e7]' : 'bg-[#f4f0e7] text-[#1b281d]'}`}
      >
        Email me <ArrowUpRight size={13} strokeWidth={1.7} />
      </a>
    </nav>
  );
}

function ResponsivePhoto({ photo, className = '', eager = false, sizes = '(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw', style }) {
  return (
    <img
      src={photo.src}
      srcSet={`${photo.thumb} 840w, ${photo.src} 1600w`}
      sizes={sizes}
      alt={photo.alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
      className={className}
      style={style}
    />
  );
}

function GalleryGrid({ photos, onOpen, tone = 'light' }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-12" data-gallery>
      {photos.map((photo, index) => {
        const isLead = index === 0;
        const isSecond = index === 1;
        const columnClass = isLead
          ? 'col-span-2 lg:col-span-7'
          : isSecond
            ? 'col-span-2 lg:col-span-5'
            : photo.orientation === 'portrait'
              ? 'col-span-1 lg:col-span-4'
              : 'col-span-2 sm:col-span-1 lg:col-span-4';
        const aspectClass = isLead || isSecond
          ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[34rem]'
          : photo.orientation === 'portrait'
            ? 'aspect-[3/4]'
            : 'aspect-[4/3]';

        return (
          <button
            key={photo.id}
            type="button"
            onClick={() => onOpen(photo.id)}
            className={`spring-photo-card group relative overflow-hidden rounded-[1.6rem] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${columnClass} ${aspectClass} ${tone === 'dark' ? 'focus-visible:outline-[#e4b169]' : 'focus-visible:outline-[#1b281d]'}`}
            aria-label={`Open ${photo.alt}`}
            data-reveal
          >
            <ResponsivePhoto photo={photo} className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.035]" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#f4f0e7]/90 text-[#1b281d] opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </span>
          </button>
        );
      })}
    </div>
  );
}

function Lightbox({ index, onClose, onChange }) {
  const photo = allPropertyPhotos[index];

  const previous = useCallback(() => {
    onChange((index - 1 + allPropertyPhotos.length) % allPropertyPhotos.length);
  }, [index, onChange]);

  const next = useCallback(() => {
    onChange((index + 1) % allPropertyPhotos.length);
  }, [index, onChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') previous();
      if (event.key === 'ArrowRight') next();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [next, onClose, previous]);

  return (
    <div className="fixed inset-0 z-[140] flex items-center justify-center bg-[#111712]/95 p-3 backdrop-blur-lg sm:p-8" role="dialog" aria-modal="true" aria-label="Property photo viewer">
      <button type="button" onClick={onClose} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-transform hover:scale-105 sm:right-7 sm:top-7" aria-label="Close photo viewer">
        <X size={20} strokeWidth={1.5} />
      </button>
      <button type="button" onClick={previous} className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition-transform hover:scale-105 sm:left-7" aria-label="Previous photo">
        <ArrowLeft size={20} strokeWidth={1.5} />
      </button>
      <ResponsivePhoto
        photo={photo}
        eager
        sizes="92vw"
        className="h-auto rounded-[1.25rem] object-contain drop-shadow-2xl sm:rounded-[1.5rem]"
        style={{
          width: photo.orientation === 'portrait'
            ? 'min(calc(100vw - clamp(1.5rem, 8vw, 7rem)), 60svh)'
            : 'min(calc(100vw - clamp(1.5rem, 8vw, 7rem)), 135svh)',
        }}
      />
      <button type="button" onClick={next} className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition-transform hover:scale-105 sm:right-7" aria-label="Next photo">
        <ArrowRight size={20} strokeWidth={1.5} />
      </button>
      <div className="absolute inset-x-0 bottom-5 text-center text-white sm:bottom-7">
        <p className="font-serif text-lg">{photo.label}</p>
        <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-white/55">{index + 1} / {allPropertyPhotos.length}</p>
      </div>
    </div>
  );
}

function ChapterHeading({ number, eyebrow, title, copy, light = false }) {
  return (
    <div className="grid gap-8 border-t border-current/20 pt-7 lg:grid-cols-[0.35fr_1fr] lg:gap-14" data-reveal>
      <div className="flex items-start gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] opacity-55">
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2 className="max-w-[11ch] font-serif text-[3.1rem] leading-[0.94] tracking-[-0.055em] sm:text-[4.7rem] lg:text-[6.2rem]">{title}</h2>
        <p className={`mt-7 max-w-2xl text-base font-light leading-relaxed sm:text-lg ${light ? 'text-[#f4f0e7]/68' : 'text-[#1b281d]/68'}`}>{copy}</p>
      </div>
    </div>
  );
}

function FloorPlanPanel({ floorPlan, unit, area, description, onOpen, tone = 'green' }) {
  const green = tone === 'green';

  return (
    <div className={`mt-20 grid overflow-hidden rounded-[2.8rem] border shadow-[0_24px_70px_rgba(27,40,29,0.08)] sm:mt-28 lg:grid-cols-[1.08fr_0.92fr] ${green ? 'border-[#1b281d]/12 bg-[#edf1e4]/65' : 'border-[#1b281d]/10 bg-[#e9e1d4]/65'}`} data-reveal>
      <button
        type="button"
        onClick={() => onOpen(floorPlan.id)}
        className="group relative flex min-h-[30rem] items-center justify-center overflow-hidden bg-[#fbfaf6] p-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-[#9a4e35] sm:p-10 lg:min-h-[44rem]"
        aria-label={`Open ${unit} floor plan larger`}
      >
        <ResponsivePhoto photo={floorPlan} className="max-h-[42rem] w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]" />
        <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#1b281d] text-[#f4f0e7] shadow-lg transition-transform duration-500 group-hover:scale-105 sm:bottom-7 sm:right-7">
          <Maximize2 size={17} strokeWidth={1.5} />
        </span>
      </button>
      <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#9a4e35]">Floor plan</p>
          <h3 className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">{unit}, room by room.</h3>
          <p className="mt-7 max-w-md text-base font-light leading-relaxed text-[#1b281d]/66">{description}</p>
        </div>
        <div className="mt-14 border-t border-[#1b281d]/15 pt-7">
          <p className="font-serif text-5xl tracking-[-0.05em]">{area} <span className="font-sans text-base font-medium tracking-normal">sq. ft.</span></p>
          <p className="mt-2 text-xs font-light leading-relaxed text-[#1b281d]/52">Approximate total area shown on the supplied CubiCasa plan. Measurements should be independently verified.</p>
          <button type="button" onClick={() => onOpen(floorPlan.id)} className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-full border border-[#1b281d]/25 px-5 text-[0.6rem] font-semibold uppercase tracking-[0.19em] transition-colors hover:bg-[#1b281d] hover:text-[#f4f0e7]">
            Open larger <Maximize2 size={14} strokeWidth={1.6} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SpringPropertyPage() {
  const pageRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  usePropertyMetadata();

  const openPhoto = useCallback((id) => {
    const index = allPropertyPhotos.findIndex((photo) => photo.id === id);
    if (index >= 0) setLightboxIndex(index);
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('[data-hero-reveal]', {
          y: 40,
          opacity: 0,
          duration: 1.15,
          stagger: 0.08,
          ease: 'power3.out',
        });

        gsap.to('[data-hero-image]', {
          yPercent: 8,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: '[data-hero]',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });

        gsap.utils.toArray('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            y: 34,
            opacity: 0,
            duration: 0.95,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          });
        });
      });

      return () => media.revert();
    }, pageRef);

    return () => context.revert();
  }, []);

  const inquiryHref = `mailto:${property.email}?subject=Maybe%20interested%20in%20Unit%202%20later&body=Hey%20Michael%2C%0A%0AI%20saw%20the%20Spring%20Street%20house.%20If%20Unit%202%20opens%20up%20later%2C%20I%20might%20be%20interested.%20Keep%20me%20in%20mind.%0A`;

  return (
    <div ref={pageRef} id="top" className="spring-listing overflow-hidden bg-[#f4f0e7] text-[#1b281d]">
      <PropertyNav />

      <header className="relative flex min-h-[100dvh] items-end overflow-hidden bg-[#172018] text-[#f4f0e7]" data-hero>
        <img src="/images/spring-property/hero-2400.webp" alt="419–421 N Spring Street beneath mature trees" fetchPriority="high" className="absolute inset-0 h-[112%] w-full object-cover object-[56%_52%]" data-hero-image />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,18,13,0.12)_0%,rgba(12,18,13,0.2)_42%,rgba(12,18,13,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(232,183,113,0.2),transparent_33%)]" />

        <div className="relative z-10 w-full px-5 pb-8 pt-32 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
          <div className="mx-auto max-w-[96rem]">
            <div className="mb-7 flex items-center gap-4" data-hero-reveal>
              <span className="h-px w-12 bg-[#e4b169]" />
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#f4f0e7]/72">419–421 N Spring St · Elgin, Illinois</p>
            </div>
            <h1 className="max-w-[11ch] text-[clamp(4rem,10vw,10.5rem)] leading-[0.77] tracking-[-0.075em]" data-hero-reveal>
              <span className="block font-sans text-[0.42em] font-medium not-italic tracking-[-0.045em]">My new</span>
              <span className="block font-serif italic">home.</span>
            </h1>
            <div className="mt-8 flex flex-col gap-7 border-t border-white/25 pt-7 lg:flex-row lg:items-end lg:justify-between" data-hero-reveal>
              <p className="max-w-2xl text-base font-light leading-relaxed text-[#f4f0e7]/76 sm:text-lg">I bought this two-flat in Elgin. I’m living downstairs in Unit 1. Unit 2 is upstairs and currently occupied. This page is mostly here so I can send friends one link when they ask to see the place.</p>
              <div className="flex flex-wrap gap-3">
                <MagneticLink href="#property" light>See the photos <ArrowDown size={15} strokeWidth={1.6} /></MagneticLink>
                <MagneticLink href="#unit-one" light>Jump to my unit <KeyRound size={15} strokeWidth={1.6} /></MagneticLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-44">
          <div className="mx-auto grid max-w-[96rem] gap-14 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
            <div data-reveal>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#9a4e35]">Why this page exists</p>
              <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-[#1b281d]/58">People keep asking to see the house, and sending this many photos one at a time is annoying. So here they all are.</p>
            </div>
            <div data-reveal>
              <h2 className="max-w-[13ch] font-serif text-[3.3rem] leading-[0.98] tracking-[-0.055em] sm:text-[5.4rem] lg:text-[7rem]">I bought a two-flat in Elgin.</h2>
              <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-[#1b281d]/68 sm:text-lg">The photos are in a pretty simple order: outside first, then Unit 1—my place—then Unit 2 upstairs, followed by the basement and mechanical stuff.</p>
              <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[2.5rem] bg-[#1b281d]/12 sm:grid-cols-4">
                {[
                  ['1900', 'Year built'],
                  ['2', 'Units'],
                  ['Unit 1', 'Where I live'],
                  ['Unit 2', 'Currently occupied'],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[#ebe6db] px-5 py-8 sm:px-7 sm:py-10">
                    <p className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl">{value}</p>
                    <p className="mt-3 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#1b281d]/48">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="property" className="scroll-mt-24 rounded-t-[3rem] bg-[#1b281d] px-5 py-24 text-[#f4f0e7] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[96rem]">
            <ChapterHeading number="01" eyebrow="First, the outside" title="The house, yard, and garage." copy="It’s a two-flat on the corner of North Spring and Seneca. Here’s the front, the fenced yard, the driveway, and the detached garage." light />
            <div className="mt-16 sm:mt-24">
              <GalleryGrid photos={exteriorPhotos} onOpen={openPhoto} tone="dark" />
            </div>
          </div>
        </section>

        <section id="unit-one" className="scroll-mt-20 bg-[#dce5c8] px-5 py-24 text-[#1b281d] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[96rem]">
            <ChapterHeading number="02" eyebrow="My place" title="Unit 1. This one is mine." copy="This is the downstairs unit. It has two bedrooms, one bathroom, a living room, dining room, and the larger kitchen. I’ll be living here." />
            <div className="mt-16 grid gap-3 sm:mt-24 sm:grid-cols-3" data-reveal>
              {[
                [BedDouble, '2 bedrooms'],
                [Bath, '1 full bath'],
                [Building2, 'Lower residence'],
              ].map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-4 rounded-[2rem] border border-[#1b281d]/15 bg-[#edf1e4]/55 p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1b281d] text-[#dce5c8]"><Icon size={18} strokeWidth={1.45} /></span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 sm:mt-14">
              <GalleryGrid photos={unitOnePhotos} onOpen={openPhoto} />
            </div>
            <FloorPlanPanel
              floorPlan={unitOneFloorPlan}
              unit="Unit 1"
              area="1,078"
              description="This is the supplied plan for the downstairs unit, including the living room, family room, dining area, kitchen, two bedrooms, bath, and closets."
              onOpen={openPhoto}
            />
          </div>
        </section>

        <section id="unit-two" className="scroll-mt-20 bg-[#f4f0e7] px-5 py-24 text-[#1b281d] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[96rem]">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <ChapterHeading number="03" eyebrow="The upstairs unit" title="Unit 2. Currently occupied." copy="This is the upstairs unit. It has two bedrooms, one bathroom, a galley kitchen, and a living room. It’s in rough shape in places, and these photos show it as it is now. If the current tenants leave, I may clean it up and rent it to someone I know." />
              <aside className="relative overflow-hidden rounded-[3rem] bg-[#a9492f] p-7 text-[#fff8eb] shadow-[0_30px_80px_rgba(91,42,27,0.2)] sm:p-10 lg:self-start" data-reveal>
                <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/20" />
                <div className="absolute -right-10 -top-16 h-44 w-44 rounded-full border border-white/15" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/72">Possible future rental</p>
                    <span className="flex items-center gap-2 rounded-full bg-white/14 px-3 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.18em]"><span className="h-2 w-2 rounded-full bg-[#e4b169]" /> Occupied now</span>
                  </div>
                  <p className="mt-16 font-serif text-[4.8rem] leading-none tracking-[-0.07em] sm:text-[6rem]">{property.rent}</p>
                  <p className="mt-2 text-sm text-white/65">expected {property.rentPeriod} if it opens up</p>
                  <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[1.7rem] bg-white/20">
                    <div className="bg-[#9d422b] p-5"><p className="font-serif text-3xl">2</p><p className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.19em] text-white/60">Bedrooms</p></div>
                    <div className="bg-[#9d422b] p-5"><p className="font-serif text-3xl">1</p><p className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.19em] text-white/60">Full bath</p></div>
                  </div>
                  <MagneticLink href={inquiryHref} light className="mt-8 w-full border-white/45">Tell me you might want it later <ArrowUpRight size={15} strokeWidth={1.6} /></MagneticLink>
                  <p className="mt-5 text-center text-xs font-light leading-relaxed text-white/55">It is not available now, and I don’t have a timeline. I’m just keeping track of friends who might be interested.</p>
                </div>
              </aside>
            </div>

            <div className="mt-20 sm:mt-28">
              <div className="mb-9 flex items-end justify-between gap-6" data-reveal>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#9a4e35]">Inside Unit 2</p>
                  <h3 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">The upstairs unit as it is now.</h3>
                </div>
                <p className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#1b281d]/42 sm:block">20 photographs</p>
              </div>
              <GalleryGrid photos={unitTwoPhotos} onOpen={openPhoto} />
            </div>

            <FloorPlanPanel
              floorPlan={unitTwoFloorPlan}
              unit="Unit 2"
              area="752"
              description="This is the supplied plan for the upstairs unit. It shows the living room, kitchen, bath, one labeled bedroom, and a second room."
              onOpen={openPhoto}
              tone="sand"
            />

            <div className="mt-24 sm:mt-32">
              <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
                <div data-reveal>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#9a4e35]">What’s there</p>
                  <h3 className="mt-4 max-w-[8ch] font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">The basic facts.</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {unitTwoAmenities.map((amenity, index) => {
                    const Icon = amenityIcons[index];
                    return (
                      <article key={amenity.title} className="rounded-[2.2rem] border border-[#1b281d]/12 bg-[#ebe6db]/55 p-6" data-reveal>
                        <Icon size={21} strokeWidth={1.4} className="text-[#9a4e35]" />
                        <h4 className="mt-12 font-serif text-2xl tracking-[-0.03em]">{amenity.title}</h4>
                        <p className="mt-3 text-sm font-light leading-relaxed text-[#1b281d]/60">{amenity.detail}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="technical" className="scroll-mt-20 bg-[#252d27] px-5 py-24 text-[#f4f0e7] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[96rem]">
            <ChapterHeading number="04" eyebrow="Below the house" title="Basement & mechanicals." copy="This is the unfinished basement. It isn’t the pretty part of the tour, but it’s where the furnaces, water heaters, utility sink, plumbing, and most of the other mechanical stuff live. These photos show what’s there now." light />

            <div className="mt-16 grid gap-4 sm:mt-24 lg:grid-cols-[0.82fr_1.18fr]">
              <aside className="relative overflow-hidden rounded-[2.8rem] bg-[#c15c3c] p-7 text-[#fff8eb] sm:p-10 lg:min-h-[34rem]" data-reveal>
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/18" />
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/14" />
                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/14"><FileText size={20} strokeWidth={1.45} /></span>
                    <p className="mt-10 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/68">Independent home inspection</p>
                    <h3 className="mt-4 max-w-[9ch] font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl">The actual report is here.</h3>
                    <p className="mt-7 max-w-lg text-base font-light leading-relaxed text-white/70">I’m linking the full inspection instead of trying to interpret it on this page. That’s the place to look for findings, notes, and recommendations.</p>
                  </div>
                  <div className="mt-12">
                    <MagneticLink href={property.inspectionUrl} light external className="border-white/45">Open the full inspection <ArrowUpRight size={15} strokeWidth={1.6} /></MagneticLink>
                    <p className="mt-4 text-xs font-light text-white/48">Opens the supplied Spectora report in a new tab.</p>
                  </div>
                </div>
              </aside>

              <div className="grid gap-3 sm:grid-cols-2">
                {technicalDetails.map((item, index) => (
                  <article key={item.title} className="flex min-h-[15rem] flex-col justify-between rounded-[2.2rem] border border-white/12 bg-white/[0.045] p-6" data-reveal>
                    <div className="flex items-center justify-between text-[#e4b169]">
                      {index === 5 ? <FileText size={19} strokeWidth={1.4} /> : <Wrench size={19} strokeWidth={1.4} />}
                      <span className="text-[0.56rem] font-semibold tracking-[0.2em] text-white/32">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl tracking-[-0.03em]">{item.title}</h4>
                      <p className="mt-3 text-sm font-light leading-relaxed text-white/56">{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20 sm:mt-28">
              <div className="mb-9 flex items-end justify-between gap-6" data-reveal>
                <div>
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#e4b169]">Downstairs and outside</p>
                  <h3 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">The basement and equipment.</h3>
                </div>
                <p className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/38 sm:block">12 photographs</p>
              </div>
              <GalleryGrid photos={technicalPhotos} onOpen={openPhoto} tone="dark" />
            </div>
          </div>
        </section>

        <section id="location" className="scroll-mt-20 bg-[#e8e0d2] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="mx-auto max-w-[96rem]">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
              <div data-reveal>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#9a4e35]">Where it lives</p>
                <h2 className="mt-5 max-w-[9ch] font-serif text-[3.6rem] leading-[0.94] tracking-[-0.055em] sm:text-[5.5rem]">419–421 N Spring St, Elgin.</h2>
              </div>
              <div data-reveal>
                <p className="max-w-2xl text-lg font-light leading-relaxed text-[#1b281d]/68">It’s on the corner of North Spring and Seneca in the Spring–Douglas Historic District, a few minutes from downtown Elgin and the Metra station.</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticLink href={property.mapUrl} external>Open in Maps <ArrowUpRight size={15} strokeWidth={1.6} /></MagneticLink>
                  <span className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#1b281d]/18 px-6 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-[#1b281d]/60"><MapPin size={15} strokeWidth={1.6} /> {property.address}</span>
                </div>
              </div>
            </div>
            <div className="mt-14 overflow-hidden rounded-[3rem] border border-[#1b281d]/10 bg-[#d9d2c6] shadow-[0_26px_80px_rgba(32,39,32,0.12)]" data-reveal>
              <iframe src={property.mapEmbedUrl} title="Map showing 419–421 N Spring Street in Elgin, Illinois" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[34rem] w-full grayscale-[0.15]" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-t-[4rem] bg-[#172018] px-5 py-24 text-[#f4f0e7] sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4b169]/15" />
          <div className="absolute left-1/2 top-0 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e4b169]/15" />
          <div className="relative mx-auto max-w-5xl text-center" data-reveal>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-[#e4b169]">That’s the house</p>
            <h2 className="mx-auto mt-7 max-w-[12ch] font-serif text-[3.5rem] leading-[0.92] tracking-[-0.06em] sm:text-[5.6rem] lg:text-[7rem]">That’s the whole place.</h2>
            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-[#f4f0e7]/64 sm:text-lg">If you’re a friend who might want Unit 2 later, email me. It isn’t available now, and I don’t know when it will be. I’ll keep your name in mind if that changes.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticLink href={inquiryHref} light>Tell me you might be interested <ArrowUpRight size={15} strokeWidth={1.6} /></MagneticLink>
              <MagneticLink href={property.mapUrl} light external>View the location <MapPin size={15} strokeWidth={1.6} /></MagneticLink>
            </div>
            <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/15 pt-7 text-[0.58rem] font-medium uppercase tracking-[0.2em] text-white/40 sm:flex-row">
              <span>419–421 N Spring St · Elgin, Illinois</span>
              <span>Equal Housing Opportunity · Details subject to verification</span>
            </div>
          </div>
        </section>
      </main>

      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />
      )}
    </div>
  );
}
