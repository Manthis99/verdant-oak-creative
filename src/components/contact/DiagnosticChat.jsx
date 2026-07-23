import { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

const PRIORITIES = [
  { id: 'impact', label: 'Emotional Impact' },
  { id: 'polish', label: 'Aesthetic Polish' },
  { id: 'speed', label: 'Speed to Market' },
  { id: 'budget', label: 'Budget Efficiency' }
];

export default function DiagnosticChat() {
    const [messages, setMessages] = useState([
        { id: Date.now().toString() + "-init", sender: 'ai', text: "Let's unpack the real problem. First, what is the primary communication tension you're currently facing? Why does this project need to exist right now?" }
    ]);
    const [input, setInput] = useState('');
    const [step, setStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [formData, setFormData] = useState({
        tension: '', outcome: '', obstacle: '', matrix: [], name: '', email: ''
    });

    // Auto-resizing textarea reference
    const inputRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: scrollContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, step]);

    useEffect(() => {
        // Auto-resize textarea
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 160)}px`;
        }
    }, [input]);

    const addAIMessage = (text, delay = 1000) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now().toString() + "-" + Math.random(), sender: 'ai', text }]);
            setIsTyping(false);
        }, delay);
    };

    const handleTextSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userText = input.trim();
        setMessages(prev => [...prev, { id: Date.now().toString() + "-" + Math.random(), sender: 'user', text: userText }]);
        setInput('');

        if (inputRef.current) {
            inputRef.current.style.height = '60px';
        }

        const newFormData = { ...formData };

        if (step === 0) {
            newFormData.tension = userText;
            addAIMessage("Got it. If this project is wildly successful six months from now, what is the single biggest change to your organization?");
            setStep(1);
        } else if (step === 1) {
            newFormData.outcome = userText;
            addAIMessage("And what is the biggest limitation we need to navigate? (Is it timeline, budget, internal alignment, or something else?)");
            setStep(2);
        } else if (step === 2) {
            newFormData.obstacle = userText;
            addAIMessage("Understood. No project can be incredibly fast, dirt cheap, and a cinematic masterpiece. Select your TOP priority from these constraints:", 1200);
            setStep(3);
        } else if (step === 6) {
            newFormData.name = userText;
            addAIMessage(`Thanks ${userText}. And lastly, your email? I'll send this diagnostic to my desk, and automatically give you the free Field Guide.`);
            setStep(7);
        } else if (step === 7) {
            newFormData.email = userText;
            setStep(8);
            addAIMessage("Submitting your diagnostic...", 800);
            submitForm({ ...newFormData, email: userText });
        }

        setFormData(newFormData);
    };

    const handlePriorityClick = (priority) => {
        if (isTyping) return;
        setMessages(prev => [...prev, { id: Date.now().toString() + "-" + Math.random(), sender: 'user', text: priority.label }]);

        const newMatrix = [...formData.matrix, priority];
        setFormData(prev => ({ ...prev, matrix: newMatrix }));

        if (step === 3) {
            addAIMessage("Great. Now select your second highest priority:");
            setStep(4);
        } else if (step === 4) {
            addAIMessage("And your third priority?");
            setStep(5);
        } else if (step === 5) {
            // Deduce the 4th priority automatically
            const remaining = PRIORITIES.find(p => !newMatrix.some(m => m.id === p.id));
            const finalMatrix = [...newMatrix, remaining];
            setFormData(prev => ({ ...prev, matrix: finalMatrix }));

            addAIMessage("Perfect. Let's wrap this up. What is your name?");
            setStep(6);
        }
    };

    const submitForm = async (dataToSubmit) => {
        const payload = new FormData();
        const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        payload.append("access_key", accessKey);
        payload.append("name", dataToSubmit.name);
        payload.append("email", dataToSubmit.email);
        payload.append("Inquiry Type", "Diagnostic Chatbot");
        payload.append("Tension", dataToSubmit.tension);
        payload.append("Outcome", dataToSubmit.outcome);
        payload.append("Obstacle", dataToSubmit.obstacle);
        payload.append("Ranked Priorities", dataToSubmit.matrix.map(r => r.label).join(' > '));

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: payload
            });
            const data = await response.json();
            if (data.success) {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now().toString() + "-final",
                        sender: 'ai',
                        isSuccess: true,
                        text: "Inquiry received! Your project details have been sent to my desk. Click below to download your free Field Guide."
                    }]);
                    setStep(9);
                }, 1500);
            } else {
                addAIMessage("Something went wrong while submitting. Please try emailing hello@michaelproctor.co directly.");
            }
        } catch (error) {
            addAIMessage("Network error checking in... Please try emailing hello@michaelproctor.co directly.");
        }
    };

    const availablePriorities = PRIORITIES.filter(p => !formData.matrix.some(m => m.id === p.id));
    const showPriorityButtons = !isTyping && (step === 3 || step === 4 || step === 5);
    const showTextInput = !isTyping && (step === 0 || step === 1 || step === 2 || step === 6 || step === 7);

    return (
        <div className="w-full max-w-3xl mx-auto bg-charcoal/80 border border-gold/20 p-4 md:p-8 rounded-2xl backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative flex flex-col h-[75vh] min-h-[600px] font-sans">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="h-2 w-2 rounded-full bg-gold animate-pulse"></div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 font-medium">Verdant Oak Diagnostic Agent</p>
            </div>

            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {messages.map((msg, i) => (
                    <div key={msg.id} className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
                        <div className={`max-w-[85%] md:max-w-[75%] p-5 rounded-2xl font-light text-base md:text-lg leading-relaxed shadow-lg ${
                            msg.sender === 'user'
                                ? 'bg-gold/10 text-parchment border border-gold/20 rounded-br-sm'
                                : 'bg-black/60 text-parchment/90 border border-white/10 rounded-bl-sm'
                        }`}>
                            {msg.text}
                            {msg.isSuccess && (
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <a
                                      href="/Verdant_Oak_Field_Guide_Mock.pdf.html"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold/10 border border-gold text-xs tracking-[0.2em] text-gold uppercase hover:bg-gold hover:text-charcoal transition-all"
                                    >
                                        <Check size={14} className="mr-1" /> View & Download Guide
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex w-full justify-start animate-in fade-in duration-300">
                        <div className="bg-black/60 border border-white/10 p-5 rounded-2xl rounded-bl-sm flex gap-2.5 items-center h-[60px] shadow-lg">
                            <div className="h-1.5 w-1.5 bg-gold/70 rounded-full animate-bounce [animation-duration:1s]"></div>
                            <div className="h-1.5 w-1.5 bg-gold/70 rounded-full animate-bounce [animation-delay:0.2s] [animation-duration:1s]"></div>
                            <div className="h-1.5 w-1.5 bg-gold/70 rounded-full animate-bounce [animation-delay:0.4s] [animation-duration:1s]"></div>
                        </div>
                    </div>
                )}

                {showPriorityButtons && (
                    <div className="flex flex-col gap-3 items-start pl-2 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-700">
                        {availablePriorities.map(p => (
                            <button
                                key={p.id}
                                onClick={() => handlePriorityClick(p)}
                                className="text-left px-6 py-3.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-charcoal hover:border-gold transition-all text-sm tracking-widest uppercase font-medium bg-charcoal/50 backdrop-blur-md shadow-lg"
                            >
                                {p.label}
                            </button>
                        ))}
                    </div>
                )}
                <div className="h-4 shrink-0" />
            </div>

            <div className="pt-4 mt-2 relative shrink-0">
                {showTextInput ? (
                    <form onSubmit={handleTextSubmit} className="relative flex items-end">
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleTextSubmit(e);
                                }
                            }}
                            placeholder="Type your answer here... (Press Enter to send)"
                            className="w-full bg-black/50 border border-white/15 rounded-xl py-4 flex items-center pl-5 pr-24 text-parchment/90 placeholder:text-parchment/30 focus:outline-none focus:border-gold/50 focus:bg-black/70 transition-all min-h-[60px] max-h-[160px] resize-none font-light leading-relaxed scrollbar-thin scrollbar-thumb-white/10"
                            rows={1}
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isTyping}
                            className="absolute right-2 bottom-2 bg-gold text-charcoal px-5 flex items-center h-[44px] rounded-lg text-xs uppercase tracking-widest font-bold transition-all hover:bg-gold-bright disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            Send
                        </button>
                    </form>
                ) : (
                    <div className="w-full bg-black/20 border border-white/5 rounded-xl flex items-center justify-center min-h-[60px] px-5 text-parchment/30 font-light text-sm italic">
                        {step === 8 ? "Transmitting..." : step === 9 ? "Diagnostic sequence finalized" : "Waiting for interaction..."}
                    </div>
                )}
            </div>
        </div>
    );
}
