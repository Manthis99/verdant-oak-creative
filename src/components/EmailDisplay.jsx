import { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';

export default function EmailDisplay({ className = "", light = false }) {
  const [copied, setCopied] = useState(false);
  const email = "hello@michaelproctor.co";

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Adjust container styling based on theme context
  const containerClasses = light
    ? "border-charcoal/15 bg-charcoal/[0.03] hover:border-charcoal/30 hover:bg-charcoal/[0.06] text-charcoal/80"
    : "border-parchment/15 bg-parchment/[0.03] hover:border-parchment/30 hover:bg-parchment/[0.06] text-parchment/80";

  const tooltipBg = light ? "bg-charcoal text-parchment" : "bg-parchment text-charcoal";

  return (
    <div className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm backdrop-blur-sm transition-all duration-300 ${containerClasses} ${className}`}>
      <span className="font-mono font-light tracking-wide select-all text-sm">
        {email}
      </span>
      <div className={`h-4 w-[1px] ${light ? 'bg-charcoal/20' : 'bg-parchment/20'}`} />
      <div className="flex items-center gap-2">
        <button
          onClick={handleCopy}
          className="p-1 hover:text-current transition-colors relative group"
          title="Copy email to clipboard"
          type="button"
        >
          {copied ? <Check size={14} className="text-moss" /> : <Copy size={14} />}
          <span className={`absolute -top-9 left-1/2 -translate-x-1/2 scale-0 rounded px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold shadow-lg transition-all duration-200 group-hover:scale-100 whitespace-nowrap ${tooltipBg}`}>
            {copied ? "Copied!" : "Copy"}
          </span>
        </button>
        <a
          href={`mailto:${email}`}
          className="p-1 hover:text-current transition-colors relative group"
          title="Open in mail client"
        >
          <Mail size={14} />
          <span className={`absolute -top-9 left-1/2 -translate-x-1/2 scale-0 rounded px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold shadow-lg transition-all duration-200 group-hover:scale-100 whitespace-nowrap ${tooltipBg}`}>
            Mail App
          </span>
        </a>
      </div>
    </div>
  );
}
