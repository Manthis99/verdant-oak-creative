import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
    {
        num: "01",
        title: "Films & Visual Storytelling",
        description: "When the story needs to move more than just attention, we craft cinematic narratives that anchor the brand."
    },
    {
        num: "02",
        title: "Campaigns & Strategy",
        description: "When the message needs structure and momentum. We build the strategic path from awareness to action."
    },
    {
        num: "03",
        title: "Brand Clarity & Messaging",
        description: "When the real issue is not visibility, but language. We find the right words to position your identity."
    },
    {
        num: "04",
        title: "Web Design & Copywriting",
        description: "Building digital spaces that don't just look beautiful, but actually communicate the core of what you do."
    },
    {
        num: "05",
        title: "Creative Direction & Partnership",
        description: "Connecting business goals to creative execution. I lead teams, manage contractors, and partner deeply to ensure the work gets done right."
    }
];

export default function Capabilities() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cap-header',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 75%'
                    }
                }
            );

            gsap.fromTo('.cap-card',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.cap-grid',
                        start: 'top 80%'
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-[#1A1A1A] px-6 py-32 md:py-48 text-parchment relative border-t border-parchment/10">
            <div className="mx-auto max-w-7xl">
                
                <div className="cap-header mb-20 md:mb-32 max-w-3xl">
                    <p className="mb-6 text-sm uppercase tracking-[0.2em] text-gold/80 font-medium font-sans">
                        Capabilities
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-parchment/90 leading-tight">
                        What I help build.
                    </h2>
                </div>
                
                <div className="cap-grid grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {capabilities.map((cap, index) => (
                        <div 
                            key={cap.title} 
                            className="cap-card group relative overflow-hidden bg-[#222] p-8 md:p-12 transition-colors duration-500 hover:bg-[#2A2A2A] border border-parchment/5 hover:border-parchment/20 flex flex-col justify-between min-h-[320px]"
                        >
                            <span className="font-sans text-xs uppercase tracking-widest text-parchment/40 group-hover:text-gold transition-colors duration-300">
                                /{cap.num}
                            </span>
                            
                            <div className="mt-12">
                                <h3 className="mb-4 font-serif text-2xl lg:text-3xl text-parchment/90">
                                    {cap.title}
                                </h3>
                                <p className="font-sans text-base lg:text-lg font-light leading-relaxed text-parchment/60 group-hover:text-parchment/80 transition-colors duration-500">
                                    {cap.description}
                                </p>
                            </div>

                            {/* Decorative line */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>
                        </div>
                    ))}
                    
                    {/* Empty placeholder card to balance the 3-column grid since we have 5 items */}
                    <div className="cap-card hidden lg:flex items-center justify-center p-8 bg-[#222]/50 border border-parchment/5">
                        <div className="h-[1px] w-12 bg-parchment/10"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
