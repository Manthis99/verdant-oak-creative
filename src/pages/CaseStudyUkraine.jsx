import { useState } from 'react';
import CaseStudyLayout from '../components/layout/CaseStudyLayout';

export default function CaseStudyUkraine() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <CaseStudyLayout
      title="Ukraine Housing Campaign"
      subtitle="A story built to move people from awareness to action, raising over $500k for safe homes."
      client="One Collective Ukraine"
      role="Videographer & Editor"
      year="2022"
      heroImage="/images/Ukrain campaign/Rebuild Ukriane Screen Grab_2.203.1.T.jpg"
    >
      <div className="cs-reveal space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Context</h2>
        <p>
          In 2022, as war broke out across Ukraine, millions were forced to flee. Internally displaced families poured into cities like Uzhhorod, looking for refuge. Our client, One Collective Ukraine, had established a plan to build an 18-home "Tiny Home Village" to house over 80 of these refugees. But to make it a reality, they needed a comprehensive campaign that could immediately communicate the stakes.
        </p>
        <p>
          They needed more than just a fundraising video; they needed an ongoing narrative of trust and clarity. Donors needed to feel the immediacy of the crisis while also recognizing the incredible resilience of the local community, believing that their support would directly and transparently result in safe homes.
        </p>
      </div>

      <div className="cs-reveal grid grid-cols-1 md:grid-cols-2 gap-4 py-12 w-[100vw] relative left-1/2 -translate-x-1/2 px-4 md:px-12">
        <div className="aspect-[4/5] bg-smoke/20 w-full overflow-hidden">
             <img src="/images/Ukrain campaign/Rebuild Ukriane Screen Grab_1.14.1.jpg" alt="Construction detail" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[4/5] bg-smoke/20 w-full overflow-hidden">
             <img src="/images/Ukrain campaign/Rebuild Ukriane Screen Grab_2.126.1.jpg" alt="Local environment" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="cs-reveal space-y-6">
         <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Approach</h2>
         <p>
           I traveled to Ukraine during a volatile window in 2022. Time was limited - the local leader was moving fast to coordinate relief efforts, and safety concerns in an active warzone meant we had to move quickly and stay low profile. I acted as the lead videographer on the ground.
         </p>
         <p>
           The production was reactive. I worked directly with our CEO, guiding and directing videos on the fly as situations unfolded. We were not just shooting b-roll; we were building a documentary anchor that could support a prolonged campaign. Because I could not shoot everything personally, I coordinated with local videographers, eventually editing and synthesizing footage into over 10 cohesive campaign videos.
         </p>
      </div>
      
      {/* Massive Full Bleed Divider Video */}
      <div className="cs-reveal w-[100vw] relative left-1/2 -translate-x-1/2 h-[70vh] bg-charcoal my-12" onClick={() => setIsPlaying(true)}>
        {!isPlaying ? (
          <div className="w-full h-full relative cursor-pointer group">
             <img src="/images/Ukrain campaign/Rebuild+Ukriane+Screen+Grab_2.221.1.T.jpg" alt="Play Campaign Video" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                 </div>
             </div>
          </div>
        ) : (
          <iframe 
             src="https://player.vimeo.com/video/746906816?h=72c6c956b6&autoplay=1&color=ffffff&title=0&byline=0&portrait=0" 
             className="absolute inset-0 w-full h-full"
             frameBorder="0" 
             allow="autoplay; fullscreen; picture-in-picture" 
             allowFullScreen
             title="Ukraine Housing Campaign Video"
          ></iframe>
        )}
      </div>

      <div className="cs-reveal space-y-6">
         <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Result</h2>
         <p>
           The localized footage was woven into a comprehensive ecosystem including a dedicated sales/landing page, social content, and podcast episodes. We carefully tracked results to connect donor support directly to houses being built, maintaining trust in real-time.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 mt-12 border-t border-charcoal/10">
            <div className="flex flex-col">
               <span className="font-serif text-4xl text-charcoal mb-2">$591,140</span>
               <span className="font-sans text-xs tracking-[0.1em] text-charcoal/60 uppercase">Total Capital Raised</span>
            </div>
            <div className="flex flex-col">
               <span className="font-serif text-4xl text-charcoal mb-2">80 Families</span>
               <span className="font-sans text-xs tracking-[0.1em] text-charcoal/60 uppercase">Successfully Housed</span>
            </div>
            <div className="flex flex-col">
               <span className="font-serif text-4xl text-charcoal mb-2">200K+</span>
               <span className="font-sans text-xs tracking-[0.1em] text-charcoal/60 uppercase">Campaign Impressions</span>
            </div>
         </div>
      </div>

    </CaseStudyLayout>
  );
}
