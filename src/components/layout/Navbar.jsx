import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { to: '/work', label: 'Work' }
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // Initial Load Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header 
      ref={navRef} 
      className="fixed inset-x-0 top-6 z-[100] mx-auto w-max max-w-[92vw] transition-all duration-500"
    >
      <div 
        className={`relative flex items-center justify-between bg-charcoal/95 backdrop-blur-xl border border-white/10 text-parchment shadow-2xl rounded-full transition-all duration-500 ${
          scrolled ? 'px-6 py-3 shadow-black/40' : 'px-8 py-4 shadow-black/20'
        }`}
      >
        <Link to="/" className="text-xl font-serif tracking-tight pr-6 sm:pr-8 border-r border-white/10 flex items-center gap-2">
          Verdant Oak
        </Link>
        <nav className="hidden items-center gap-6 pl-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === link.to ? 'font-medium text-gold' : 'text-parchment/70 hover:text-parchment'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/start"
            className="ml-2 rounded-full border border-gold/40 text-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all hover:bg-gold hover:text-charcoal shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Start Exploring
          </Link>
        </nav>
        <button
          className="md:hidden ml-6 opacity-80 hover:opacity-100 text-parchment"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>
      
      {open && (
        <nav className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[90vw] max-w-sm flex flex-col gap-4 border border-white/10 md:hidden bg-charcoal/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-center origin-top animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-2xl font-serif text-parchment hover:text-gold transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="w-12 h-px bg-white/10 mx-auto my-4"></div>
          <Link 
            to="/start" 
            className="inline-block rounded-full border border-gold/40 bg-transparent text-gold px-6 py-4 text-center text-sm font-semibold uppercase tracking-widest transition-colors hover:bg-gold hover:text-charcoal"
          >
            Start Exploring
          </Link>
        </nav>
      )}
    </header>
  );
}
