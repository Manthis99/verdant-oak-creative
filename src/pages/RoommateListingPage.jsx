import { useEffect, useState, useCallback } from 'react';
import {
  MapPin, Calendar, Home, Zap, Car, Mail, Phone,
  ChevronLeft, ChevronRight, X, Wifi, Utensils, Sofa,
  Sparkles, Shirt, Cigarette, Dog, Moon, Users,
  Trees, ArrowRight
} from 'lucide-react';

const photos = Array.from({ length: 17 }, (_, i) => `/images/roommate/morton-${i + 1}.jpg`);

const highlights = [
  { icon: Zap,       label: 'All utilities included' },
  { icon: Sofa,      label: 'Large shared living space' },
  { icon: Car,       label: 'Garage bay available' },
  { icon: Wifi,      label: '300 Mbps Wi-Fi included' },
  { icon: Trees,     label: 'Quiet street near downtown' }
];

const factsAndFeatures = [
  {
    heading: 'The basics',
    rows: [
      ['Room type',   'Private, unfurnished'],
      ['Rent',        '$950 / month'],
      ['Move-in',     'August 2026 (tentative)'],
      ['Lease',       'Flexible']
    ]
  },
  {
    heading: 'Utilities & internet',
    rows: [
      ['Electric',    'Included'],
      ['Gas',         'Included'],
      ['Water',       'Included'],
      ['Trash',       'Included'],
      ['Wi-Fi',       'Included, 300 Mbps']
    ]
  },
  {
    heading: 'Shared spaces',
    rows: [
      ['Living room', 'Large, shared'],
      ['Kitchen',     'Full, shared cookware'],
      ['Laundry',     'In-unit, shared'],
      ['Outdoor',     'Yard access']
    ]
  },
  {
    heading: 'Parking & storage',
    rows: [
      ['Off-street parking', 'Included'],
      ['Garage bay',         'Available for an add-on fee']
    ]
  }
];

const houseNotes = [
  { icon: Cigarette, label: 'Non-smoking indoors.' },
  { icon: Dog,       label: 'Pet-friendly on a case-by-case basis — ask.' },
  { icon: Users,     label: 'Guests welcome. Overnight guests as a courtesy heads-up.' },
  { icon: Moon,      label: 'Quiet hours after 10pm on weekdays.' },
  { icon: Sparkles,  label: 'Shared spaces stay tidy — we split light chores by rhythm.' }
];

function Lightbox({ index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[200] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-parchment flex items-center justify-center transition-colors"
        aria-label="Close"
      >
        <X size={22} strokeWidth={1.5} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-parchment flex items-center justify-center transition-colors"
        aria-label="Previous photo"
      >
        <ChevronLeft size={26} strokeWidth={1.5} />
      </button>

      <img
        src={photos[index]}
        alt={`1102 Morton Ave, photo ${index + 1} of ${photos.length}`}
        decoding="async"
        className="max-h-[85vh] max-w-[92vw] object-contain rounded-lg shadow-2xl"
      />

      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-parchment flex items-center justify-center transition-colors"
        aria-label="Next photo"
      >
        <ChevronRight size={26} strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-parchment/60 text-xs uppercase tracking-[0.2em]">
        {index + 1} / {photos.length}
      </div>
    </div>
  );
}

