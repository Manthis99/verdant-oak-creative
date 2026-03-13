import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cta-fade',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 60%'
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-[#111] px-6 py-40 md:py-64 text-parchment relative overflow-hidden flex flex-col justify-center min-h-[100vh]">
            
            <div className="mx-auto max-w-7xl w-full relative z-10">
                <div className="cta-fade text-center mb-24 md:mb-40">
                    <p className="mb-8 text-xs md:text-sm uppercase tracking-[0.3em] text-gold/80 font-medium font-sans">
                        Next Steps
                    </p>
                    <h2 className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-[1.05] tracking-tighter text-parchment mb-12">
                        Something worth<br />
                        <span className="italic text-[#D4C3A3] opacity-90">talking through?</span>
                    </h2>
                    <p className="max-w-2xl mx-auto font-sans text-xl lg:text-2xl font-light text-parchment/70 leading-relaxed">
                        No pitch. No package pushed at you. Just a conversation about what you're trying to do and whether I'm the right person to help with it.
                    </p>
                </div>

                {/* Primary and secondary CTA paths */}
                <div className="cta-fade grid md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
                    
                    {/* Primary */}
                    <Link to="/start" className="group relative border border-gold/25 bg-[#1A1A1A] p-12 lg:p-16 transition-all duration-700 hover:border-gold/40 flex flex-col items-center text-center overflow-hidden rounded-sm">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/8 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-3xl lg:text-4xl text-parchment mb-6 group-hover:text-gold transition-colors duration-500">
                                Start the Diagnostic
                            </h3>
                            <p className="font-sans text-base font-light text-parchment/70 leading-relaxed max-w-sm mx-auto mb-10">
                                Walk through the core tension, outcome, and obstacles first. It is the best fit if you are interested but still sorting out what is really needed.
                            </p>
                            <span className="inline-block border-b border-gold/30 pb-1 text-xs tracking-[0.2em] text-gold uppercase group-hover:border-gold transition-colors duration-500">
                                Start the Diagnostic
                            </span>
                        </div>
                    </Link>

                    {/* Secondary */}
                    <Link to="/book" className="group relative border border-parchment/10 bg-[#1A1A1A] p-12 lg:p-16 transition-all duration-700 hover:border-parchment/30 flex flex-col items-center text-center overflow-hidden rounded-sm">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-parchment/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-out"></div>
                        <div className="relative z-10">
                            <h3 className="font-serif text-3xl lg:text-4xl text-parchment mb-6">
                                Schedule a Call
                            </h3>
                            <p className="font-sans text-base font-light text-parchment/70 leading-relaxed max-w-sm mx-auto mb-10">
                                If you already know you want to talk, book time directly and we will look at the problem together.
                            </p>
                            <span className="inline-block border-b border-parchment/30 pb-1 text-xs tracking-[0.2em] text-parchment uppercase group-hover:border-parchment transition-colors duration-500">
                                Schedule a Call
                            </span>
                        </div>
                    </Link>

                </div>

                <div className="cta-fade mt-10 text-center">
                    <a
                        href="mailto:hello@michaelproctor.co"
                        className="text-sm tracking-[0.2em] uppercase text-parchment/45 border-b border-parchment/15 pb-1 transition-colors hover:text-parchment hover:border-parchment/35"
                    >
                        Email Me Directly
                    </a>
                </div>
            </div>
        </section>
    );
}
