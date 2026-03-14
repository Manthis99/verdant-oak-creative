import { useState } from 'react';

export default function LeadMagnet({ data, componentType, onSubmitLead }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitLead({ ...formData, flowData: data, flowType: componentType });
  };

  return (
    <div className="bg-charcoal border border-gold/30 p-8 md:p-12 rounded-lg contact-reveal relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mb-8 flex items-center justify-between text-xs tracking-widest text-gold uppercase relative z-10">
        <span>Final Step</span>
      </div>

      <h3 className="font-serif text-3xl md:text-4xl text-parchment mb-4 relative z-10">
        Your Field Guide Is Ready.
      </h3>
      
      <p className="text-parchment/70 font-light mb-10 relative z-10 leading-relaxed md:pr-12">
        Submit your details to send this inquiry directly to my desk. In return, you will get
        <span className="italic text-parchment"> Why a Great Video Is a Waste of Money</span>: a practical field guide to the places creative work usually breaks before it ever has a chance to help.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-xs font-medium tracking-wider text-parchment/60 uppercase">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-parchment/20 py-3 text-lg focus:outline-none focus:border-gold transition-colors placeholder:text-parchment/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-medium tracking-wider text-parchment/60 uppercase">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@example.com"
              className="w-full bg-transparent border-b border-parchment/20 py-3 text-lg focus:outline-none focus:border-gold transition-colors placeholder:text-parchment/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="projectDetails" className="block text-xs font-medium tracking-wider text-parchment/60 uppercase">Anything else I should know? (Optional)</label>
          <input 
            type="text" 
            name="projectDetails" 
            id="projectDetails" 
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Links, specific deadlines, or context..."
            className="w-full bg-transparent border-b border-parchment/20 py-3 text-lg focus:outline-none focus:border-gold transition-colors placeholder:text-parchment/20"
          />
        </div>

        <button 
          type="submit" 
          disabled={!formData.name || !formData.email}
          className="w-full md:w-auto mt-8 relative overflow-hidden rounded-md border border-gold bg-gold px-12 py-5 text-sm tracking-[0.2em] text-charcoal font-medium uppercase transition-all duration-500 hover:bg-transparent hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed group"
        >
          <span className="relative z-10 transition-colors duration-500">Submit & Get the Guide</span>
          <div className="absolute inset-0 h-full w-full translate-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[101%]"></div>
        </button>
      </form>
    </div>
  );
}
