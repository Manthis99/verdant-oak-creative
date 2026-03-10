import CaseStudyLayout from '../components/layout/CaseStudyLayout';

export default function CaseStudyUkraine() {
  return (
    <CaseStudyLayout
      title="Stories from the Frontline"
      subtitle="A documentary campaign exposing the unvarnished truth of the conflict."
      client="Independent"
      role="Director / DOP"
      year="2023"
      heroImage="/images/project-1-thumb.jpg"
    >
      <div className="cs-reveal space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Context</h2>
        <p>
          As the conflict shifted rapidly into a prolonged daily reality, the media narrative began to drift from the raw human element to abstract geopolitical maps. The objective was to embed deeply, stepping past the press cordons to document the reality facing the individuals whose lives had been irreparably altered.
        </p>
        <p>
          This campaign wasn't about answering the massive "whys" of the war, but about preserving the visceral, undeniable "hows" of its impact on daily existence.
        </p>
      </div>

      <div className="cs-reveal grid grid-cols-1 md:grid-cols-2 gap-4 py-12 w-[100vw] relative left-1/2 -translate-x-1/2 px-4 md:px-12">
        {/* Replace these placeholder blocks with actual image tags when ready */}
        <div className="aspect-[4/5] bg-smoke/20 w-full overflow-hidden">
             <div className="w-full h-full flex items-center justify-center text-charcoal/30">Placeholder Image 1</div>
        </div>
        <div className="aspect-[4/5] bg-smoke/20 w-full overflow-hidden">
             <div className="w-full h-full flex items-center justify-center text-charcoal/30">Placeholder Image 2</div>
        </div>
      </div>

      <div className="cs-reveal space-y-6">
         <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Approach</h2>
         <p>
           We stripped away the massive crews and heavy rigging. It was about operating invisibly—a single lens, natural available light, and an entirely reactive shooting discipline. This wasn't staged b-roll; it was a commitment to being entirely present with the subjects.
         </p>
         <p>
           The output needed to reflect the dirt, the cold, and the sudden tension of the environment. Every frame was graded to strip away artificial warmth, leaving only the stark, high-contrast reality of the situation.
         </p>
      </div>
      
      {/* Massive Full Bleed Divider Image */}
      <div className="cs-reveal w-[100vw] relative left-1/2 -translate-x-1/2 h-[70vh] bg-smoke/20 my-12">
         <div className="w-full h-full flex items-center justify-center text-charcoal/30">Placeholder Grand Image 3</div>
      </div>

      <div className="cs-reveal space-y-6">
         <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8">The Result</h2>
         <p>
           A multi-part documentary series and massive photographic essay that bypassed traditional news distribution networks to connect directly with audiences through grassroots channels. It raised significant tactical funding for local non-profits operating in the zones we documented.
         </p>
      </div>

    </CaseStudyLayout>
  );
}
