import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MichaelIntro() {
    const containerRef = useRef(null);

    useEffect(() => {
        const media = gsap.matchMedia();

        media.add('(min-width: 768px)', () => {
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
        });

        return () => media.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-parchment py-24 md:h-[340vh] md:py-0">
            {/* Blend transition from previous section into this blur-heavy intro */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 md:h-48 bg-gradient-to-b from-[#EBE9E1] via-[#EBE9E1]/85 to-transparent"></div>
            <div className="relative z-20 flex w-full items-center justify-center px-5 md:sticky md:top-0 md:h-screen md:overflow-hidden md:px-6">
                <div className="mx-auto grid h-auto w-full max-w-7xl gap-12 md:h-full md:grid-cols-2 md:items-center md:py-20 lg:gap-24 short:py-10 xshort:py-4">

                    {/* Text Column */}
                    <div className="relative order-1 flex h-auto w-full flex-col justify-center md:h-full">

                        <div className="text-block-1 relative w-full pr-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:pr-4">
                            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-moss/55 font-sans font-medium">
                                Michael Proctor
                            </p>
                            <h2 className="w-full max-w-3xl font-serif text-4xl leading-[1.05] text-charcoal md:text-5xl lg:text-[4.2rem] tracking-tight short:text-4xl md:short:text-5xl lg:short:text-[3.5rem] xshort:text-3xl">
                                I help organizations find the real problem before we build the solution.
                            </h2>
                            <p className="mt-8 max-w-2xl font-sans text-xl lg:text-2xl font-light leading-relaxed text-charcoal/80 short:text-lg short:mt-4">
                                Over the last eight years, I've partnered with nonprofits and small businesses to untangle their strategy, messaging, and design.
                                <br className="hidden md:block mb-4" />
                                What I've learned is that the only way to build something that actually works is to start by asking the uncomfortable questions first.
                            </p>
                        </div>

                        <div className="text-block-2 relative mt-12 w-full border-l border-moss/30 pl-5 pr-0 opacity-100 md:absolute md:top-1/2 md:mt-0 md:-translate-y-1/2 md:pl-10 md:pr-4 md:opacity-0">
                            <h3 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4 short:text-3xl lg:short:text-4xl short:mb-2">
                                The questions that usually don&apos;t get asked until you&apos;ve spent time and money on the thing.
                            </h3>
                            <p className="font-sans text-lg lg:text-xl font-light leading-relaxed text-charcoal/80 short:text-base">
                                Because most creative problems are clarity problems in disguise.
                            </p>
                        </div>

                        <div className="text-block-3 relative mt-12 w-full pr-0 opacity-100 md:absolute md:top-1/2 md:mt-0 md:-translate-y-1/2 md:pr-4 md:opacity-0">
                            <h3 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4 short:text-3xl lg:short:text-4xl short:mb-2">
                                Once we&apos;re clear, I build what fits.
                            </h3>
                            <p className="font-sans text-lg lg:text-xl font-light leading-relaxed text-charcoal/80 short:text-base">
                                Film, campaign, web copy, or systems. Whatever actually solves the underlying problem.
                            </p>
                        </div>

                    </div>

                    {/* Image Column */}
                    <div className="relative order-2 flex min-h-[28rem] w-full items-center justify-center md:h-full">

                        {/* Secondary Image — Nicaragua sunlit coffeeshop scene */}
                        <img
                            src="/images/Nicaragua campaign/Nicaragua-laughing-sun-friend-coffeeshop-workign-2025--234.jpg"
                            alt="Working in Nicaragua"
                            className="collage-secondary absolute -right-4 top-[15%] hidden w-3/5 aspect-square object-cover opacity-0 shadow-xl filter contrast-125 md:block"
                        />

                        {/* Tertiary Image — South Africa production still */}
                        <img
                            src="/images/South Africa Images/SA-By_Michael_Proctor-3.jpg_compressed.JPEG"
                            alt="Field production"
                            className="collage-tertiary absolute -left-8 bottom-[15%] hidden w-1/2 aspect-[4/5] object-cover opacity-0 shadow-xl filter contrast-[1.1] md:block"
                        />

                        {/* Primary: Portrait with Interactive Stats (2026 Trend) */}
                        <div className="collage-primary group/portrait relative z-10 aspect-[3/4] w-full max-w-[19rem] md:w-3/4 md:max-w-none md:cursor-crosshair">
                            <img
                                src="/images/headshot_michael_casual.JPG"
                                alt="Michael portrait"
                                className="w-full h-full rounded-sm object-cover grayscale-[20%] shadow-2xl transition-all duration-700 group-hover/portrait:grayscale-0 group-hover/portrait:scale-[1.02]"
                            />

                            {/* Interactive Impact Overlay */}
                            <div className="pointer-events-none absolute inset-0 hidden flex-col justify-center bg-charcoal/60 px-8 opacity-0 backdrop-blur-[2px] transition-opacity duration-500 group-hover/portrait:opacity-100 md:flex md:px-12">
                                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-6 font-sans">Verifiable Impact</p>
                                <div className="space-y-8">
                                    <div>
                                        <p className="font-serif text-3xl md:text-4xl text-parchment">8+ Years</p>
                                        <p className="text-xs uppercase tracking-widest text-parchment/50 mt-1">Solving Messaging Tension</p>
                                    </div>
                                    <div>
                                        <p className="font-serif text-3xl md:text-4xl text-parchment">50+ Projects</p>
                                        <p className="text-xs uppercase tracking-widest text-parchment/50 mt-1">Across 4 Continents</p>
                                    </div>
                                    <div>
                                        <p className="font-serif text-3xl md:text-4xl text-parchment">$500k+</p>
                                        <p className="text-xs uppercase tracking-widest text-parchment/50 mt-1">Raised for Global Causes</p>
                                    </div>
                                </div>
                                <p className="mt-10 text-[9px] uppercase tracking-[0.2em] text-gold/40 italic">Hover to reveal the narrative</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}
