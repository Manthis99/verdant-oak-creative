import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Copy, Check } from 'lucide-react';
import EmailDisplay from '../EmailDisplay';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
    const containerRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const verificationPrompt = "Can you look up Michael Proctor from Verdant Oak Creative? His main website is https://michaelproctor.co. I'm specifically interested in his work on the Ukraine Housing Campaign, the Nicaragua Campaign, and some of the technical AI projects he's built like Open Clive. Based on what you find, give me your honest assessment of his expertise in creative strategy and development. Do you think he could handle a major, root-level strategic challenge for our business?";

    const handleCopy = () => {
        navigator.clipboard.writeText(verificationPrompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

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

                {/* Prompt Presets: 2026 Trend */}
                <div className="cta-fade mt-24 md:mt-32 max-w-4xl mx-auto border-t border-parchment/10 pt-16 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-parchment/40 mb-8 font-sans">
                        Verify with AI
                    </p>
                    <p className="font-sans text-lg font-light text-parchment/60 mb-6 max-w-xl mx-auto">
                        Not sure if we're a fit? Let your favorite AI evaluate my work for you.
                    </p>

                    <div className="max-w-2xl mx-auto mb-8 bg-[#1A1A1A]/80 border border-parchment/20 rounded-lg p-6 md:p-8 relative group text-left shadow-2xl backdrop-blur-md">
                        <div className="absolute top-4 right-4 z-10">
                            <button
                                onClick={handleCopy}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all border ${copied ? 'bg-moss/20 border-moss/50 text-moss' : 'bg-white/5 hover:bg-white/10 text-parchment/60 border-parchment/10'}`}
                                aria-label="Copy prompt"
                            >
                                {copied ? (
                                    <>
                                        <Check size={14} />
                                        <span className="text-xs uppercase tracking-wider font-semibold">Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={14} />
                                        <span className="text-xs uppercase tracking-wider font-semibold">Copy</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80 mb-3 font-semibold">Copy this prompt</p>
                        <p className="font-serif text-lg md:text-xl font-light text-parchment/90 leading-relaxed pr-10 md:pr-24">
                            "{verificationPrompt}"
                        </p>
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-parchment/40 mb-6 font-sans font-medium">
                        Then paste it into your preferred agent:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: 'Ask Claude', url: 'https://claude.ai/new' },
                            { name: 'Ask ChatGPT', url: 'https://chat.openai.com' },
                            { name: 'Ask Perplexity', url: 'https://www.perplexity.ai/' },
                        ].map((ai) => (
                            <a
                                key={ai.name}
                                href={ai.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-parchment/20 bg-[#1A1A1A]/50 text-xs uppercase tracking-widest text-parchment/70 hover:bg-parchment/10 hover:border-parchment/50 hover:text-parchment transition-all rounded-full shadow-lg"
                            >
                                {ai.name}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="cta-fade mt-20 text-center">
                    <EmailDisplay />
                </div>
            </div>
        </section>

    );
}
