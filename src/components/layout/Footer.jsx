import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-parchment pt-32 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-parchment/5 rounded-full blur-[120px] pointer-events-none opacity-20"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Top Section: Simple closing message + email */}
        <div className="grid md:grid-cols-2 gap-16 mb-40">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F0EFEB] tracking-tight mb-6">
              The right work<br/>
              <span className="text-gold italic">starts here.</span>
            </h2>
            <p className="max-w-md text-[#D4C3A3] font-light text-lg leading-relaxed">
              If something on this site felt true — even if you're not sure what to do with that yet — reach out. The conversation is free.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-center">
            <a 
              href="mailto:hello@verdantoak.com" 
              className="group inline-flex items-center gap-3 text-xl md:text-2xl font-serif text-[#F0EFEB] hover:text-gold transition-colors duration-500 border-b border-white/10 hover:border-gold/30 pb-2"
            >
              hello@verdantoak.com
              <ArrowRight size={20} className="transition-transform duration-500 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        {/* Massive Wordmark — given more breathing room */}
        <div className="mb-24 border-y border-white/10 py-16 text-center md:text-left">
          <Link to="/" className="block">
            <h1 className="text-[12vw] leading-none font-serif tracking-tighter text-[#F0EFEB]/90 uppercase hover:text-gold transition-colors duration-500">
              Verdant Oak<span className="text-gold">.</span>
            </h1>
          </Link>
        </div>

        {/* Bottom: Links & Legal */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm text-parchment/60 font-light">
          <div className="flex flex-col gap-4">
            <span className="text-gold uppercase tracking-widest text-xs font-medium mb-2">Navigation</span>
            <Link to="/" className="hover:text-parchment transition-colors">Home</Link>
            <Link to="/work" className="hover:text-parchment transition-colors">Work</Link>
            <Link to="/writing" className="hover:text-parchment transition-colors">Writing</Link>
            <Link to="/start" className="hover:text-parchment transition-colors">Start</Link>
            <Link to="/book" className="hover:text-parchment transition-colors">Book a Call</Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-gold uppercase tracking-widest text-xs font-medium mb-2">Elsewhere</span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-parchment transition-colors">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-parchment transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-parchment transition-colors">
              Wedding Portfolio
            </a>
          </div>
          
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1 md:items-end md:text-right">
            <p className="mt-8 md:mt-0 text-xs text-parchment/40">
              © {new Date().getFullYear()} Verdant Oak Creative.
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
