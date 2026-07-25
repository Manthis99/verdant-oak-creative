import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { writingData } from '../data/writingData';

export default function WritingPage() {
  const containerRef = useRef(null);
  const featuredPost = writingData.find(post => post.featured);

  useGSAP(() => {
    // Reveal text in hero
    gsap.fromTo('.reveal-text', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
    );
    
    // Fade in featured post
    gsap.fromTo('.featured-post',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.4 }
    );

  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-parchment pb-32 text-charcoal font-sans" ref={containerRef}>
      
      {/* Page Hero - Full Screen Editorial Image */}
      <header className="group relative mb-20 flex min-h-[40rem] w-full flex-col justify-end overflow-hidden px-4 pb-16 pt-32 md:mb-24 md:h-[85vh] md:min-h-[600px] md:px-8 md:pb-24 md:pt-0 lg:mb-32 lg:px-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/misc photos/acropolis_far_athens-2023-221.jpg" 
            alt="Editorial Field Notes" 
            className="w-full h-full object-cover grayscale-[15%] scale-105 transform origin-center transition-transform duration-[3s] group-hover:scale-100"
          />
          {/* Dark gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-start gap-4">
          <p className="reveal-text text-sm uppercase tracking-[0.25em] text-white/70 font-medium mb-4">
            Field Notes & Essays
          </p>
          <h1 className="reveal-text font-serif text-5xl md:text-7xl lg:text-[6rem] tracking-tight leading-[1.05] mb-6 text-white drop-shadow-xl max-w-5xl">
            A room for <span className="italic">arguments</span>, reflections, and better questions.
          </h1>
          <p className="reveal-text text-xl md:text-2xl font-light italic text-white/90 leading-relaxed max-w-2xl drop-shadow-lg">
            Writing about story, work, people, and the systemic problems underneath the creative brief. Ideas that don't belong in a portfolio caption.
          </p>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        
        {/* Featured Article - Side by Side layout */}
        {featuredPost && (
          <section className="featured-post mb-24 lg:mb-32 group">
            <h3 className="reveal-text font-serif text-3xl md:text-4xl italic text-charcoal mb-12">Featured</h3>
            
            <Link to={`/writing/${featuredPost.slug}`} className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
              {/* Featured Image */}
              <div className="w-full lg:w-[55%] aspect-[4/3] lg:aspect-square xl:aspect-[4/3] overflow-hidden bg-smoke/20">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover origin-center grayscale-[15%] transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>

              {/* Featured Content */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50 mb-8">
                  <span>{featuredPost.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gold/50"></span>
                  <span>{featuredPost.date}</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-8 group-hover:text-gold transition-colors duration-500">
                  {featuredPost.title}
                </h2>
                
                <p className="text-xl md:text-2xl font-light italic text-charcoal/80 mb-8 leading-relaxed">
                  {featuredPost.deck}
                </p>
                
                <p className="text-base md:text-lg font-light text-charcoal/60 leading-relaxed mb-12 max-w-xl">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-charcoal font-medium group-hover:text-moss transition-colors duration-300">
                  <span className="relative overflow-hidden">
                    Read Essay
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-moss transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  </span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          </section>
        )}

      </div>
    </div>
  );
}
