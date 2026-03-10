import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  // Initial Load Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // We will build the dynamic color flipping hook here later.
  // For now, we will use a semi-transparent glass backing plate as a baseline 
  // so the text is always somewhat legible immediately while we build the hook.

  return (
    <header 
      ref={navRef} 
      className="fixed inset-x-0 top-6 z-50 mx-auto w-[min(1200px,92vw)] transition-colors duration-300"
    >
      <div className="flex items-center justify-between mix-blend-difference text-[#F0EFEB]">
        <Link to="/" className="text-xl font-serif tracking-tight flex items-center gap-2">
          Verdant Oak
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === link.to ? 'font-medium opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden opacity-80 hover:opacity-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>
      
      {open && (
        <nav className="mt-4 flex flex-col gap-4 border-t border-white/20 pt-4 md:hidden text-charcoal bg-parchment/95 p-6 rounded-lg backdrop-blur-md">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="text-xl font-serif">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
