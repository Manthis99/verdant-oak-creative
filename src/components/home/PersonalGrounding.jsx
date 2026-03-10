import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PersonalGrounding() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ground-item',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, 
                    y: 0, 
                    duration: 1.2, 
                    stagger: 0.3, 
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 65%'
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-[#EBE9E1] px-6 py-32 md:py-48 relative overflow-hidden">
            <div className="mx-auto max-w-7xl">
                
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32 items-start">
                    
                    {/* Left: The Premise */}
                    <div className="ground-item lg:sticky lg:top-32">
                        <p className="mb-6 text-sm uppercase tracking-[0.2em] text-charcoal/40 font-medium font-sans">
                            The Philosophy
                        </p>
                        <h2 className="font-serif text-4xl lg:text-5xl text-charcoal leading-tight mb-8">
                            Good work requires good partnership.
                        </h2>
                        <div className="h-[1px] w-24 bg-charcoal/20 mb-8"></div>
                        <p className="font-sans text-lg font-light leading-relaxed text-charcoal/70">
                            I am looking to collaborate with teams and leaders who value clarity over noise, who are willing to ask the hard questions, and who want to build things that actually matter.
                        </p>
                    </div>

                    {/* Right: The Manifesto */}
                    <div className="flex flex-col gap-12 lg:gap-20 pt-8 lg:pt-0">
                        <div className="ground-item border-t border-charcoal/10 pt-10">
                            <h3 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">
                                Clarity & Honesty
                            </h3>
                            <p className="font-sans text-xl lg:text-2xl font-light leading-relaxed text-charcoal/80">
                                I care about work that is clear, honest, and useful. I care about beauty, but not as decoration. I care about the kind of process that helps people feel heard, not handled.
                            </p>
                        </div>

                        <div className="ground-item border-t border-charcoal/10 pt-10">
                            <h3 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">
                                Architecture & Action
                            </h3>
                            <p className="font-sans text-xl lg:text-2xl font-light leading-relaxed text-charcoal/80">
                                I am drawn to the intersection of story, structure, faith, art, and action. I like asking better questions. I like building things that make sense.
                            </p>
                        </div>

                        <div className="ground-item border-t border-charcoal/10 pt-10">
                            <h3 className="font-serif text-3xl lg:text-4xl text-charcoal mb-6">
                                Truth & Utility
                            </h3>
                            <p className="font-sans text-xl lg:text-2xl font-light leading-relaxed text-charcoal/80">
                                I am not interested in building a beautiful answer to the wrong problem. I want to help you get closer to what is true, and then package that into something your audience can actually use.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
