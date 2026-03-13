import { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { writingData } from '../data/writingData';

// Simple function to convert raw HTML strings to React elements safely 
// (for a real CMS you'd likely use an MDX parser or DOMpurify, but this works for our dummy data structure).
const createMarkup = (html) => {
  return { __html: html };
};

export default function ArticlePage() {
  const { slug } = useParams();
  const containerRef = useRef(null);

  // Find the current article
  const article = writingData.find(post => post.slug === slug);
  
  // Find related/next article (just grab another random one for the footer)
  const relatedArticle = writingData.find(post => post.slug !== slug) || writingData[0];

  // Scroll to top on mount (important for routing)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useGSAP(() => {
    if (!article) return;
    
    // Reveal text in header
    gsap.fromTo('.reveal-header', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', delay: 0.1 }
    );
    
    // Fade in body
    gsap.fromTo('.reveal-body',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out', delay: 0.5 }
    );
  }, { scope: containerRef, dependencies: [slug] });

  // Handle 404 state gracefully
  if (!article) {
    return (
      <div className="min-h-screen bg-parchment pt-48 pb-32 px-4 flex flex-col items-center justify-center text-charcoal">
        <h1 className="font-serif text-5xl mb-8">Notes not found.</h1>
        <Link to="/writing" className="text-sm uppercase tracking-[0.2em] font-medium text-moss hover:text-gold transition-colors">
          Return to Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment pb-32 text-charcoal font-sans" ref={containerRef}>
      
      {/* Full Screen Article Header */}
      <header className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-end pb-16 md:pb-24 px-4 md:px-8 lg:px-16 overflow-hidden mb-16 md:mb-24">
        {article.image && (
          <div className="absolute inset-0 z-0">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover grayscale-[15%]"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-black/20"></div>
          </div>
        )}
        
        <div className="relative z-10 max-w-[800px] mx-auto w-full reveal-header">
          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-white/70 mb-6 md:mb-8">
            <Link to="/writing" className="hover:text-gold transition-colors">Writing</Link>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span>{article.category}</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6 text-white drop-shadow-xl">
            {article.title}
          </h1>

          {article.deck && (
            <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-white/90 mb-8 leading-relaxed drop-shadow-lg max-w-2xl">
              {article.deck}
            </p>
          )}

          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-medium text-white/70 border-t border-white/20 pt-6">
            <span>{article.date}</span>
            <span className="w-4 h-[1px] bg-white/30"></span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      {/* We apply base typography styles using standard Tailwind to the container,
          which will cascade down to the raw HTML inserted via dangerouslySetInnerHTML.
          The `prose` class from Tailwind Typography is great, but creating our own 
          custom rules guarantees it exactly matches the premium editorial brand language 
          without fighting default padding/margins. */}
      <article 
        className="reveal-body max-w-[650px] mx-auto px-4 sm:px-0 text-[1.1rem] md:text-lg leading-[1.8] md:leading-[1.9] font-light text-[#222] article-content"
        dangerouslySetInnerHTML={createMarkup(article.content)}
      />

      {/* Article Footer & Next Navigation */}
      <footer className="max-w-[800px] mx-auto mt-32 md:mt-48 pt-16 md:pt-24 border-t border-charcoal/10 px-4 sm:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-charcoal/40 font-medium mb-4">
              More Writing
            </p>
            <Link to={`/writing/${relatedArticle.slug}`} className="group block">
              <h4 className="font-serif text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-gold transition-colors duration-300">
                {relatedArticle.title}
              </h4>
              <span className="text-sm font-light italic text-charcoal/60 group-hover:text-charcoal/80 transition-colors">
                {relatedArticle.deck || relatedArticle.excerpt}
              </span>
            </Link>
          </div>

          <Link 
            to="/writing" 
            className="shrink-0 group relative overflow-hidden rounded-full border border-charcoal/20 px-8 py-3 text-xs tracking-[0.2em] text-charcoal uppercase transition-all duration-500 hover:border-moss"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-parchment">
              Back to Archive
            </span>
            <div className="absolute inset-0 h-full w-full translate-y-[101%] bg-moss transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
          </Link>

        </div>
      </footer>

      {/* Custom Styles for injected HTML content (headings, blockquotes, drop caps) */}
      <style>{`
        .article-content p {
          margin-bottom: 2rem;
        }
        .article-content p:last-child {
          margin-bottom: 0;
        }
        .article-content h2, 
        .article-content h3 {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          margin-top: 4rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          font-size: 0.85rem;
          tracking: 0.2em;
        }
        .article-content strong, 
        .article-content b {
          font-weight: 500;
        }
        .article-content em, 
        .article-content i {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 1.1em;
        }
        /* Editorial Drop Cap on first paragraph if it carries the class */
        .article-content p.drop-cap::first-letter {
          font-family: 'Playfair Display', serif;
          float: left;
          font-size: 5.5rem;
          line-height: 0.8;
          padding-top: 0.4rem;
          padding-right: 0.8rem;
          padding-left: 0.2rem;
          color: #1a1a1a;
        }
      `}</style>

    </div>
  );
}