function PhotoGridHero({ onOpen }) {
  return (
    <section className="mb-14">
      {/* Mobile: single hero image with a "see all" button */}
      <div className="md:hidden">
        <button
          onClick={() => onOpen(0)}
          className="relative w-full block rounded-2xl overflow-hidden aspect-[4/3] bg-charcoal/5"
        >
          <img
            src={photos[0]}
            alt="1102 Morton Ave, Elgin, IL"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-parchment/90 backdrop-blur-sm text-charcoal text-[11px] font-medium uppercase tracking-widest shadow-lg">
            See all {photos.length} photos
          </div>
        </button>
      </div>

      {/* Desktop: 1 big + 2x2 grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[520px]">
        <button
          onClick={() => onOpen(0)}
          className="relative col-span-2 row-span-2 rounded-2xl overflow-hidden bg-charcoal/5 group"
        >
          <img src={photos[0]} alt="Front of the home" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        </button>
        {[1, 2, 3, 4].map((i) => (
          <button
            key={i}
            onClick={() => onOpen(i)}
            className="relative rounded-2xl overflow-hidden bg-charcoal/5 group"
          >
            <img src={photos[i]} alt={`Photo ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            {i === 4 && (
              <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-parchment text-xs uppercase tracking-widest">View all {photos.length}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="hidden md:flex justify-end mt-3">
        <button
          onClick={() => onOpen(0)}
          className="text-xs uppercase tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors inline-flex items-center gap-2"
        >
          See all {photos.length} photos <ArrowRight size={14} strokeWidth={1.75} />
        </button>
      </div>
    </section>
  );
}

function PriceHeader() {
  return (
    <div className="pb-8 border-b border-charcoal/10 mb-10">
      <p className="text-[11px] uppercase tracking-[0.28em] text-clay font-medium mb-3">Room for rent · Elgin, IL</p>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2 mb-4">
        <h1 className="font-serif text-6xl md:text-7xl text-charcoal leading-none">
          $950
        </h1>
        <span className="text-charcoal/50 text-lg font-light">/ month</span>
      </div>
      <p className="font-serif text-2xl md:text-3xl text-charcoal/80 mb-6">
        1102 Morton Ave, Elgin, Illinois
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-charcoal/70">
        <span className="flex items-center gap-2"><Home size={15} strokeWidth={1.6} /> Private unfurnished room</span>
        <span className="text-charcoal/20">·</span>
        <span className="flex items-center gap-2"><Sofa size={15} strokeWidth={1.6} /> Large shared living space</span>
        <span className="text-charcoal/20">·</span>
        <span className="flex items-center gap-2"><Zap size={15} strokeWidth={1.6} /> Utilities included</span>
        <span className="text-charcoal/20">·</span>
        <span className="flex items-center gap-2"><Calendar size={15} strokeWidth={1.6} /> August move-in</span>
      </div>
    </div>
  );
}

function WhatsSpecial() {
  return (
    <section className="mb-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-medium mb-4">What&rsquo;s special</p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {highlights.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="p-4 rounded-xl border border-charcoal/10 bg-parchment hover:bg-white/60 transition-colors"
          >
            <Icon size={20} strokeWidth={1.5} className="text-moss mb-3" />
            <p className="text-sm text-charcoal font-medium leading-snug">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mb-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-medium mb-4">About this place</p>
      <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
        A calm home on a quiet street, with room for a good housemate.
      </h2>
      <div className="space-y-4 text-charcoal/75 text-base leading-relaxed font-light max-w-2xl">
        <p>
          The home itself is what sells this — a well-kept house in Elgin with a large shared
          living space, full kitchen, in-unit laundry, and off-street parking. The private
          bedroom is unfurnished, so you can set it up the way you actually live.
        </p>
        <p>
          All utilities and 300 Mbps Wi-Fi are included in rent, so the $950 you see is the
          number you pay. A garage bay is available if you&rsquo;d like it — a car, a workshop,
          storage; pricing is flexible depending on how you&rsquo;d use it.
        </p>
        <p>
          Move-in is tentatively in August. Lease length is flexible — I&rsquo;d rather find the
          right fit than lock in the wrong one.
        </p>
      </div>
    </section>
  );
}

function FactsAndFeatures() {
  return (
    <section className="mb-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-medium mb-4">Facts & features</p>
      <div className="grid md:grid-cols-2 gap-8">
        {factsAndFeatures.map((group) => (
          <div key={group.heading}>
            <h3 className="font-serif text-xl text-charcoal mb-4">{group.heading}</h3>
            <dl className="space-y-2">
              {group.rows.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 py-2 border-b border-charcoal/5 last:border-b-0">
                  <dt className="text-sm text-charcoal/55 font-light">{k}</dt>
                  <dd className="text-sm text-charcoal font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

function HouseNotes() {
  return (
    <section className="mb-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-medium mb-4">A few house notes</p>
      <ul className="space-y-4">
        {houseNotes.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-start gap-4">
            <div className="mt-0.5 w-8 h-8 rounded-full bg-moss/10 flex items-center justify-center flex-shrink-0">
              <Icon size={15} strokeWidth={1.6} className="text-moss" />
            </div>
            <p className="text-sm text-charcoal/80 leading-relaxed pt-1.5">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Housemate() {
  return (
    <section className="mb-14">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-medium mb-4">About your future housemate</p>
      <div className="p-8 rounded-2xl bg-moss/5 border border-moss/15 max-w-3xl">
        <p className="text-base text-charcoal/80 leading-relaxed font-light">
          I work remotely most days, keep the kitchen clean, and value a calm home. I&rsquo;m easy to
          live with — friendly but not in your business, respectful of quiet hours, and happy to
          share a meal when it makes sense. Looking for someone with a similar rhythm: considerate,
          communicative, and low-drama.
        </p>
      </div>
    </section>
  );
}

function FullGallery({ onOpen }) {
  return (
    <section className="mb-14">
      <div className="flex items-end justify-between mb-6">
        <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-medium">Take a look around</p>
        <p className="text-xs uppercase tracking-[0.2em] text-charcoal/40">{photos.length} photos</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {photos.map((src, i) => (
          <button
            key={src}
            onClick={() => onOpen(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-charcoal/5"
            aria-label={`Open photo ${i + 1}`}
          >
            <img
              src={src}
              alt={`1102 Morton, photo ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="mb-4">
      <p className="text-[11px] uppercase tracking-[0.28em] text-gold font-medium mb-4">Location</p>
      <div className="p-8 rounded-2xl border border-charcoal/10 bg-parchment">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center flex-shrink-0">
            <MapPin size={18} strokeWidth={1.6} className="text-clay" />
          </div>
          <div>
            <p className="font-serif text-xl text-charcoal">1102 Morton Ave</p>
            <p className="text-sm text-charcoal/60">Elgin, Illinois</p>
          </div>
        </div>
        <p className="text-sm text-charcoal/70 leading-relaxed font-light max-w-xl">
          A quiet neighborhood a short walk from downtown Elgin — tree-lined streets,
          nearby coffee and food, and Metra service into Chicago just up the road.
        </p>
        <a
          href="https://www.google.com/maps/search/1102+Morton+Ave+Elgin+IL"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-charcoal/70 hover:text-clay transition-colors"
        >
          Open in Google Maps <ArrowRight size={13} strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
}

function ContactCard() {
  return (
    <aside className="lg:sticky lg:top-32">
      <div className="rounded-2xl bg-charcoal text-parchment p-8 shadow-[0_20px_60px_-20px_rgba(26,26,26,0.35)]">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-serif text-4xl">$950</span>
          <span className="text-parchment/50 text-sm">/ mo</span>
        </div>
        <p className="text-parchment/60 text-sm mb-6">All utilities included</p>

        <div className="space-y-3 mb-6 text-sm">
          <div className="flex items-center gap-3 text-parchment/80">
            <Calendar size={15} strokeWidth={1.6} className="text-gold" />
            <span>Move-in: August 2026 (tentative)</span>
          </div>
          <div className="flex items-center gap-3 text-parchment/80">
            <MapPin size={15} strokeWidth={1.6} className="text-gold" />
            <span>1102 Morton Ave, Elgin, IL</span>
          </div>
          <div className="flex items-center gap-3 text-parchment/80">
            <Utensils size={15} strokeWidth={1.6} className="text-gold" />
            <span>Shared kitchen &amp; living space</span>
          </div>
          <div className="flex items-center gap-3 text-parchment/80">
            <Shirt size={15} strokeWidth={1.6} className="text-gold" />
            <span>In-unit laundry</span>
          </div>
        </div>

        <div className="h-px bg-parchment/10 my-6" />

        <p className="text-parchment/60 text-xs uppercase tracking-[0.2em] mb-4">Reach out</p>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:Dwelling@michaelproctor.co?subject=1102%20Morton%20Roommate%20Listing"
            className="inline-flex items-center justify-center gap-3 px-5 py-3.5 bg-parchment text-charcoal rounded-full text-[13px] font-medium hover:bg-gold transition-colors break-all"
          >
            <Mail size={15} strokeWidth={1.75} className="flex-shrink-0" />
            <span>Dwelling@michaelproctor.co</span>
          </a>
          <a
            href="sms:+14792332248"
            className="inline-flex items-center justify-center gap-3 px-5 py-3.5 border border-parchment/25 rounded-full text-xs font-semibold uppercase tracking-[0.2em] hover:bg-parchment/10 transition-colors"
          >
            <Phone size={15} strokeWidth={1.75} />
            <span>Text (479) 233-2248</span>
          </a>
        </div>

        <p className="text-parchment/40 text-[11px] leading-relaxed mt-6">
          Tell me a bit about yourself, when you&rsquo;d move in, and whether you&rsquo;d want the garage.
          I&rsquo;ll reply within a day or two.
        </p>
      </div>

      <p className="text-[10px] uppercase tracking-[0.22em] text-charcoal/35 mt-6 text-center">
        Listing updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </p>
    </aside>
  );
}

export default function RoommateListingPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1)), []);
  const next = useCallback(() => setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1)), []);

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-24 md:px-10">
      <PhotoGridHero onOpen={openLightbox} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
        {/* Main column */}
        <div className="lg:col-span-2">
          <PriceHeader />
          <WhatsSpecial />
          <About />
          <FactsAndFeatures />
          <HouseNotes />
          <Housemate />
          <FullGallery onOpen={openLightbox} />
          <Location />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <ContactCard />
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
}
