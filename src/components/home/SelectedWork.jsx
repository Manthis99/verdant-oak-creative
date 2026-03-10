import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        name: "Ukraine Housing Campaign",
        tension: "A story built to move people from awareness to action, helping raise over $500,000 for safe homes in Ukraine.",
        story: "What looked like a fundraising video was really a trust and clarity problem. The work needed to do more than inform. It needed to help people feel the stakes, understand the response, and believe their giving would matter.",
        image: "/images/misc photos/athens-acropolise_door-framed-2023-278.jpg",
        link: "/work/ukraine"
    },
    {
        name: "The Nicaragua Campaign",
        tension: "Connecting international audiences to local realities without the poverty porn.",
        story: "The nonprofit space is notoriously saturated with campaigns that lean heavily into guilt to drive donations. Our client wanted a holistic brand campaign that honored the dignity of the local Nicaraguan communities while still demonstrating urgent need.",
        image: "/images/misc photos/portrit_nicaragua_family_poverty_powerful.jpg",
        link: "/work/nicaragua"
    }
];

export default function SelectedWork() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            const textBlocks = gsap.utils.toArray('.project-text-block');
            const images = gsap.utils.toArray('.project-img');

            // Set initial state for all images
            gsap.set(images, { opacity: 0, filter: 'blur(10px)', scale: 1.1 });
            gsap.set(images[0], { opacity: 1, filter: 'blur(0px)', scale: 1 });

            textBlocks.forEach((block, i) => {
                // Focus states for text blocks
                gsap.set(block, { opacity: 0.2, y: 50 });

                ScrollTrigger.create({
                    trigger: block,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    onEnter: () => {
                        // Fade in correct image
                        gsap.to(images, { opacity: 0, duration: 0.8 });
                        gsap.to(images[i], { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.2, ease: 'power2.out' });
                        // Highlight text block
                        gsap.to(block, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
                    },
                    onEnterBack: () => {
                        // Same logic when scrolling backwards
                        gsap.to(images, { opacity: 0, duration: 0.8 });
                        gsap.to(images[i], { opacity: 1, filter: 'blur(0px)', scale: 1, duration: 1.2, ease: 'power2.out' });
                        gsap.to(block, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
                    },
                    onLeave: () => {
                        gsap.to(block, { opacity: 0.2, y: -20, duration: 0.5 });
                    },
                    onLeaveBack: () => {
                        gsap.to(block, { opacity: 0.2, y: 50, duration: 0.5 });
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full bg-[#111] text-parchment">
            
            {/* Massive Header */}
            <div className="absolute top-0 left-0 w-full z-20 px-6 py-20 md:py-32 pointer-events-none">
                <h2 className="mx-auto max-w-7xl font-serif text-5xl md:text-7xl lg:text-[7rem] text-parchment/90 tracking-tighter">
                    Selected Work
                </h2>
            </div>

            <div className="relative w-full">
                
                {/* Background Image Container */}
                <div className="absolute top-0 left-0 w-full md:w-[85%] h-full">
                    <div className="sticky top-0 w-full h-[60vh] md:h-screen overflow-hidden">
                        {projects.map((project, i) => (
                            <div key={i} className="absolute inset-0">
                                <img 
                                    src={project.image} 
                                    alt={project.name}
                                    className={`project-img absolute inset-0 w-full h-full object-cover grayscale-[30%] opacity-0 origin-center`}
                                />
                                {/* Smooth gradient blend that extends image beautifully beneath text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-[#111] md:bg-gradient-to-r md:from-transparent md:via-[#111]/20 md:to-[#111]"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col md:flex-row w-full">
                    {/* Invisible spacer to push text to the right on desktop */}
                    <div className="hidden md:block md:w-[45%] lg:w-[45%] shrink-0"></div>

                    {/* Right Side: Scrolling Case Study Texts */}
                    <div className="w-full md:w-[55%] lg:w-[55%] shrink-0 py-[60vh] px-6 md:pl-0 md:pr-16 lg:pr-32">
                        {projects.map((project, i) => (
                            <div key={i} className="project-text-block min-h-[60vh] flex flex-col justify-center pb-24 md:pb-48">
                                <h3 className="mb-8 font-serif text-4xl lg:text-6xl text-parchment leading-tight">
                                    {project.name}
                                </h3>
                                <div className="mb-6 h-[1px] w-24 bg-gold/50"></div>
                                <p className="mb-10 font-serif text-2xl lg:text-3xl italic leading-relaxed text-gold md:pr-10">
                                    {project.tension}
                                </p>
                                <p className="mb-12 font-sans text-xl font-light leading-relaxed text-parchment/70 md:pr-10">
                                    {project.story}
                                </p>
                                
                                <Link to={project.link} className="group relative self-start overflow-hidden rounded-md border border-parchment/20 px-10 py-4 text-xs tracking-[0.2em] text-parchment uppercase transition-all duration-500 hover:border-gold/50 cursor-pointer block">
                                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">View Case Study</span>
                                    <div className="absolute inset-0 h-full w-full translate-y-[101%] bg-gold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
