import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        num: "01",
        title: "Sometimes it's a film.",
        description: "A story-led piece built to clarify the message, earn trust, and move people toward action."
    },
    {
        num: "02",
        title: "Sometimes it's a campaign.",
        description: "A bigger creative system designed to connect strategy, story, and execution across multiple touchpoints."
    },
    {
        num: "03",
        title: "Sometimes it's fixing your overall messaging.",
        description: "Clarifying what you do, how you say it, and why people should trust it before more creative gets layered on top."
    },
    {
        num: "04",
        title: "Sometimes it's realizing you don't need any of it.",
        description: "Sometimes the most useful outcome is identifying the real issue before more time and money go into the wrong solution."
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
                    opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power2.out',
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
        <section ref={containerRef} className="bg-[#1A1A1A] px-6 py-28 md:py-40 text-parchment relative border-t border-parchment/10">
            <div className="mx-auto max-w-7xl">

                <div className="cap-header mb-16 md:mb-24 max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold/80 font-medium font-sans">
                        In Practice
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-parchment/90 leading-tight tracking-tight">
                        What this looks like in practice.
                    </h2>
                </div>

                {/* 2-column grid */}
                <div className="cap-grid grid gap-4 md:grid-cols-2">
                    {services.map((svc) => (
                        <div
                            key={svc.title}
                            className="cap-card group relative overflow-hidden bg-[#222] p-8 md:p-12 transition-colors duration-500 hover:bg-[#2A2A2A] border border-parchment/5 hover:border-parchment/15 flex flex-col justify-between min-h-[260px]"
                        >
                            <div 
                                className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-30 transition-opacity duration-700" 
                                style={{ backgroundImage: 'url("/images/noise-texture.png")', backgroundSize: '150px 150px' }}
                            ></div>

                            <span className="relative z-10 font-sans text-xs uppercase tracking-widest text-parchment/40 group-hover:text-gold transition-colors duration-300">
                                /{svc.num}
                            </span>

                            <div className="mt-10 relative z-10 transform origin-left transition-transform duration-500 group-hover:scale-[1.02]">
                                <h3 className="mb-4 font-serif text-2xl lg:text-3xl text-parchment/90 group-hover:text-parchment transition-colors duration-300">
                                    {svc.title}
                                </h3>
                                <p className="font-sans text-base lg:text-lg font-light leading-relaxed text-parchment/65 group-hover:text-parchment/85 transition-colors duration-500">
                                    {svc.description}
                                </p>
                            </div>

                            {/* Top-edge gold reveal on hover */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
