import { useState } from 'react';
import CaseStudyLayout from '../components/layout/CaseStudyLayout';

export default function CaseStudyNicaragua() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <CaseStudyLayout
      title="The Nicaragua Campaign"
      subtitle="Recruiting catalysts for sustainable transformation, not just charity."
      client="One Collective"
      role="Lead Filmmaker & Strategist"
      year="2024"
      heroImage="/images/Nicaragua campaign/Nicaragua-pinapple_farm-2025--84.jpg"
    >
      <div className="cs-reveal space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Context</h2>
        <p>
          One Collective had a highly specific, complex missional goal: they needed to hire a "Catalyst" to lead an expansion at Papagayo, a 29-acre pineapple farm and eco-lodge in Nicaragua acting as a hub for sustainable community transformation in Ticuantepe. 
        </p>
        <p>
          The nonprofit space is saturated with campaigns leaning into guilt to drive donations. Our client needed to break that mold. The goal wasn't to raise money; it was to find a highly qualified leader. We had to spend significant time defining exactly who that audience was, what motivated them, and how to communicate effectively without falling into the trap of "poverty porn."
        </p>
      </div>

      <div className="cs-reveal grid grid-cols-1 md:grid-cols-2 gap-4 py-12 w-[100vw] relative left-1/2 -translate-x-1/2 px-4 md:px-12">
        <div className="aspect-[4/5] bg-smoke/20 w-full overflow-hidden">
             <img src="/images/Nicaragua campaign/Nicaragua-laughing-friend-mentoring-workign-coffeeshop-2025-232.jpg" alt="Mentorship and sustainable business" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[4/5] bg-smoke/20 w-full overflow-hidden">
             <img src="/images/Nicaragua campaign/A7304985nicaragua_edited.jpeg" alt="On the ground production" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="cs-reveal space-y-6">
         <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Approach</h2>
         <p>
           I walked closely with key stakeholders from the very beginning to ensure absolute alignment. Because this was such a nuanced request, pre-production had to be rigorous. Before booking flights, I wrote a comprehensive script and built a drafted video using entirely "fake" placeholder footage (a rip-o-matic) to guarantee everyone understood exactly how the script and visuals would feel together.
         </p>
         <p>
           After several rounds of stakeholder revisions, I flew out to Nicaragua to lead the production on the ground. This meant acting as the lead filmmaker while simultaneously managing a local crew of over 30 people, including translators, contractors, and rented gear, in an environment completely unaccustomed to all-day film productions.
         </p>
      </div>
      
      {/* Massive Full Bleed Divider Video */}
      <div className="cs-reveal w-[100vw] relative left-1/2 -translate-x-1/2 h-[70vh] bg-charcoal my-12" onClick={() => setIsPlaying(true)}>
        {!isPlaying ? (
          <div className="w-full h-full relative cursor-pointer group">
             <img src="/images/Nicaragua campaign/Nicaragua+Screen+Grab_2.26.1.jpg_compressed.JPEG" alt="Play Campaign Video" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                 </div>
             </div>
          </div>
        ) : (
          <iframe 
             src="https://player.vimeo.com/video/1078402005?h=72c6c956b6&autoplay=1&color=ffffff&title=0&byline=0&portrait=0" 
             className="absolute inset-0 w-full h-full"
             frameBorder="0" 
             allow="autoplay; fullscreen; picture-in-picture" 
             allowFullScreen
             title="The Missing Link for Growth in Nicaragua"
          ></iframe>
        )}
      </div>

      <div className="cs-reveal space-y-6">
         <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Output</h2>
         <p>
           We delivered a flagship film that matched our pre-viz blueprint, supplemented with motion graphics I built to explain their complex "Integrated Community Transformation" (ICT) model. 
         </p>
         
         {/* Live Video Embed moved to Full Bleed sequence above */}

         <p>
           But a video alone wasn't enough to capture the depth of the strategy. Working with the directors, I also produced an entire long-form podcast episode in-house, giving stakeholders the space to tell the complete 15-year story of how empowering local intelligence is far more potent than simply importing American solutions.
         </p>

         {/* Podcast Promo Block */}
         <a 
           href="https://content.onecollective.org/lc-episode/33" 
           target="_blank" 
           rel="noreferrer"
           className="block mt-12 p-8 md:p-12 border border-charcoal/10 bg-white hover:bg-smoke/10 transition-colors duration-500 rounded-sm group relative overflow-hidden"
         >
           <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                 <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Listen to the Episode</p>
                 <h3 className="font-serif text-2xl md:text-3xl text-charcoal leading-tight">#33: Scaling Ministry Sustainably</h3>
              </div>
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:text-parchment transition-all duration-300">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
           </div>
         </a>
      </div>
      
      <div className="cs-reveal grid grid-cols-1 md:grid-cols-3 gap-4 py-12 w-[100vw] relative left-1/2 -translate-x-1/2 px-4 md:px-12">
        <div className="aspect-square bg-smoke/20 w-full overflow-hidden">
             <img src="/images/Nicaragua campaign/Nicaragua-2025--63.jpg_compressed.JPEG" alt="Local context" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square bg-smoke/20 w-full overflow-hidden">
             <img src="/images/Nicaragua campaign/A7305290nicaragua_edited.jpeg" alt="Pineapple farm details" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square bg-smoke/20 w-full overflow-hidden">
             <img src="/images/Nicaragua campaign/OneCollective_Nicaragua-2020-SSheridan-196.jpg" alt="Community interaction" className="w-full h-full object-cover" />
        </div>
      </div>

    </CaseStudyLayout>
  );
}
