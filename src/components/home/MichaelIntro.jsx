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
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1,
                }
            });

            // --- 🖼️ IMAGE COLLAGE ANIMATIONS ---
            
            // 1. Primary Portrait: starts massive, blurred, and centered, then scales down into position
            tl.fromTo('.collage-primary',
                { scale: 2.5, x: '-30vw', y: '10vh', filter: 'blur(15px)', opacity: 0.3 },
                { scale: 1, x: 0, y: 0, filter: 'blur(0px)', opacity: 1, duration: 2, ease: 'power2.inOut' },
                0
            );

            // 2. Secondary Image (Abstract): Slides in from the top right behind the portrait
            tl.fromTo('.collage-secondary',
                { y: '-50vh', opacity: 0, rotate: -10 },
                { y: 0, opacity: 1, rotate: -2, duration: 1.5, ease: 'power2.out' },
                1.5 // Start as portrait is settling
            );

            // 3. Tertiary Image (Trees): Slides up from the bottom left
            tl.fromTo('.collage-tertiary',
                { y: '50vh', opacity: 0, rotate: 10 },
                { y: 0, opacity: 1, rotate: 3, duration: 1.5, ease: 'power2.out' },
                2.0
            );


            // --- 📝 TYPOGRAPHIC ESSAY ANIMATIONS ---

            // Block 1: Intro
            tl.fromTo('.text-block-1',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 },
                0.5
            ).to('.text-block-1', 
                { opacity: 0, y: -50, duration: 1 }, 
                2.5 // Fade out as next block comes in
            );

            // Block 2: Method
            tl.fromTo('.text-block-2',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 },
                2.5
            ).to('.text-block-2', 
                { opacity: 0, y: -50, duration: 1 }, 
                4.5
            );

            // Block 3: Philosophy
            tl.fromTo('.text-block-3',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 },
                4.5
            );

            // Pause at end so there is comfortable reading space for Block 3
            tl.to({}, { duration: 1.5 });
            
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-[400vh] w-full bg-parchment">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center px-6 overflow-hidden">
                <div className="mx-auto grid max-w-7xl w-full gap-12 lg:gap-24 md:grid-cols-2 md:items-center h-full py-20">
                    
                    {/* Text Column (Interactive Essay) */}
                    <div className="relative h-full w-full flex flex-col justify-center order-2 md:order-1">
                        
                        <div className="text-block-1 absolute w-full top-1/2 -translate-y-1/2 pr-4">
                            <h2 className="font-serif text-5xl text-charcoal md:text-6xl lg:text-[5rem] mb-6 tracking-tight">
                                I’m Michael.
                            </h2>
                            <p className="font-sans text-xl lg:text-2xl font-light leading-relaxed text-charcoal/80">
                                I make films, campaigns, and brand work. <br/>
                                <span className="opacity-60 italic">But most of my work starts earlier than that.</span>
                            </p>
                        </div>

                        <div className="text-block-2 absolute w-full top-1/2 -translate-y-1/2 opacity-0 pl-6 md:pl-10 border-l border-moss/30 pr-4">
                            <h3 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">
                                I look for real friction.
                            </h3>
                            <p className="font-sans text-lg lg:text-xl font-light leading-relaxed text-charcoal/70">
                                I ask questions. I wonder, and I want to wonder with you.<br/><br/>
                                I listen for what is being requested versus what is actually going on. Then I help turn that clarity into something useful, beautiful, and real.
                            </p>
                        </div>

                        <div className="text-block-3 absolute w-full top-1/2 -translate-y-1/2 opacity-0 pr-4">
                            <h3 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">
                                I build what matters.
                            </h3>
                            <p className="font-sans text-lg lg:text-xl font-light leading-relaxed text-charcoal/70">
                                I am drawn to meaningful work, complex problems, and the space where story, systems, and human reality collide.<br/><br/>
                                I care about how things look and how they feel, but I care even more whether they are true, aligned, and built to do what they are supposed to do.
                            </p>
                        </div>

                    </div>
                    
                    {/* Image Column (Dynamic Collage) */}
                    <div className="relative h-full w-full flex items-center justify-center order-1 md:order-2">
                        
                        {/* Secondary Image (Back Right) */}
                        <img 
                            src="/images/misc photos/Oxford-20203-street-building-17.jpg" 
                            alt="Oxford Street"
                            className="collage-secondary absolute -right-4 top-[15%] w-3/5 aspect-square object-cover shadow-xl opacity-0 filter contrast-125"
                        />

                        {/* Tertiary Image (Back Left) */}
                        <img 
                            src="/images/misc photos/Nicaragua-laughing-friend-mentoring-workign-coffeeshop-2025-232.jpg" 
                            alt="Nicaragua Coffeeshop"
                            className="collage-tertiary absolute -left-8 bottom-[15%] w-1/2 aspect-[4/5] object-cover shadow-xl opacity-0 filter contrast-[1.1]"
                        />

                        {/* Primary Image (Center Front) */}
                        <img 
                            src="/images/headshot_michael_casual.JPG" 
                            alt="Michael portrait"
                            className="collage-primary relative z-10 w-3/4 aspect-[3/4] rounded-sm object-cover grayscale-[20%] sepia-[5%] shadow-2xl transition-all duration-700 hover:grayscale-0"
                        />
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
