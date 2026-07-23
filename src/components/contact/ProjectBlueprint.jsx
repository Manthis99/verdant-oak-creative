export default function ProjectBlueprint({ data, onChange }) {
  const handleChange = (e) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-charcoal border border-parchment/10 p-8 md:p-12 rounded-lg contact-reveal">
      <div className="mb-10 flex items-center justify-between text-xs tracking-widest text-gold uppercase border-b border-parchment/10 pb-4">
        <span>Part 1: The Blueprint</span>
      </div>

      <div className="space-y-16">
        <div className="space-y-6">
          <h3 className="font-serif text-3xl md:text-4xl text-parchment">1. The Tension</h3>
          <p className="text-parchment/60 font-light max-w-2xl">What is the primary communication problem you are currently facing? Why does this project need to exist *right now*?</p>
          <textarea
            name="tension"
            value={data.tension}
            onChange={handleChange}
            required
            rows="3"
            placeholder="e.g., We have a great product, but our current video assets look cheap and don't match our premium brand identity..."
            className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-parchment/20"
          ></textarea>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-3xl md:text-4xl text-parchment">2. The Outcome</h3>
          <p className="text-parchment/60 font-light max-w-2xl">If this project is wildly successful six months from now, what is the single biggest change to your organization?</p>
          <textarea
            name="outcome"
            value={data.outcome}
            onChange={handleChange}
            required
            rows="3"
            placeholder="e.g., We will double our conversion rate on the enterprise sales landing page..."
            className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-parchment/20"
          ></textarea>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-3xl md:text-4xl text-parchment">3. The Obstacle</h3>
          <p className="text-parchment/60 font-light max-w-2xl">What is the biggest limitation we need to navigate? (Is it timeline, budget, internal alignment, or something else?)</p>
          <textarea
            name="obstacle"
            value={data.obstacle}
            onChange={handleChange}
            required
            rows="3"
            placeholder="e.g., We need this live before our Q3 summit in 8 weeks, but we have a firm budget cap..."
            className="w-full bg-transparent border-b border-parchment/20 py-3 text-xl focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-parchment/20"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
