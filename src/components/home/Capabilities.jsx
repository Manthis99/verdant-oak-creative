import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        num: "01",
        title: "Film & Video Production",
        description: "End-to-end production of brand films, documentary shorts, fundraising campaigns, and launch videos. From concept and script through shoot, edit, and delivery."
    },
    {
        num: "02",
        title: "Campaign Strategy & Creative Direction",
        description: "Full campaign architecture — message sequencing, audience mapping, channel strategy, and the creative system to hold it together across every touchpoint."
    },
    {
        num: "03",
        title: "Brand Messaging & Clarity",
        description: "Positioning, voice, language, and the core story that makes everything else perform. Ideal when you have a strong offer but the language around it isn't landing."
    },
    {
        num: "04",
        title: "Website Design & Copywriting",
        description: "Strategy-led web design paired with copy that earns attention and converts it. Built for organizations that want a site that works, not just one that looks good."
    },
    {
        num: "05",
        title: "Embedded Creative Partnership",
        description: "Ongoing creative leadership for organizations that need a trusted collaborator — not a vendor. Available for retainer or project-based engagements."
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
                        Services Offered
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-parchment/90 leading-tight tracking-tight">
                        Services Offered.
                    </h2>
                </div>

                {/* 2-column grid */}
                <div className="cap-grid grid gap-4 md:grid-cols-2">
                    {services.map((svc) => (
                        <div
                            key={svc.title}
                            className="cap-card group relative overflow-hidden bg-[#222] p-8 md:p-12 transition-colors duration-500 hover:bg-[#2A2A2A] border border-parchment/5 hover:border-parchment/20 flex flex-col justify-between min-h-[260px]"
                        >
                            <span className="font-sans text-xs uppercase tracking-widest text-parchment/40 group-hover:text-gold transition-colors duration-300">
                                /{svc.num}
                            </span>

                            <div className="mt-10">
                                <h3 className="mb-4 font-serif text-2xl lg:text-3xl text-parchment/90">
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
