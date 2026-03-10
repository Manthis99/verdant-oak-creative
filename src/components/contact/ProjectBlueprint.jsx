import { useState } from 'react';

export default function ProjectBlueprint({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tension: '',
    outcome: '',
    obstacle: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(formData, 'blueprint');
  };

  return (
    <div className="bg-charcoal border border-parchment/10 p-8 md:p-12 rounded-lg contact-reveal">
      <div className="mb-8 flex items-center justify-between text-xs tracking-widest text-gold uppercase">
        <span>Project Blueprint</span>
        <span>Step {step} of 3</span>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-serif text-3xl md:text-4xl text-parchment mb-4">1. The Tension</h3>
            <p className="text-parchment/60 font-light mb-8">What is the primary communication problem you are currently facing? Why does this project need to exist *right now*?</p>
            <textarea 
              name="tension" 
              value={formData.tension}
              onChange={handleChange}
              required 
              rows="4"
              placeholder="e.g., We have a great product, but our current video assets look cheap and don't match our premium brand identity..."
              className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-parchment/20"
            ></textarea>
            <button type="button" onClick={nextStep} disabled={!formData.tension} className="mt-8 text-sm tracking-[0.2em] text-gold uppercase hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
              Next Step →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-serif text-3xl md:text-4xl text-parchment mb-4">2. The Outcome</h3>
            <p className="text-parchment/60 font-light mb-8">If this project is wildly successful six months from now, what is the single biggest change to your organization?</p>
            <textarea 
              name="outcome" 
              value={formData.outcome}
              onChange={handleChange}
              required 
              rows="4"
              placeholder="e.g., We will double our conversion rate on the enterprise sales landing page..."
              className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-parchment/20"
            ></textarea>
            <div className="mt-8 flex gap-8">
              <button type="button" onClick={prevStep} className="text-sm tracking-[0.2em] text-parchment/40 uppercase hover:text-white transition-colors">
                ← Back
              </button>
              <button type="button" onClick={nextStep} disabled={!formData.outcome} className="text-sm tracking-[0.2em] text-gold uppercase hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                Next Step →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="font-serif text-3xl md:text-4xl text-parchment mb-4">3. The Obstacle</h3>
            <p className="text-parchment/60 font-light mb-8">What is the biggest limitation we need to navigate? (Is it timeline, budget, internal alignment, or something else?)</p>
            <textarea 
              name="obstacle" 
              value={formData.obstacle}
              onChange={handleChange}
              required 
              rows="4"
              placeholder="e.g., We need this live before our Q3 summit in 8 weeks, but we have a firm budget cap..."
              className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-parchment/20"
            ></textarea>
            <div className="mt-8 flex gap-8 items-center">
              <button type="button" onClick={prevStep} className="text-sm tracking-[0.2em] text-parchment/40 uppercase hover:text-white transition-colors">
                ← Back
              </button>
              <button type="submit" disabled={!formData.obstacle} className="relative overflow-hidden rounded-md border border-gold/50 bg-gold/10 px-8 py-4 text-sm tracking-[0.2em] text-gold uppercase transition-all duration-500 hover:bg-gold hover:text-black disabled:opacity-30 disabled:cursor-not-allowed">
                Next: Set Priorities
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
