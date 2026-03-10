import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "01",
        title: "Understand",
        description: "We start by figuring out what is actually going on. Not just what is being requested, but what is underneath it."
    },
    {
        num: "02",
        title: "Clarify",
        description: "We define the real problem, sharpen the story, and find the tension worth solving."
    },
    {
        num: "03",
        title: "Build",
        description: "Then we make the thing that fits reality. A film. A campaign. A brand system. A clearer path forward."
    }
];

export default function ProcessSteps() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.process-title',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%'
                    }
                }
            );

            gsap.fromTo('.process-card',
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.process-grid',
                        start: 'top 75%'
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-charcoal px-6 py-32 md:py-48 text-parchment overflow-hidden">
            <div className="mx-auto max-w-7xl">
                
                <h2 className="process-title mb-20 md:mb-32 font-serif text-4xl md:text-5xl lg:text-[4rem] text-center text-parchment/90 tracking-tight">
                    Good work starts <span className="italic text-gold">before</span> the deliverable.
                </h2>

                <div className="process-grid grid gap-8 md:gap-8 lg:gap-12 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <div 
                            key={step.title} 
                            className={`process-card group relative flex flex-col justify-between overflow-hidden rounded-sm border border-parchment/10 bg-[#1F211F] p-8 lg:p-12 transition-colors duration-500 hover:border-gold/30 hover:bg-[#252825] ${index === 1 ? 'md:mt-16' : ''} ${index === 2 ? 'md:mt-32' : ''}`}
                        >
                            {/* Decorative Background Number */}
                            <span className="absolute -right-4 top-4 font-serif text-[8rem] leading-none text-parchment/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-parchment/10 select-none">
                                {step.num}
                            </span>
                            
                            <div className="relative z-10">
                                <span className="mb-8 inline-block rounded-full border border-parchment/20 px-5 py-2 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-parchment/60 transition-colors group-hover:border-gold/30 group-hover:text-gold/90 shadow-sm">
                                    Phase {step.num}
                                </span>
                                <h3 className="mb-6 font-serif text-3xl lg:text-4xl text-parchment/90 transition-colors group-hover:text-parchment">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-lg lg:text-xl font-light leading-relaxed text-parchment/60 group-hover:text-parchment/80 transition-colors duration-500">
                                    {step.description}
                                </p>
                            </div>
                            
                            {/* Decorative precise architectural line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold/50 transition-all duration-700 ease-out group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}
