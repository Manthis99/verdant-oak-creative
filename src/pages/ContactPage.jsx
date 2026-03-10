import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ContactPage() {
  const [status, setStatus] = useState('');
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo('.contact-reveal', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' }
    );
  }, { scope: containerRef });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending....");
    const formData = new FormData(event.target);

    // Placeholder Web3Forms key - user will need to swap this out
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message Sent Successfully. I'll be in touch soon.");
        event.target.reset();
      } else {
        console.error("Error", data);
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-charcoal text-parchment pt-32 pb-24 px-4 md:px-8 lg:px-16" ref={containerRef}>
      <div className="max-w-2xl mx-auto">
        <header className="mb-16 contact-reveal">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 tracking-tighter">Let's Talk.</h1>
          <p className="font-sans text-lg md:text-xl text-parchment/70 leading-relaxed font-light">
            If you have a complex communication problem to solve, or just want to explore what's possible, send a message. No pressure, just conversation.
          </p>
        </header>

        <form onSubmit={onSubmit} className="space-y-8 contact-reveal">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium tracking-wider text-parchment/60 uppercase">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors placeholder:text-parchment/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium tracking-wider text-parchment/60 uppercase">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder="hello@example.com"
              className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors placeholder:text-parchment/20"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium tracking-wider text-parchment/60 uppercase">What are you working on?</label>
            <textarea 
              name="message" 
              id="message" 
              required 
              rows="5"
              placeholder="Tell me about your project, the constraints, and the goal..."
              className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-parchment/20"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full md:w-auto relative overflow-hidden rounded-md border border-parchment/20 px-12 py-5 text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:border-gold/50 cursor-pointer group mt-4"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Submit Message</span>
            <div className="absolute inset-0 h-full w-full translate-y-[101%] bg-gold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"></div>
          </button>
          
          {status && (
            <p className={`mt-4 text-sm tracking-wide ${status.includes('Successfully') ? 'text-green-400' : 'text-gold'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
