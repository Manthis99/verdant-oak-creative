import { useState } from 'react';

const priorities = [
  { id: 'impact', label: 'Emotional Impact', desc: 'Making the audience feel deeply and remember the message.' },
  { id: 'polish', label: 'Aesthetic Polish', desc: 'Architectural, cinematic, flawless visual execution.' },
  { id: 'speed', label: 'Speed to Market', desc: 'Deploying the asset quickly to capitalize on momentum.' },
  { id: 'budget', label: 'Budget Efficiency', desc: 'Maximizing output while strictly adhering to financial constraints.' }
];

export default function PriorityMatrix({ onComplete }) {
  const [rankings, setRankings] = useState([]);

  const togglePriority = (priority) => {
    if (rankings.find(r => r.id === priority.id)) {
      setRankings(rankings.filter(r => r.id !== priority.id));
    } else {
      if (rankings.length < 4) {
        setRankings([...rankings, priority]);
      }
    }
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const newRankings = [...rankings];
    const temp = newRankings[index];
    newRankings[index] = newRankings[index - 1];
    newRankings[index - 1] = temp;
    setRankings(newRankings);
  };

  const moveDown = (index) => {
    if (index === rankings.length - 1) return;
    const newRankings = [...rankings];
    const temp = newRankings[index];
    newRankings[index] = newRankings[index + 1];
    newRankings[index + 1] = temp;
    setRankings(newRankings);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({ rankings: rankings.map(r => r.label) }, 'matrix');
  };

  return (
    <div className="bg-charcoal border border-parchment/10 p-8 md:p-12 rounded-lg contact-reveal">
      <div className="mb-8 flex items-center justify-between text-xs tracking-widest text-gold uppercase">
        <span>Priority Matrix</span>
      </div>

      <h3 className="font-serif text-3xl md:text-4xl text-parchment mb-4">Rank Your Constraints</h3>
      <p className="text-parchment/60 font-light mb-8">
        No project can be incredibly fast, dirt cheap, and a cinematic masterpiece. 
        Select your priorities below to establish the true parameters of your project.
      </p>

      {rankings.length < 4 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {priorities.filter(p => !rankings.find(r => r.id === p.id)).map(priority => (
            <button 
              key={priority.id}
              onClick={() => togglePriority(priority)}
              className="text-left p-6 border border-parchment/20 rounded hover:border-gold/50 transition-colors group"
            >
              <h4 className="font-serif text-xl text-parchment group-hover:text-gold transition-colors">{priority.label}</h4>
              <p className="text-sm text-parchment/50 mt-2">{priority.desc}</p>
              <div className="mt-4 text-xs tracking-widest text-gold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                + Add to List
              </div>
            </button>
          ))}
        </div>
      )}

      {rankings.length > 0 && (
        <div className="space-y-4 mb-12">
          <h4 className="text-sm tracking-widest text-parchment/60 uppercase mb-6 border-b border-parchment/10 pb-2">Your Priorities (Ranked 1 to {rankings.length})</h4>
          {rankings.map((priority, index) => (
            <div key={priority.id} className="flex items-center gap-4 p-4 bg-parchment/5 rounded border border-parchment/10">
              <div className="font-serif text-2xl text-gold/50 w-8">{index + 1}.</div>
              <div className="flex-1">
                <h4 className="font-serif text-xl text-parchment">{priority.label}</h4>
              </div>
              <div className="flex flex-col gap-1">
                <button onClick={() => moveUp(index)} disabled={index === 0} className="p-1 hover:text-gold disabled:opacity-20 transition-colors">↑</button>
                <button onClick={() => moveDown(index)} disabled={index === rankings.length - 1} className="p-1 hover:text-gold disabled:opacity-20 transition-colors">↓</button>
              </div>
              <button onClick={() => togglePriority(priority)} className="p-2 ml-4 hover:text-red-400 text-parchment/40 transition-colors">✕</button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-end">
        <button 
          onClick={handleSubmit}
          disabled={rankings.length === 0} 
          className="relative overflow-hidden rounded-md border border-gold/50 bg-gold/10 px-8 py-4 text-sm tracking-[0.2em] text-gold uppercase transition-all duration-500 hover:bg-gold hover:text-black disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Analyze Matrix
        </button>
      </div>
    </div>
  );
}
