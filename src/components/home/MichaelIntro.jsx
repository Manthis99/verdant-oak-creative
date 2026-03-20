import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MichaelIntro() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom top',
                    scrub: 1,
                }
            });

            // --- IMAGE COLLAGE ANIMATIONS ---
            
            // 1. Primary Portrait: starts massive, blurred, then resolves into position
            tl.fromTo('.collage-primary',
                { scale: 2.5, x: '-30vw', y: '10vh', filter: 'blur(15px)', opacity: 0.3 },
                { scale: 1, x: 0, y: 0, filter: 'blur(0px)', opacity: 1, duration: 2, ease: 'power2.inOut' },
                0
            );

            // 2. Secondary Image: Slides in from top right
            tl.fromTo('.collage-secondary',
                { y: '-50vh', opacity: 0, rotate: -10 },
                { y: 0, opacity: 1, rotate: -2, duration: 1.5, ease: 'power2.out' },
                1.2
            );

            // 3. Tertiary Image: Slides up from bottom left
            tl.fromTo('.collage-tertiary',
                { y: '50vh', opacity: 0, rotate: 10 },
                { y: 0, opacity: 1, rotate: 3, duration: 1.5, ease: 'power2.out' },
                1.6
            );

            // --- TYPOGRAPHIC ESSAY ANIMATIONS ---

            // Block 1
            tl.fromTo('.text-block-1',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 },
                0.4
            ).to('.text-block-1', 
                { opacity: 0, y: -50, duration: 0.8 }, 
                2.2
            );

            // Block 2
            tl.fromTo('.text-block-2',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 },
                2.2
            ).to('.text-block-2', 
                { opacity: 0, y: -50, duration: 0.8 }, 
                3.8
            );

            // Block 3
            tl.fromTo('.text-block-3',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 },
                3.8
            );

            tl.to({}, { duration: 1.2 });
            
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-[340vh] w-full bg-parchment">
            {/* Blend transition from previous section into this blur-heavy intro */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 md:h-48 bg-gradient-to-b from-[#EBE9E1] via-[#EBE9E1]/85 to-transparent"></div>
            <div className="sticky top-0 z-20 flex h-screen w-full items-center justify-center px-6 overflow-hidden">
                <div className="mx-auto grid max-w-7xl w-full gap-12 lg:gap-24 md:grid-cols-2 md:items-center h-full py-20">
                    
                    {/* Text Column */}
                    <div className="relative h-full w-full flex flex-col justify-center order-2 md:order-1">
                        
                        <div className="text-block-1 absolute w-full top-1/2 -translate-y-1/2 pr-4">
                            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-moss/55 font-sans font-medium">
                                Michael Proctor
                            </p>
                            <h2 className="max-w-[10ch] font-serif text-4xl leading-[0.98] text-charcoal md:text-5xl lg:text-[4.6rem] tracking-tight">
                                I&apos;ve helped solve marketing and strategy problems
                            </h2>
                            <p className="mt-5 max-w-xl font-sans text-xl lg:text-2xl font-light leading-relaxed text-charcoal/80">
                                for nonprofits and small businesses for over eight years.
                            </p>
                            <p className="mt-10 max-w-xl font-sans text-lg lg:text-[1.35rem] font-light leading-relaxed text-charcoal/68">
                                What I&apos;ve learned is to start by asking the uncomfortable questions first.
                            </p>
                        </div>

                        <div className="text-block-2 absolute w-full top-1/2 -translate-y-1/2 opacity-0 pl-6 md:pl-10 border-l border-moss/30 pr-4">
                            <h3 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">
                                The questions that usually don&apos;t get asked until you&apos;ve spent time and money on the thing.
                            </h3>
                            <p className="font-sans text-lg lg:text-xl font-light leading-relaxed text-charcoal/80">
                                Because most creative problems are clarity problems in disguise.
                            </p>
                        </div>

                        <div className="text-block-3 absolute w-full top-1/2 -translate-y-1/2 opacity-0 pr-4">
                            <h3 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">
                                Once we&apos;re clear, I build what fits.
                            </h3>
                            <p className="font-sans text-lg lg:text-xl font-light leading-relaxed text-charcoal/80">
                                Film, campaign, web copy, or systems. Whatever actually solves the underlying problem.
                            </p>
                        </div>

                    </div>
                    
                    {/* Image Column */}
                    <div className="relative h-full w-full flex items-center justify-center order-1 md:order-2">
                        
                        {/* Secondary Image — Nicaragua sunlit coffeeshop scene */}
                        <img 
                            src="/images/Nicaragua campaign/Nicaragua-laughing-sun-friend-coffeeshop-workign-2025--234.jpg" 
                            alt="Working in Nicaragua"
                            className="collage-secondary absolute -right-4 top-[15%] w-3/5 aspect-square object-cover shadow-xl opacity-0 filter contrast-125"
                        />

                        {/* Tertiary Image — South Africa production still */}
                        <img 
                            src="/images/South Africa Images/SA-By_Michael_Proctor-3.jpg_compressed.JPEG" 
                            alt="Field production"
                            className="collage-tertiary absolute -left-8 bottom-[15%] w-1/2 aspect-[4/5] object-cover shadow-xl opacity-0 filter contrast-[1.1]"
                        />

                        {/* Primary: Portrait */}
                        <img 
                            src="/images/headshot_michael_casual.JPG" 
                            alt="Michael portrait"
                            className="collage-primary relative z-10 w-3/4 aspect-[3/4] rounded-sm object-cover grayscale-[20%] shadow-2xl transition-all duration-700 hover:grayscale-0"
                        />
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
