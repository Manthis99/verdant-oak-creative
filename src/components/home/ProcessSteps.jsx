import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        num: "01",
        title: "You come with a direction.",
        body: "Whether it's a project, a goal, or something that you've been trying to solve, that's enough to start."
    },
    {
        num: "02",
        title: "We dig into the problem.",
        body: "We follow the tension underneath the ask, even when it leads into messaging, trust, product, or decision-making issues. That's not a detour, it's the work."
    },
    {
        num: "03",
        title: "We build the thing.",
        body: "Once the real problem is clear, we build what fits it best, with the right level of craft, strategy, and restraint."
    }
];

export default function ProcessSteps() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.process-header',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%'
                    }
                }
            );

            gsap.fromTo('.process-step',
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1, stagger: 0.25, ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.process-steps-list',
                        start: 'top 75%'
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-parchment px-6 py-28 md:py-40 overflow-hidden border-t border-charcoal/10">
            <div className="mx-auto max-w-5xl">

                <div className="process-header mb-16 md:mb-24">
                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-charcoal/40 font-sans font-medium">
                        What it actually looks like
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-charcoal leading-tight tracking-tight">
                        The process.
                    </h2>
                </div>

                <div className="process-steps-list flex flex-col relative md:pl-10">
                    <div className="hidden md:block absolute left-0 top-[10%] bottom-[10%] w-[1.5px] bg-charcoal/15 z-0"></div>
                    {steps.map((step, index) => (
                        <div
                            key={step.num}
                            className="process-step group flex flex-col md:flex-row md:items-start gap-6 md:gap-14 py-12 md:py-16 border-t border-charcoal/10 first:border-t-0 relative z-10"
                        >
                            {/* Number & Dot */}
                            <div className="shrink-0 md:w-24 flex items-start relative">
                                <div className="hidden md:block absolute -left-10 top-2.5 w-1.5 h-1.5 rounded-full bg-charcoal/40 -translate-x-1/2"></div>
                                <span className="font-sans text-xs tracking-[0.2em] text-charcoal/40 uppercase pt-1">
                                    {step.num}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="font-serif text-3xl md:text-4xl text-charcoal mb-5 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-charcoal/70 max-w-2xl">
                                    {step.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
