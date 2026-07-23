import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const PRESETS = [
    "We need a brand video for our upcoming fundraiser.",
    "Our website feels outdated and isn't converting.",
    "People don't understand our core mission.",
    "We're launching a new campaign but lack a cohesive story."
];

export default function ClarityDiagnostic() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const resultRef = useRef(null);

    const runDiagnostic = () => {
        if (!input.trim()) return;

        setIsProcessing(true);
        setResult(null);

        // Simulate "AI" processing
        setTimeout(() => {
            const reframe = simulateReframe(input);
            setResult(reframe);
            setIsProcessing(false);
        }, 1500);
    };

    const simulateReframe = (text) => {
        const lowerText = text.toLowerCase();
        let symptom = "Creative Execution";
        let root = "Clarity of Purpose";

        if (lowerText.includes("video") || lowerText.includes("film")) {
            symptom = "Video Production";
            root = "Message Hierarchy";
        } else if (lowerText.includes("website") || lowerText.includes("site") || lowerText.includes("page")) {
            symptom = "Web Design";
            root = "User Trust/Logic";
        } else if (lowerText.includes("brand") || lowerText.includes("identity")) {
            symptom = "Visual Branding";
            root = "Strategic Positioning";
        } else if (lowerText.includes("people") || lowerText.includes("understand")) {
            symptom = "Communication";
            root = "Core Narrative";
        }

        return {
            symptom,
            root,
            advice: `Your current hurdle isn't ${symptom.toLowerCase()}—it's ${root.toLowerCase()}. Until we solve the root, no amount of creative polish will fix the tension.`
        };
    };

    useEffect(() => {
        if (result && resultRef.current) {
            gsap.fromTo(resultRef.current,
                { opacity: 0, y: 20, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' }
            );
        }
    }, [result]);

    return (
        <div className="w-full max-w-2xl mx-auto bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md shadow-2xl relative overflow-hidden group">
            {/* Animated background subtle pulse */}
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-2 w-2 rounded-full bg-gold animate-pulse"></div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-medium">Clarity Diagnostic v2.0</p>
                </div>

                <h3 className="font-serif text-2xl text-parchment mb-4">Describe the current hurdle.</h3>

                <div className="relative mb-8">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="e.g. We need a new film for our campaign..."
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-5 text-parchment/90 placeholder:text-parchment/20 focus:outline-none focus:border-gold/40 transition-all min-h-[120px] resize-none font-sans text-lg font-light leading-relaxed"
                    />

                    <button
                        onClick={runDiagnostic}
                        disabled={isProcessing || !input.trim()}
                        className="absolute bottom-4 right-4 bg-gold hover:bg-gold-bright text-black px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed group/btn overflow-hidden"
                    >
                        <span className="relative z-10">{isProcessing ? "Analyzing..." : "Analyze"}</span>
                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/40 translate-y-full group-hover/btn:translate-y-0 transition-transform"></div>
                    </button>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {PRESETS.map((p, i) => (
                        <button
                            key={i}
                            onClick={() => setInput(p)}
                            className="bg-white/5 hover:bg-white/10 border border-white/5 px-4 py-2 rounded-full text-[10px] text-parchment/40 hover:text-parchment/70 transition-all"
                        >
                            {p}
                        </button>
                    ))}
                </div>

                {result && !isProcessing && (
                    <div ref={resultRef} className="border-t border-white/10 pt-8 mt-4">
                        <div className="flex items-start gap-4 mb-4">
                            <span className="text-gold text-2xl italic font-serif">Re-frame:</span>
                            <div className="space-y-4">
                                <p className="text-parchment/90 text-xl font-light leading-relaxed">
                                    {result.advice}
                                </p>
                                <div className="flex gap-10 pt-4 border-t border-white/5">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-parchment/30 mb-1 font-sans">Symptom</p>
                                        <p className="text-sm text-[#FF5F5F] font-medium">{result.symptom}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-parchment/30 mb-1 font-sans">Real Issue</p>
                                        <p className="text-sm text-gold font-medium">{result.root}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {isProcessing && (
                    <div className="h-24 flex items-center justify-center">
                        <div className="flex gap-2">
                            <div className="h-1.5 w-1.5 bg-gold rounded-full animate-bounce"></div>
                            <div className="h-1.5 w-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="h-1.5 w-1.5 bg-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
