import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {
    to: '/',
    label: 'Home',
    description: 'What I do and how I approach the work.'
  },
  {
    to: '/about',
    label: 'About Michael',
    description: 'How I think, work, and got here.'
  },
  {
    to: '/work',
    label: 'Selected Work',
    description: 'Films, campaigns, and brand projects.'
  },
  {
    to: '/projects',
    label: 'Personal Projects',
    description: 'Hardware, software, and things made to learn.'
  },
  {
    to: '/start',
    label: 'Start Here',
    description: 'Tell me what is not working.'
  }
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const closeButtonRef = useRef(null);

  const isCurrentPage = (to) => (
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
  );

  useEffect(() => {
    setOpen(false);
    setNavHidden(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      setNavHidden(false);
      return undefined;
    }

    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNav = () => {
      const currentScrollY = window.scrollY;
      const distance = currentScrollY - lastScrollY;

      if (currentScrollY < 80) {
        setNavHidden(false);
      } else if (Math.abs(distance) > 8) {
        setNavHidden(distance > 0);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(updateNav);
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <Link
        to="/start"
        className={`fixed left-[max(0.75rem,env(safe-area-inset-left))] top-[max(0.75rem,env(safe-area-inset-top))] z-[90] flex min-h-11 items-center border border-charcoal/30 bg-[#e9e2d2] px-3 py-2.5 font-serif text-base leading-none tracking-[-0.025em] text-charcoal shadow-[5px_5px_0_rgba(23,23,23,0.13)] transition-transform duration-300 hover:-translate-y-0.5 sm:left-7 sm:top-7 sm:px-5 sm:py-3 sm:text-lg ${navHidden ? '-translate-y-[calc(100%+3rem)] sm:translate-y-0' : 'translate-y-0'}`}
        aria-label="Let's talk about your project"
      >
        Let&apos;s Talk
      </Link>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed right-[max(0.75rem,env(safe-area-inset-right))] top-[max(0.75rem,env(safe-area-inset-top))] z-[90] flex h-11 items-stretch border border-charcoal bg-[#e9e2d2] text-charcoal shadow-[5px_5px_0_rgba(23,23,23,0.16)] transition-[opacity,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_rgba(23,23,23,0.18)] sm:right-7 sm:top-7 sm:h-[46px] ${open ? 'pointer-events-none opacity-0' : 'opacity-100'} ${navHidden ? '-translate-y-[calc(100%+3rem)] sm:translate-y-0' : 'translate-y-0'}`}
        aria-label="Open site menu"
        aria-expanded={open}
        aria-controls="studio-menu"
      >
        <span className="flex items-center px-4 text-[10px] font-semibold uppercase tracking-[0.24em] sm:px-5">Menu</span>
        <span className="flex w-10 items-center justify-center border-l border-charcoal bg-charcoal text-lg font-light text-parchment">+</span>
      </button>

      <section
        id="studio-menu"
        aria-label="Site menu"
        aria-modal="true"
        aria-hidden={!open}
        role="dialog"
        className={`fixed inset-0 z-[110] flex flex-col overflow-y-auto overscroll-contain bg-charcoal pb-[env(safe-area-inset-bottom)] text-parchment transition-[opacity,transform,visibility] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-full opacity-0'}`}
      >
        <header className="flex items-center justify-between border-b border-parchment/25 px-5 py-5 sm:px-9 sm:py-7 lg:px-14">
          <Link to="/" className="font-serif text-xl tracking-[-0.025em] sm:text-2xl">
            Michael Proctor
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 border border-parchment/40 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.22em] transition-colors hover:bg-parchment hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-parchment"
          >
            Close
            <X size={15} strokeWidth={1.5} />
          </button>
        </header>

        <div className="grid flex-1 lg:grid-cols-[0.34fr_1fr]">
          <div className="flex justify-between border-b border-parchment/20 px-5 py-6 lg:flex-col lg:border-b-0 lg:border-r lg:px-10 lg:py-10 xl:px-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">Menu</p>
            <a
              href="mailto:hello@michaelproctor.co"
              className="border-b border-parchment/45 pb-1 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-gold hover:text-gold"
            >
              Email Michael
            </a>
          </div>

          <nav aria-label="Primary navigation" className="self-center">
            {navLinks.map((link, index) => {
              const active = isCurrentPage(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={active ? 'page' : undefined}
                  className={`group grid grid-cols-[2.25rem_1fr_auto] items-center gap-3 border-b border-parchment/20 px-5 py-5 transition-colors duration-300 first:border-t sm:grid-cols-[3.5rem_1fr_auto] sm:px-9 sm:py-7 lg:grid-cols-[4.5rem_minmax(0,1fr)_minmax(10rem,0.55fr)_auto] lg:gap-6 lg:px-10 lg:py-8 xl:px-14 ${active ? 'bg-parchment text-charcoal' : 'hover:bg-parchment hover:text-charcoal'}`}
                >
                  <span className={`text-[9px] tracking-[0.2em] ${active ? 'text-gold' : 'text-current opacity-45 group-hover:text-gold group-hover:opacity-100'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-[2rem] leading-[0.92] tracking-[-0.045em] sm:text-[3rem] lg:text-[4.25rem] xl:text-[5rem]">
                    {link.label}
                  </span>
                  <span className="col-start-2 mt-1 max-w-[17rem] text-xs leading-relaxed text-current opacity-55 lg:col-start-auto lg:mt-0">
                    {link.description}
                  </span>
                  <ArrowUpRight className="row-start-1 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:row-start-auto" size={20} strokeWidth={1.3} />
                </Link>
              );
            })}
          </nav>
        </div>
      </section>
    </>
  );
}
