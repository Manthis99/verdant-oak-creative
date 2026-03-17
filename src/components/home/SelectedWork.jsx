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
    },
    {
        name: "Full Work Archive",
        eyebrow: "Beyond These Two",
        tension: "These two are the sharpest examples. Beyond them is a broader archive of commercial work, documentary shorts, brand campaigns, and full creative systems built over years.",
        story: null,
        image: "/images/South Africa Images/South Africa Reclyclingjpg_2.11.1_1.4.1.jpg_compressed.JPEG",
        link: "/work",
        buttonText: "Explore The Full Work Archive"
    }
];

export default function SelectedWork() {
    const containerRef = useRef(null);
    const featuredProjects = projects.slice(0, 2);
    const archiveProject = projects[2];

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
            <div className="absolute top-0 left-0 w-full z-20 px-6 py-36 md:py-52 pointer-events-none">
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
                <div className="relative z-10 w-full">
                    {/* First two case studies stay right-aligned */}
                    <div className="flex flex-col md:flex-row w-full">
                        <div className="hidden md:block md:w-[45%] lg:w-[45%] shrink-0"></div>
                        <div className="w-full md:w-[55%] lg:w-[55%] shrink-0 py-[60vh] px-6 md:pl-0 md:pr-16 lg:pr-32">
                            {featuredProjects.map((project, i) => (
                                <div key={i} className="project-text-block min-h-[70vh] flex flex-col justify-center pb-24 md:pb-56">
                                    <h3 className="mb-8 font-serif text-4xl lg:text-6xl text-parchment leading-tight">
                                        {project.name}
                                    </h3>
                                    <div className="mb-6 h-[1px] w-24 bg-gold/50"></div>
                                    <p className="mb-10 font-serif text-2xl lg:text-3xl italic leading-relaxed text-gold md:pr-10">
                                        {project.tension}
                                    </p>
                                    {project.story && (
                                        <p className="mb-12 font-sans text-xl font-light leading-relaxed text-parchment/70 md:pr-10">
                                            {project.story}
                                        </p>
                                    )}
                                    
                                    <div className="flex flex-col items-start gap-4">
                                        <p className="text-[11px] uppercase tracking-[0.28em] text-parchment/45 font-medium">
                                            Open the full case study
                                        </p>
                                        <Link
                                            to={project.link}
                                            className="group relative self-start overflow-hidden rounded-full border border-gold/30 bg-black/20 pl-6 pr-4 py-4 text-xs tracking-[0.24em] text-parchment uppercase transition-all duration-500 hover:-translate-y-1 hover:border-gold/55 hover:bg-black/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] cursor-pointer inline-flex items-center gap-4 backdrop-blur-md"
                                        >
                                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(90deg,rgba(212,175,55,0.08),transparent_45%)]"></div>
                                            <span className="relative z-10">View Case Study</span>
                                            <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold transition-all duration-500 group-hover:translate-x-1 group-hover:bg-gold group-hover:text-black">
                                                →
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Deep Archives block centered over image */}
                    <div className="w-full px-6 md:px-16 lg:px-24 pb-24 md:pb-48">
                        <div className="project-text-block min-h-[80vh] flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
                            <div className="relative w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,15,15,0.34),rgba(15,15,15,0.56))] px-6 py-10 md:px-10 md:py-14 backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.28)]">
                                <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_42%)]"></div>
                            {archiveProject.eyebrow && (
                                <p className="relative mb-3 text-xs md:text-sm uppercase tracking-[0.25em] text-gold/80 font-sans font-medium">
                                    {archiveProject.eyebrow}
                                </p>
                            )}
                            <h3 className="relative mb-8 font-serif text-5xl md:text-6xl lg:text-[4.8rem] text-parchment leading-[0.98] tracking-tight">
                                Full Work<br/><span className="italic">Archive.</span>
                            </h3>
                            <div className="relative mb-6 h-[1px] w-24 bg-gold/60 mx-auto"></div>
                            <p className="relative mb-10 max-w-2xl mx-auto font-sans text-lg md:text-xl font-light leading-relaxed text-parchment/88">
                                {archiveProject.tension}
                            </p>
                            
                            <div className="flex flex-col items-center gap-4">
                                <p className="relative text-[11px] uppercase tracking-[0.28em] text-parchment/58 font-medium">
                                    Browse the wider archive
                                </p>
                                <Link
                                    to={archiveProject.link}
                                    className="group relative self-center overflow-hidden rounded-full border border-gold/35 bg-black/35 pl-6 pr-4 py-4 text-xs tracking-[0.24em] text-parchment uppercase transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-black/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.28)] cursor-pointer inline-flex items-center gap-4 backdrop-blur-md"
                                >
                                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(90deg,rgba(212,175,55,0.08),transparent_45%)]"></div>
                                    <span className="relative z-10">
                                        {archiveProject.buttonText || "Explore The Full Archives"}
                                    </span>
                                    <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold transition-all duration-500 group-hover:translate-x-1 group-hover:bg-gold group-hover:text-black">
                                        →
                                    </span>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
