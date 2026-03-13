import { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { writingData } from '../data/writingData';

export default function WritingPage() {
  const containerRef = useRef(null);
  const featuredPost = writingData.find(post => post.featured);
  const archivePosts = writingData.filter(post => !post.featured);

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

    // Stagger in archive posts
    gsap.fromTo('.archive-item',
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.archive-container',
          start: 'top 80%'
        }
      }
    );
     // Reveal Divider
    gsap.fromTo('.reveal-divider',
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, ease: 'power3.inOut', delay: 0.3 }
    );
  }, { scope: containerRef });

  return (
    <div className="min-h-screen bg-parchment pb-32 text-charcoal font-sans" ref={containerRef}>
      
      {/* Page Hero - Full Screen Editorial Image */}
      <header className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden mb-24 lg:mb-32 group">
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

        {/* Divider */}
        <div className="reveal-divider w-full h-[1px] bg-charcoal/10 mb-20 lg:mb-24 origin-left"></div>

        {/* Archive Section - Staggered Editorial Layout */}
        <section className="archive-container max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h3 className="font-serif text-3xl md:text-4xl italic text-charcoal">Archive</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-charcoal/40 font-medium">All Writing ({archivePosts.length})</span>
          </div>

          <div className="flex flex-col gap-0 border-t border-charcoal/10">
            {archivePosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/writing/${post.slug}`} 
                className="archive-item group flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 py-10 md:py-12 border-b border-charcoal/10 hover:bg-black/[0.02] transition-colors duration-300 px-4 -mx-4 rounded-xl"
              >
                
                {/* Meta data (Left column on desktop) */}
                <div className="w-full md:w-48 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-4 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/40 mt-1 md:mt-2">
                  <span className="group-hover:text-moss transition-colors duration-300">{post.date}</span>
                  <span className="hidden md:block">{post.category}</span>
                  <span className="md:hidden opacity-50">{post.readTime}</span>
                </div>

                {/* Title & Excerpt (Right column) */}
                <div className="flex flex-col flex-grow">
                  <h4 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.2] mb-4 group-hover:text-gold transition-colors duration-500 max-w-2xl">
                    {post.title}
                  </h4>
                  <p className="text-base md:text-lg font-light text-charcoal/60 leading-relaxed max-w-2xl mb-6">
                    {post.deck || post.excerpt}
                  </p>
                  <span className="hidden md:block text-xs uppercase tracking-[0.2em] text-charcoal/30 group-hover:text-charcoal/60 transition-colors duration-300 font-medium">
                    {post.readTime}
                  </span>
                </div>

              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
