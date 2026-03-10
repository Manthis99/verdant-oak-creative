import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-parchment pt-32 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-parchment/5 rounded-full blur-[120px] pointer-events-none opacity-20"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Top Section: Brand & Messaging */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#F0EFEB] tracking-tight mb-6">
              Less noise.<br/>
              <span className="text-gold italic">More clarity.</span>
            </h2>
            <p className="max-w-md text-[#D4C3A3] font-light text-lg leading-relaxed">
              Verdant Oak partners with founders and organizations to build films, campaigns, and systems that actually work.
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

        {/* Middle Section: Massive Logo */}
        <div className="mb-20 border-y border-white/10 py-12 text-center md:text-left">
          <h1 className="text-[12vw] leading-none font-serif tracking-tighter text-[#F0EFEB]/90 uppercase">
            Verdant Oak<span className="text-gold">.</span>
          </h1>
        </div>

        {/* Bottom Section: Links & Legal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm text-parchment/60 font-light">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <span className="text-gold uppercase tracking-widest text-xs font-medium mb-2">Navigation</span>
            <Link to="/" className="hover:text-parchment transition-colors">Work</Link>
            <Link to="/approach" className="hover:text-parchment transition-colors">Approach</Link>
            <Link to="/about" className="hover:text-parchment transition-colors">About</Link>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <span className="text-gold uppercase tracking-widest text-xs font-medium mb-2">Social</span>
            <a href="#" className="hover:text-parchment transition-colors flex items-center gap-2">
              Instagram
            </a>
            <a href="#" className="hover:text-parchment transition-colors flex items-center gap-2">
              LinkedIn
            </a>
            <a href="#" className="hover:text-parchment transition-colors flex items-center gap-2">
              Twitter
            </a>
          </div>
          
          {/* Col 3 */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-2 md:items-end md:text-right">
             <span className="text-gold uppercase tracking-widest text-xs font-medium mb-2">Location</span>
             <p>Serving forward-thinking<br/>brands worldwide.</p>
             <p className="mt-8 text-xs text-parchment/40">
               © {new Date().getFullYear()} Verdant Oak Creative.<br/>All rights reserved.
             </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
